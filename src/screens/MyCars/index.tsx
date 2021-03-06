import { useNavigation } from '@react-navigation/native';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { ICarDTO } from '../../dtos/ICarDTO';
import { api } from '../../services/api';

import {
Container,
Header,
Title,
Subtitle,
Content,
Appointments,
AppointmentsTitle,
AppointmentsQuantity,
CarWrapper,
CarFooter,
CarFooterTitle,
CarFooterPeriod,
CarFooterDate,
} from './styles';

import { AntDesign } from '@expo/vector-icons'
import { Load } from '../../components/Load';
interface ICarProps {
     
     car: ICarDTO;
     id:string;
     user_id:string;
     startDate:string;
     endDate:string;
}

export function MyCars(){

     const navigation = useNavigation();
     const theme = useTheme();
     const [cars, setCars] = useState<ICarProps[]>([])

     const [loading, setLoading] = useState<boolean>(true);


     function handleBack(){
          navigation.goBack();
       }

     useEffect(()=>{
          async function fetchCars(){

               try{ 
                 const response: AxiosResponse = await api.get(`/schedules_byuser?user_id=1`)

               setCars(response.data);

               console.log(response.data)
               }catch(err){
                    console.log(err)
               }finally{
                    setLoading(false)
               }
          }

          fetchCars();
     },[])
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
                              onPress={()=>handleBack()} /> 
                              
                              <Title>
                              Escolha uma {'\n'}
                              data de in??cio e {'\n'}
                                   fim do aluguel
                              
                              </Title>
                              <Subtitle>
                                   Conforto, seguran??a e praticidade.
                              </Subtitle>

                             
                         </Header>

                         {loading ?
     
                         <Load />
                              :
                         <Content>
                              <Appointments>
                                   <AppointmentsTitle> Agendamentos feitos </AppointmentsTitle>
                                   <AppointmentsQuantity> {cars.length} </AppointmentsQuantity>

                              </Appointments>

                              <FlatList
                              data={cars}
                              keyExtractor={item=>item.id}
                              showsVerticalScrollIndicator={false}
                              renderItem={({item})=>(
                              <CarWrapper>
                                   <Car data={item.car}/>

                                   <CarFooter>
                                        <CarFooterTitle> Per??odo </CarFooterTitle>

                                        <CarFooterPeriod>
                                             <CarFooterDate> {item.startDate} </CarFooterDate>
                                             <AntDesign 
                                              name="arrowright"
                                              size={20}
                                              color={theme.colors.title}
                                              style={{marginHorizontal:10}}
                                              />
                                        <CarFooterDate> {item.endDate} </CarFooterDate>                                                   

                                        </CarFooterPeriod>
                                   </CarFooter>
                              </CarWrapper> 
                              )}
                              />
                         </Content>
                    }

            </Container>
     );
}