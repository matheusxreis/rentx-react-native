import React from 'react'
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import {
Container,
Title
} from './styles';

interface IButtonProps {
    title:string;
    color?:string;
    onPress:()=>void;
    enabled?:boolean;
    loading?: boolean;
}
export function Button({
    title, 
    color,
    onPress,
    enabled = true,
    loading = false,
}: IButtonProps){

    const theme = useTheme()
return (



    
           <Container
           color={color}
           onPress={onPress}
           enabled={enabled}
           style={{ opacity: (enabled==false || loading === true) ? .5 : 1}}>
                
                {loading ?
                <ActivityIndicator 
                color={theme.colors.shape}/>
                :
                <Title> {title} </Title>
                }
            </Container>
     );
}