import React, {useEffect, useState} from 'react'

import {
Container,
Header,
CarImages,
Content,
Details,
Description,
Brand,
Name,
Rent,
Period,
Price,
Acessories,
Footer,
RentalPeriod,
CalendarIcon,
DateInfo,
DateTitle,
DateValue,
RentalPrice,
RentalPriceLabel,
RentalPriceDetails,
RentalPriceQuota,
RentalPriceTotal,
MyCarsButton
} from './styles';




import {Feather} from '@expo/vector-icons'
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../styles/theme';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { ICarDTO } from '../../dtos/ICarDTO';
import { format } from 'date-fns/esm';
import { getPlataformDate } from '../../components/Calendar/getPlataformDate';
import parseISO from 'date-fns/parseISO';
import { api } from '../../services/api';
import { Alert } from 'react-native';

import { Ionicons } from '@expo/vector-icons'

interface IParams {
   car: ICarDTO;
   dates: string[]
}

interface IRentalPeriod {

      start:string;
      end:string;

}

export function SchedulingDetails(){

   const [rentalPeriod, setRentalPeriod] = useState<IRentalPeriod>({} as IRentalPeriod)
   const [loading, setLoading] = useState<boolean>(false)
   
   const theme = useTheme();

   const navigation = useNavigation();

   const route = useRoute();

    const { car, dates } = route.params as IParams;

    
   async function handleConfirmRental(){

      try{

         setLoading(true)
         const schedulesByCar = await apji.get(`/schedules_bycars/${car.id}`);

        
      const unavailable_dates = {
         ...schedulesByCar.data.unavailable_dates,
         dates

      };

      await api.post('/schedules_byuser', {
         user_id:1,
         car,
         startDate: format(getPlataformDate(parseISO(dates[0])), 'dd/MM/yyyy'),
         endDate: format(getPlataformDate(parseISO(dates[dates.length-1])), 'dd/MM/yyyy')
      })

      await api.put(`/schedules_bycars/${car.id}`, {
         id:car.id,
         unavailable_dates

      })

      navigation.navigate("SchedulingComplete")
   }catch(err){
      console.log(err);
      Alert.alert('Alguma coisa deu errado.');
      setLoading(false);
   }
   }

   function handleBack(){
      navigation.goBack();
   }

   const rentTotal = Number(dates.length * car.rent.price) 


   useEffect(()=>{
      setRentalPeriod({
         start: format(getPlataformDate(parseISO(dates[0])), 'dd/MM/yyyy'),
         end: format(getPlataformDate(parseISO(dates[dates.length-1])), 'dd/MM/yyyy')
      })
   },[])
return (
           <Container>
               <Header>
                      <BackButton onPress={()=>handleBack()} /> 
               </Header>
               <CarImages>
                  <ImageSlider imagesUrl={car.photos}/>
               </CarImages>

               <Content>

                  <Details>
                     <Description>
                        <Brand>
                        {car.brand}
                        </Brand>
                        <Name>
                        {car.name}
                        </Name>
                     </Description>

                     <Rent>
                        <Period> {car.rent.period} </Period>
                        <Price> R$ {car.rent.price} </Price>
                     </Rent>
                  </Details>

                  <Acessories>

                     {
                        car.accessories.map(x=>(
                           <Accessory 
                           key={x.type}
                           name={x.name} 
                           icon={getAccessoryIcon(x.type)}/> 

                        ))
                     }
                  </Acessories>
                  
                  <RentalPeriod>
                     <CalendarIcon>
                        <Feather
                        name="calendar"
                        size={RFValue(24)}
                        color={theme.colors.shape}
                        />
                     </CalendarIcon>

                     <DateInfo>
                        <DateTitle> DE </DateTitle>
                        <DateValue> {rentalPeriod.start} </DateValue>
                     </DateInfo>

                     <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.shape}
                     />

                     <DateInfo>
                        <DateTitle> ATÉ </DateTitle>
                        <DateValue> {rentalPeriod.end} </DateValue>
                     </DateInfo> 

                  </RentalPeriod>


                  <RentalPrice>

                     <RentalPriceLabel>
                        TOTAL
                     </RentalPriceLabel>

                     <RentalPriceDetails>
                        <RentalPriceQuota> {`R$ ${car.rent.price} x ${dates.length} diárias`} </RentalPriceQuota>
                        <RentalPriceTotal> R$ {rentTotal} </RentalPriceTotal>
                     </RentalPriceDetails>
                  </RentalPrice>
               </Content>

               <Footer>
                  <Button 
                  onPress={()=>handleConfirmRental()}
                  color={theme.colors.success}
                  title="Alugar agora"
                  loading={loading}
                  enabled={!loading}/>
               </Footer>

               
            </Container>
               );

}