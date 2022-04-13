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
Accessories,
Footer
} from './styles';




import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ICarDTO } from '../../dtos/ICarDTO';
import { getAccessoryIcon } from '../../utils/getAccesoryIcon';

interface IParams {
   car: ICarDTO;
}



export function CarDetails(){

   

   const navigation =useNavigation();
   const route = useRoute();

   const { car } = route.params as IParams


   function handleConfirmRental(){
      navigation.navigate("Scheduling");
   }

   function handleBack(){
      navigation.goBack();
   }

return (
           <Container>
               <Header>
                      <BackButton onPress={handleBack} /> 
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
                        <Price> {`R$ ${car.rent.price}`} </Price>
                     </Rent>
                  </Details>

                  <Accessories>
                     { car.accessories.map(accessory=> (
                        <Accessory
                           key={accessory.type}
                           name={accessory.name}
                           icon={getAccessoryIcon(accessory.type)}
                        />
                     ))}

                  </Accessories>
                  <About>
                     {car.about}
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