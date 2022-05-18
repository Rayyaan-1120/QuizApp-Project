import React, {useRef, useEffect, useState} from 'react';
import {View, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import RenderIf from './renderIf';
import {fonts, colors, fontSizes} from '../config/theme';
import {useScore} from '../config/scoreContext';

const OptionComponentone = ({conditionone, conditiontwo, value, num}) => {
  const myRef = useRef(null);

  const {dnd, setdnd, dropzoneone, setdropzoneone,draggableoptionone,
    setdraggableoptionone,draggableoptiononecolor} = useScore();

    useEffect(() => {
       setdraggableoptionone(value)
    },[])

  return (
    <TouchableOpacity
      onLayout={() => {
        myRef.current.measure((x, y, width, height, pageX, pageY) => {
          console.log(x, 'x');
          console.log(y, 'y');
          console.log(width, 'width');
          console.log(height, 'height');
          console.log(pageX, 'pageX');
          console.log(pageY, 'pageY');
          if (
            x !== undefined &&
            y !== undefined &&
            width !== undefined &&
            height !== undefined &&
            pageX !== undefined &&
            pageY !== undefined
          ) {
              console.log('I am setted')
            setdropzoneone({x, y, width, height, pageX, pageY});
          }
        });
      }}
      ref={myRef}
      style={{
        alignSelf: 'flex-start',
        width: '100%',
        padding: 8,
        borderWidth: 0.8,
        borderRadius: 4,
        marginVertical:5
      }}>
      <View
        w={'100%'}
        my={1.5}
        flexDir={'row'}
        alignItems="center"
        justifyContent={'space-between'}>
        <Text
          ml={2}
          fontFamily={fonts.regularFont}
          color={colors.text}
          fontSize={fontSizes.xxxlarge}>
          {value}
        </Text>
        <RenderIf isTrue={!draggableoptiononecolor}>
          <View
            w={6}
            h={6}
            borderWidth={2}
            borderColor={colors.iconcolor}
            borderRadius={'full'}
          />
        </RenderIf>
        <RenderIf isTrue={draggableoptiononecolor}>
          <View w={6} h={6} bg={colors.iconcolor} borderRadius={'full'} />
        </RenderIf>
      </View>
    </TouchableOpacity>
  );
};
const OptionComponenttwo = ({conditionone, conditiontwo, value, num}) => {
  const myRef = useRef(null);

  const {dnd, setdnd, dropzonetwo, setdropzonetwo,draggableoptiontwo,
    setdraggableoptiontwo,draggableoptiontwocolor} = useScore();

    useEffect(() => {
        setdraggableoptiontwo(value)
     },[])
 

  return (
    <TouchableOpacity
      onLayout={() => {
        myRef.current.measure((x, y, width, height, pageX, pageY) => {
          console.log(x, 'x');
          console.log(y, 'y');
          console.log(width, 'width');
          console.log(height, 'height');
          console.log(pageX, 'pageX');
          console.log(pageY, 'pageY');

          if (
            x !== undefined &&
            y !== undefined &&
            width !== undefined &&
            height !== undefined &&
            pageX !== undefined &&
            pageY !== undefined
          ) {
            setdropzonetwo({x, y, width, height, pageX, pageY});
          }
        });
      }}
      ref={myRef}
      style={{
        alignSelf: 'flex-start',
        width: '100%',
        padding: 8,
        borderWidth: 0.8,
        borderRadius: 4,
        marginVertical:5

      }}>
      <View
        w={'100%'}
        my={1.5}
        flexDir={'row'}
        alignItems="center"
        justifyContent="space-between">
        <Text
          ml={4}
          fontFamily={fonts.regularFont}
          color={colors.text}
          fontSize={fontSizes.xxxlarge}>
          {value}
        </Text>
        <RenderIf isTrue={!draggableoptiontwocolor}>
          <View
            w={6}
            h={6}
            borderWidth={2}
            borderColor={colors.iconcolor}
            borderRadius={'full'}
          />
        </RenderIf>
        <RenderIf isTrue={draggableoptiontwocolor}>
          <View w={6} h={6} bg={colors.iconcolor} borderRadius={'full'} />
        </RenderIf>
      </View>
    </TouchableOpacity>
  );
};
const OptionComponentthree = ({conditionone, conditiontwo, value, num}) => {
  const myRef = useRef(null);

  const {dnd, setdnd, dropzonethree, setdropzonethree, draggableoptionthree,
    setdraggableoptionthree,draggableoptionthreecolor} = useScore();

    useEffect(() => {
        setdraggableoptionthree(value)
     },[])

  return (
    <TouchableOpacity
      onLayout={() => {
        myRef.current.measure((x, y, width, height, pageX, pageY) => {
          console.log(x, 'x');
          console.log(y, 'y');
          console.log(width, 'width');
          console.log(height, 'height');
          console.log(pageX, 'pageX');
          console.log(pageY, 'pageY');

          if (
            x !== undefined &&
            y !== undefined &&
            width !== undefined &&
            height !== undefined &&
            pageX !== undefined &&
            pageY !== undefined
          ) {
            setdropzonethree({x, y, width, height, pageX, pageY});
          }
        });
      }}
      ref={myRef}
      style={{
        alignSelf: 'flex-start',
        width: '100%',
        padding: 8,
        borderWidth: 0.8,
        borderRadius: 4,
        marginVertical:5

      }}>
      <View
        w={'100%'}
        my={1.5}
        flexDir={'row'}
        alignItems="center"
        justifyContent="space-between">
        <Text
          ml={4}
          fontFamily={fonts.regularFont}
          color={colors.text}
          fontSize={fontSizes.xxxlarge}>
          {value}
        </Text>
        <RenderIf isTrue={!draggableoptionthreecolor}>
          <View
            w={6}
            h={6}
            borderWidth={2}
            borderColor={colors.iconcolor}
            borderRadius={'full'}
          />
        </RenderIf>
        <RenderIf isTrue={draggableoptionthreecolor}>
          <View w={6} h={6} bg={colors.iconcolor} borderRadius={'full'} />
        </RenderIf>
      </View>
    </TouchableOpacity>
  );
};
const OptionComponentfour = ({conditionone, conditiontwo, value, num}) => {
  const myRef = useRef(null);

  const {dnd, setdnd, dropzonefour, setdropzonefour,draggableoptionfour,
    setdraggableoptionfour,draggableoptionfourcolor} = useScore();

    useEffect(() => {
        setdraggableoptionfour(value)
     },[])

  return (
    <TouchableOpacity
      onLayout={() => {
        myRef.current.measure((x, y, width, height, pageX, pageY) => {
          console.log(x, 'x');
          console.log(y, 'y');
          console.log(width, 'width');
          console.log(height, 'height');
          console.log(pageX, 'pageX');
          console.log(pageY, 'pageY');
          if (
            x !== undefined &&
            y !== undefined &&
            width !== undefined &&
            height !== undefined &&
            pageX !== undefined &&
            pageY !== undefined
          ) {
            setdropzonefour({x, y, width, height, pageX, pageY});
          }
        });
      }}
      ref={myRef}
      style={{
        alignSelf: 'flex-start',
        width: '100%',
        padding: 8,
        borderWidth: 0.8,
        borderRadius: 4,
        marginVertical:5

      }}>
      <View
        w={'100%'}
        my={1.5}
        flexDir={'row'}
        alignItems="center"
        justifyContent="space-between">
        <Text
          ml={4}
          fontFamily={fonts.regularFont}
          color={colors.text}
          fontSize={fontSizes.xxxlarge}>
          {value}
        </Text>
        <RenderIf isTrue={!draggableoptionfourcolor}>
          <View
            w={6}
            h={6}
            borderWidth={2}
            borderColor={colors.iconcolor}
            borderRadius={'full'}
          />
        </RenderIf>
        <RenderIf isTrue={draggableoptionfourcolor}>
          <View w={6} h={6} bg={colors.iconcolor} borderRadius={'full'} />
        </RenderIf>
      </View>
    </TouchableOpacity>
  );
};

export {
  OptionComponentone,
  OptionComponenttwo,
  OptionComponentthree,
  OptionComponentfour,
};
