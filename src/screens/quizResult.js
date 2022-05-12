import React,{useState,useEffect} from 'react';
import {View, Text, Center, Divider, Image} from 'native-base';
import {
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  StyleSheet,
} from 'react-native';
import {colors, fontSizes, fonts} from '../config/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopHeading from '../components/topHeading';
import RenderIf from '../components/renderIf';
import { useScore } from '../config/scoreContext';

const QuizResultScreen = ({navigation,route}) => {

    const {timeFinished} = route.params

    const {userData,setuserData} = useScore()

    return(
      <SafeAreaView style={{flex:1,backgroundColor: colors.background,alignItems:"center",justifyContent: "center"}}>
         <View w={'80%'} alignItems="center">

             <Text fontSize={60}>{userData?.score > 2 ? "😍" : userData?.score === 2 ? '😚' : userData?.score === 1 ? '🙂' : userData?.score === 0 ? '🤢' : ''}</Text>
             <RenderIf isTrue={timeFinished}>
             <Text textAlign="center" my={3} fontSize={fontSizes.xxxlarge} fontFamily={fonts.mediumFont}>Time Over</Text>
             </RenderIf>
             <Text textAlign="center" mt={3} fontSize={fontSizes.xxxlarge} fontFamily={fonts.mediumFont}>{userData?.userName}, You Have Scored {userData.score} Points</Text>
             <TouchableOpacity
             onPress={() =>{
                setuserData({
                    ...userData,
                    score:0,
                    userName:'',
                    correctAnswers:0,
                    wrongAnswers:0,                                
                })
                navigation.navigate('HomeScreen')
            
            }}
             style={{
                padding:10,
                alignItems:'center',
                borderRadius:5,
                backgroundColor:colors.iconcolor,
                marginTop:10
            }}
             >
                 <Text fontFamily={fonts.regularFont} color={colors.text} fontSize={fontSizes.xxlarge}>Go Back To Home</Text>
             </TouchableOpacity>
         </View>
      </SafeAreaView>
    )
}

export default QuizResultScreen