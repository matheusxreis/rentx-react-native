import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler';

import {
Container,
Title
} from './styles';


interface IConfirmButtonProps extends RectButtonProps {
    title:string;
}

export function ConfirmButton({
title
}: IConfirmButtonProps){
return (
           <Container>
               <Title> {title} </Title>

            </Container>
     );
}