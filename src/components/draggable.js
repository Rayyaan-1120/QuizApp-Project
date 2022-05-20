import React,{useRef,useState,useEffect,useMemo} from 'react';
import {Animated,PanResponder} from 'react-native';
import {Image} from 'native-base'
import { useScore } from '../config/scoreContext';

const Draggable = ({image,correctAnswer,option}) => {

    // console.log(correctAnswer, 'correctAnswer')
    // console.log(option, 'option')

    const {userData,setuserData,dnd,dropzoneone,dropzonetwo,dropzonethree,dropzonefour,draggableoptionone,draggableoptiontwo,draggableoptionthree,draggableoptionfour,setdraggableoptiononecolor,setdraggableoptiontwocolor,setdraggableoptionthreecolor,setdraggableoptionfourcolor,dragscore,setdragscore} = useScore()

    // console.log(draggableoptionone, 'draggableoptionone');
    // console.log(draggableoptiontwo, 'draggableoptiontwo');
    // console.log(draggableoptionthree, 'draggableoptionthree');
    // console.log(draggableoptionfour, 'draggableoptionfour');

    const pan = useRef(new Animated.ValueXY()).current;

   const isDropZone = (gesture,dropz) => {     //Step 2
        var dz = dropz;
        console.log(gesture.moveY,'gesture')
        console.log(dropz,'dropz')
        const measure = Math.trunc(gesture.moveY) - Math.trunc(dz?.pageY);
        console.log(measure,'measure');
        if(measure < 0){
            return false
        }
        return measure <= 50 
    }
   
    


    const panResponder = useMemo(
        () => PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderGrant: () => {
            pan.setOffset({
              x: pan.x._value,
              y: pan.y._value
            });
          },
          onPanResponderMove: Animated.event(
            [
              null,
              { dx: pan.x, dy: pan.y }
            ],
            { useNativeDriver: false }
          ),
          onPanResponderRelease: (e, gesture) => {


              if(isDropZone(gesture,dropzoneone)){ //
                if(draggableoptionone === option){
                    setdraggableoptiononecolor(true)
                    setdragscore((prevstate) => prevstate + 250)
                    // alert("Correct Answer")
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        friction: 5,
                        useNativeDriver:false
                      }).start();
                    }else{
                    setdraggableoptiononecolor(true)
                    
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        friction: 5,
                        useNativeDriver:false
                      }).start();
                    
                }
            }else if(isDropZone(gesture,dropzonetwo)){
                if(draggableoptiontwo === option){
                    setdraggableoptiontwocolor(true)
                    setdragscore((prevstate) => prevstate + 250)
                    // alert("Correct Answer")
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        friction: 5,
                        useNativeDriver:false
                      }).start();
                    }else{
                    setdraggableoptiontwocolor(true)
                        Animated.spring(pan, {
                            toValue: { x: 0, y: 0 },
                            friction: 5,
                            useNativeDriver:false
                          }).start();
                    }
                }
               
            else if(isDropZone(gesture,dropzonethree)){
                if(draggableoptionthree === option){
                    setdraggableoptionthreecolor(true)
                    setdragscore((prevstate) => prevstate + 250)
                    // alert("Correct Answer")
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        friction: 5,
                        useNativeDriver:false
                      }).start();
                    }else{
                    setdraggableoptionthreecolor(true)

                        Animated.spring(pan, {
                            toValue: { x: 0, y: 0 },
                            friction: 5,
                            useNativeDriver:false
                          }).start();
                    }
            }else if(isDropZone(gesture,dropzonefour)){
                if(draggableoptionfour === option){
                    setdraggableoptionfourcolor(true)
                    setdragscore((prevstate) => prevstate + 250)
                    // alert("Correct Answer")
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        friction: 5,
                        useNativeDriver:false
                      }).start();
                    }else{
                    setdraggableoptionfourcolor(true)

                        Animated.spring(pan, {
                            toValue: { x: 0, y: 0 },
                            friction: 5,
                            useNativeDriver:false
                          }).start();
                    }
            }
             else{

                Animated.spring(pan, {
                  toValue: { x: 0, y: 0 },
                  friction: 5,
                  useNativeDriver:false
                }).start();
            }
          }
        }),[dropzoneone,dropzonetwo,dropzonethree,dropzonefour]
    );

    //   console.log(dnd,'dnd')

    return(
        <>
            <Animated.View 

             {...panResponder.panHandlers}
             style={{width: '50%',zIndex:100, alignItems: 'center',transform: [{ translateX: pan.x }, { translateY: pan.y }]}} >
             <Image alt="chart image" key={image} source={image} w={100} h={100}/>

             </Animated.View>

        </>
    )
}

export default Draggable
