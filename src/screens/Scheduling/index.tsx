import React, {useState} from 'react'
import { ColorPropType, StatusBar } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import { generateInterval } from '../../components/Calendar/generateInterval';

export function Scheduling(){

     const [lastSelectedDate, setLastSelectedDate] = useState<IDayProps>({} as IDayProps)
     const [markedDates, setMarkedDates] = useState<IMarkedDateProps>({} as IMarkedDateProps)
   
     const theme = useTheme();

    const navigation = useNavigation();

   function handleConfirmRental(){
      navigation.navigate("SchedulingDetails")
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
                              <DateValueView selected={false}>
                                        <DateValue> </DateValue>
                              </DateValueView>
                         </DateInfo>

                         <ArrowSvg />
                    
                         <DateInfo>
                        
                              <DateTitle> DE </DateTitle>
                              <DateValueView selected={false}>
                                        <DateValue> </DateValue>
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
               title="Confirmar" />
               </Footer>
            </Container>
     );
}