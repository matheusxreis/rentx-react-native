import React, {useRef, useState} from 'react'
import { ViewToken } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import {
Container,
ImageIndexes,
ImageIndex,
CarImageWrapper,
CarImage,
} from './styles';


interface IImageSlider {
    imagesUrl: string[]
}

interface IChangeImageProps{
    viewableItems: ViewToken[];
    changed: ViewToken[];

}
export function ImageSlider({
    imagesUrl
}: IImageSlider){

    const [imageIndex, setImageIndex] = useState<number>(0)

    const indexChanged = useRef((info: IChangeImageProps) => {

        const index = info.viewableItems[0].index! 

        setImageIndex(index)
    })
return (
           <Container>
               <ImageIndexes>
                   {
                       imagesUrl.map((item, index)=>(
                        <ImageIndex 
                        key={String(index)}
                        active={index===imageIndex}/>
                       ))
                      
                    }

               </ImageIndexes>

              
                   <FlatList
                   data={imagesUrl}
                   keyExtractor={key=>key} 
                   horizontal
                   showsHorizontalScrollIndicator={false}
                   onViewableItemsChanged={indexChanged.current}
                   renderItem={({item})=> (
                    <CarImageWrapper>
                            <CarImage 
                            source={{uri:item}}
                            resizeMode="contain"
                            />
                     </CarImageWrapper>
                   )}/>

                   
                 

            </Container>
     );
}