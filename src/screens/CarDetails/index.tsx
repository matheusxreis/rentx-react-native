import React from 'react'

import {
Container,
Header,
CarImages,
} from './styles';


import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

export function CarDetails(){
return (
           <Container>
               <Header>
                      <BackButton onPress={()=>{}} /> 
               </Header>
               <CarImages>
                  <ImageSlider imagesUrl={['https://www.pngmart.com/files/1/Audi.png', '']}/>
               </CarImages>
            </Container>
               );

}