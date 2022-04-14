import React from 'react'
import { Button, StatusBar, StyleSheet } from 'react-native'

import Animated, { useSharedValue, useAnimatedStyle }from 'react-native-reanimated'
import {
Container
} from './styles';

export function Splash(){

    const animation = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(()=>{
        return {
            transform: [{translateX: animation.value}]
        }
    })

    function handlePositionAnimation(){
        animation.value=100;
    }
return (
           <Container>
               <StatusBar
               barStyle="light-content"
               backgroundColor={"transparent"}
               translucent
              />

              <Animated.View style={[styles.box, animatedStyles]}>

              </Animated.View>

              <Button
              onPress={handlePositionAnimation}
              title="Mover" 
              />


            </Container>
     );
}


const styles = StyleSheet.create({
    box: {
        width:100,
        height:100,
        backgroundColor:'red'
    }
})