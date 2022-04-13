import React, {useRef, useState} from 'react'
import { Alert, ColorPropType, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import {
Container,
Header,
Title,
RentalPeriod,
DateInfo,
DateTitle,
DateValue,
DateValueView,
Content,
Footer
} from './styles';

import ArrowSvg from '../../assets/arrow.svg'
import { Button } from '../../components/Button';
import { Calendar, IDayProps, IMarkedDateProps } from '../../components/Calendar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { generateInterval } from '../../components/Calendar/generateInterval';
import { getPlataformDate } from '../../components/Calendar/getPlataformDate';
import { format, parseISO } from 'date-fns';
import { IParams } from '../CarDetails';

interface IRentalPeriod {
start: number;
startFormatted: string;
end: number;
endFormatted: string;
}
export function Scheduling(){

     const [lastSelectedDate, setLastSelectedDate] = useState<IDayProps>({} as IDayProps)
     const [markedDates, setMarkedDates] = useState<IMarkedDateProps>({} as IMarkedDateProps)
   
     const [rentalPeriod, setRentalPeriod] = useState<IRentalPeriod>({} as IRentalPeriod)
     const theme = useTheme();

    const navigation = useNavigation();

    const route = useRoute();

    const { car } = route.params as IParams;

   function handleConfirmRental(){

     if(!rentalPeriod.start || !rentalPeriod.end){
          return Alert.alert('Selecione o intervalo para alugar.')
     }else {
          navigation.navigate("SchedulingDetails", {
               car,
               dates: Object.keys(markedDates),
          })

     }
   }

   function handleBack(){
     navigation.goBack();
  }


  function handleChangeDate(date: IDayProps){
     let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
     let end = date;


     if(start.timestamp>end.timestamp){
          start = end;
          end = start;
     }

     setLastSelectedDate(end);

     console.log("DAAAAATA")

     const interval = generateInterval(start, end);

     setMarkedDates(interval);

     const firstDate = Object.keys(interval)[0]

     const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

     setRentalPeriod({
          start: start.timestamp,
          end: end.timestamp,

          startFormatted:format(getPlataformDate(parseISO(firstDate)), 'dd/MM/yyyy'),
          endFormatted:format(getPlataformDate(parseISO(endDate)), 'dd/MM/yyyy'),
     })
     console.log(interval)

  }


return (
           <Container>

               <Header>
                    <StatusBar 
                    barStyle='light-content'
                    translucent
                    backgroundColor={"transparent"}
                    />
                    <BackButton 
                    color={theme.colors.shape}
                    onPress={()=>handleBack()} /> 
                    
                    <Title>
                        Escolha uma {'\n'}
                        data de início e {'\n'}
                         fim do aluguel
                        
                    </Title>

                    <RentalPeriod>

                         <DateInfo>
                              <DateTitle> DE </DateTitle>
                              <DateValueView selected={!!rentalPeriod.startFormatted}>
                                        <DateValue> {rentalPeriod?.startFormatted} </DateValue>
                              </DateValueView>
                         </DateInfo>

                         <ArrowSvg />
                    
                         <DateInfo>
                        
                              <DateTitle> DE </DateTitle>
                              <DateValueView selected={!!rentalPeriod.endFormatted}>
                                        <DateValue> {rentalPeriod?.endFormatted} </DateValue>
                              </DateValueView>
                         
                         </DateInfo>

                    </RentalPeriod>
               </Header>

               <Content>
                         <Calendar 
                         markedDates={markedDates}
                         onDayPress={handleChangeDate}/>

               </Content>
               

               <Footer>
               <Button
               onPress={()=>handleConfirmRental()}
               title="Confirmar" 
               enabled={!!rentalPeriod.endFormatted}/>
               </Footer>
            </Container>
     );
}