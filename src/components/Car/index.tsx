import React from 'react'

import {
Container,
Details,
Brand,
Name,
About,
Rent,
Period,
Price,
Type,
CardImage
} from './styles';

import GasolineSvg from '../../assets/gasoline.svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { ICarDTO } from '../../dtos/ICarDTO';



interface ICardProps extends RectButtonProps {
    data: ICarDTO
}



export function Car({ data, ...rest } : ICardProps){


return (
           <Container {...rest}>
               <Details>
                   <Brand> {data.brand} </Brand>
                   <Name> {data.name} </Name>

                   <About>
                       <Rent>
                           <Period>
                               {`${data.rent.period}`}
                           </Period>
                           <Price>
                           {`R$ ${data.rent.price}`}
                           </Price>
                        </Rent>
                        <Type>
                            <GasolineSvg />
                        </Type>
                   </About>
               </Details>

               <CardImage
                source={{uri:data.thumbnail}}
                resizeMode="contain"/>
            </Container>
               );

}