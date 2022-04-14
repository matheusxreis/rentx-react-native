import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize'; 
import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car';
import { api } from '../../services/api';
import { Ionicons } from '@expo/vector-icons'

import {
Container,
Header,
TotalCars,
HeaderContent,
CartList,
MyCarsButton
} from './styles';

import { ICarDTO } from '../../dtos/ICarDTO';
import { Load } from '../../components/Load';
import { useTheme } from 'styled-components';


export function Home(){

   const theme = useTheme()

   const [cars, setCars] = useState<ICarDTO[]>([]);
   const [loading, setLoading] = useState(true);

   const navigation = useNavigation();

   

      function handleCardDetails(car: ICarDTO){
         navigation.navigate("CarDetails", { car })
      }

      function handleOpenMyCars(){
         navigation.navigate("MyCars");

         console.log('aaaa')
      }

      useEffect(()=>{
         async function fetchCars(){

            try{        
             console.log("AAAE4433433"); 
             const response = await api.get("/cars");

             setCars(response.data);

             console.log(response.data)

            }catch(err){
               console.log(err)
            }finally {
               setLoading(false)
            }
      }
         fetchCars();
      }, [])
      
return (
           <Container>
              <StatusBar
               barStyle="light-content"
               backgroundColor={"transparent"}
               translucent
              />
              
              <Header>
              <HeaderContent>
               <Logo 
               width={RFValue(108)}
               height={RFValue(12)}
               />
               <TotalCars>
                 { cars.length ? `Total de: ${cars.length} carros.`: ''}
               </TotalCars>
               </HeaderContent>
            </Header>
        {loading ?
        <Load/> :
        <CartList 
        data={cars}
        keyExtractor={item=>item.id}
        renderItem={({item})=> 
        <Car 
        onPress={()=>handleCardDetails(item)} 
        data={item}/> }
        />
        }
          
          <MyCarsButton>

         <Ionicons
         name="ios-car-sport"
         size={32}
         color={theme.colors.shape}
         onPress={handleOpenMyCars}
         />

         </MyCarsButton>
            </Container>
               );

}