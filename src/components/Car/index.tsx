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

interface ICardData {
    brand:string;
    name:string;
    rent: {
        period: string;
        price: number;
    },
    thumbnail:string;
}


interface ICardProps {
    data: ICardData
}

export function Car({ data } : ICardProps){
return (
           <Container>
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