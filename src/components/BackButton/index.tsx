import React from 'react'

import { MaterialIcons } from "@expo/vector-icons";

import {
Container
} from './styles';
import { useTheme } from 'styled-components';

import { BorderlessButtonProps } from 'react-native-gesture-handler'

interface IBackButtonProps extends BorderlessButtonProps{
    color?:string;

}

export function BackButton({color, ...rest}: IBackButtonProps){

    const theme = useTheme()
return (
           <Container>
               <MaterialIcons
               name="chevron-left"
               size={24}
               color={color ? color : theme.colors.text}
               />

            </Container>
               );

}