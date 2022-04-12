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
About,
Acessories,
Footer
} from './styles';

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'


import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function CarDetails(){

   const navigation =useNavigation();

   function handleConfirmRental(){
      navigation.navigate("Scheduling")
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
                     <Acessory name="380Km/h" icon={SpeedSvg}/>
                     <Acessory name="3.2s" icon={AccelerationSvg}/>
                     <Acessory name="800 HP" icon={ForceSvg}/>
                     <Acessory name="Gasolina" icon={GasolineSvg}/>
                     <Acessory name="Auto" icon={ExchangeSvg}/>
                     <Acessory name="2 pessoas" icon={PeopleSvg}/>

                  </Acessories>
                  <About>
                     Este é um automóvel desportivo. Surgiu do lendário
                     touro do líde indultado na praça Real Maestranza de Servilla. 
                     É um belíssimo carro para quem gosta de acelerar.
                  </About>
               </Content>

               <Footer>
                  <Button 
                  onPress={()=>handleConfirmRental()}
                  title="Escolher período do aluguel"/>
               </Footer>
            </Container>
               );

}