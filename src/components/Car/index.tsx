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

interface ICardData {
    brand:string;
    name:string;
    rent: {
        period: string;
        price: number;
    },
    thumbnail:string;
}


interface ICardProps extends RectButtonProps {
    data: ICardData
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