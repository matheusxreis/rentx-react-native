import React from 'react'

import { MaterialIcons } from "@expo/vector-icons";

import {
Container
} from './styles';
import { useTheme } from 'styled-components';

import { BorderlessButtonProps } from 'react-native-gesture-handler'

interface IBackButtonProps extends BorderlessButtonProps{
    color?:string;
    onPress:()=>void;

}

export function BackButton({color, onPress, ...rest}: IBackButtonProps){

    const theme = useTheme()
return (
           <Container onPress={onPress}>
               <MaterialIcons
               name="chevron-left"
               size={24}
               color={color ? color : theme.colors.text}
               />

            </Container>
               );

}