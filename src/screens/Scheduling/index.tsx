import React from 'react'
import { ColorPropType, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import {
Container,
Header,
Title,
RentalPeriod,
DateInfo,
DateTitle,
DateValue,
DateValueView,
Content,
Footer
} from './styles';

import ArrowSvg from '../../assets/arrow.svg'
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Scheduling(){

    const theme = useTheme()
return (
           <Container>

               <Header>
                    <StatusBar 
                    barStyle='light-content'
                    translucent
                    backgroundColor={"transparent"}
                    />
                    <BackButton 
                    color={theme.colors.shape}
                    onPress={()=>{}} /> 
                    
                    <Title>
                        Escolha uma {'\n'}
                        data de início e {'\n'}
                         fim do aluguel
                        
                    </Title>

                    <RentalPeriod>

                         <DateInfo>
                              <DateTitle> DE </DateTitle>
                              <DateValueView selected={false}>
                                        <DateValue> </DateValue>
                              </DateValueView>
                         </DateInfo>

                         <ArrowSvg />
                    
                         <DateInfo>
                        
                              <DateTitle> DE </DateTitle>
                              <DateValueView selected={false}>
                                        <DateValue> </DateValue>
                              </DateValueView>
                         
                         </DateInfo>

                    </RentalPeriod>
               </Header>

               <Content>
                         <Calendar />

               </Content>
               

               <Footer>
               <Button
               onPress={()=>{}}
               title="Confirmar" />
               </Footer>
            </Container>
     );
}