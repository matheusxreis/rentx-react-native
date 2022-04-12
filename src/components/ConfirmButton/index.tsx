import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler';

import {
Container,
Title
} from './styles';


interface IConfirmButtonProps extends RectButtonProps {
    title:string;
    onPress:()=>void;
}

export function ConfirmButton({
title,
onPress
}: IConfirmButtonProps){
return (
           <Container onPress={onPress}>
               <Title> {title} </Title>

            </Container>
     );
}