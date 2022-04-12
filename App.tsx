import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';


import {useFonts,
Inter_400Regular,
Inter_500Medium} from '@expo-google-fonts/inter';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';
import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components/native';


import {theme} from './src/styles/theme'
import { CarDetails } from './src/screens/CarDetails';


export default function App() {


  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
        <CarDetails />
        {/* <Home /> */}
    </ThemeProvider>
   
  )
 }