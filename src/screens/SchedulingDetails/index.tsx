import React from 'react'

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

} from './styles';

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'


import {Feather} from '@expo/vector-icons'
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../styles/theme';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

export function SchedulingDetails(){

   const theme = useTheme();

   const navigation = useNavigation();

   function handleConfirmRental(){
      navigation.navigate("SchedulingComplete")
   }

return (
           <Container>
               <Header>
                      <BackButton onPress={()=>{}} /> 
               </Header>
               <CarImages>
                  <ImageSlider imagesUrl={['https://www.pngmart.com/files/1/Audi.png', '']}/>
               </CarImages>

               <Content>

                  <Details>
                     <Description>
                        <Brand>
                        {"Honda"}
                        </Brand>
                        <Name>
                        {"Civic"}
                        </Name>
                     </Description>

                     <Rent>
                        <Period> {"Ao dia"} </Period>
                        <Price> {"R$ 580"} </Price>
                     </Rent>
                  </Details>

                  <Acessories>
                     <Accessory name="380Km/h" icon={SpeedSvg}/>
                     <Accessory name="3.2s" icon={AccelerationSvg}/>
                     <Accessory name="800 HP" icon={ForceSvg}/>
                     <Accessory name="Gasolina" icon={GasolineSvg}/>
                     <Accessory name="Auto" icon={ExchangeSvg}/>
                     <Accessory name="2 pessoas" icon={PeopleSvg}/>

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
                        <DateValue> 18/05/2022 </DateValue>
                     </DateInfo>

                     <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.shape}
                     />

                     <DateInfo>
                        <DateTitle> DE </DateTitle>
                        <DateValue> 18/05/2022 </DateValue>
                     </DateInfo> 

                  </RentalPeriod>


                  <RentalPrice>

                     <RentalPriceLabel>
                        TOTAL
                     </RentalPriceLabel>

                     <RentalPriceDetails>
                        <RentalPriceQuota> R$ 580 x3 diárias </RentalPriceQuota>
                        <RentalPriceTotal> R$ 2.900 </RentalPriceTotal>
                     </RentalPriceDetails>
                  </RentalPrice>
               </Content>

               <Footer>
                  <Button 
                  onPress={()=>handleConfirmRental()}
                  color={theme.colors.success}
                  title="Alugar agora"/>
               </Footer>
            </Container>
               );

}