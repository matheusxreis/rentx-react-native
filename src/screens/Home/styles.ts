import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;

    
    

    
    background-color: ${({theme})=>theme.colors.background_primary};
`;

export const HeaderContent = styled.View`


align-content:center;
flex-direction:row;
justify-content:space-between;


`

export const Header = styled.View`

font-family: ${({theme})=> theme.fonts.secondary_600};


width:100%;
height:113px;
background-color: ${({theme})=>theme.colors.header};

justify-content:flex-end;

padding:32px 24px;
`;


export const TotalCars = styled.Text`

font-size: ${RFValue(15)}px;
font-family: ${({theme})=> theme.fonts.primary_400};
color: ${({theme})=>theme.colors.text};
`

export const CartList = styled.FlatList.attrs({
    contentContainerStyle: {
        padding:24
    },
    showsVerticalScrollIndicator:false 
})``