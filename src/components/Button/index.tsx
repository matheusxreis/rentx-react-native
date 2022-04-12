import React from 'react'

import {
Container,
Title
} from './styles';

interface IButtonProps {
    title:string;
    color?:string;
    onPress:()=>void;
}
export function Button({
    title, 
    color,
    onPress
}: IButtonProps){
return (
           <Container
           color={color}
           onPress={onPress}>
                <Title> {title} </Title>
            </Container>
     );
}