import React from 'react'

import { SvgProps } from 'react-native-svg';

import {
Container,
Name
} from './styles';


interface IAcessoryProps {
    name: string;
    icon: React.FC<SvgProps>

}

export function Acessory({
    name,
    icon: Icon
}: IAcessoryProps){
return (
           <Container>
               <Icon width={32} 
               height={32}/>

               <Name>
                   {name}
               </Name>

            </Container>
     );
}