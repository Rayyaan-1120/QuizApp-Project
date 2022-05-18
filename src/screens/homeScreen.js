import React,{useEffect} from 'react';
import {View,Text,Center,Divider} from 'native-base'
import {SafeAreaView,Dimensions,TouchableOpacity,ImageBackground} from 'react-native'
import { colors,fontSizes,fonts } from '../config/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopHeading from '../components/topHeading';
import { useScore } from '../config/scoreContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {  

    const {width,height} = Dimensions.get('window');

  const {leaderboard,setleaderboard} = useScore()


    useEffect(() => {
        AsyncStorage.getItem('leaderboard').then(res => {
            console.log()
          if(res !== null){
            setleaderboard(JSON.parse(res))
          }
        }).catch(err => alert(err));
      },[])


    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>

            
            <View flex={1.5} >
            <TopHeading text={'Learn Charts'}/>
            </View>
           
            <View flex={2} mx="auto">
                <TouchableOpacity onPress={() => navigation.navigate('QuizStartScreen')}>
                <View  p={2} width={width / 1.1} flexDir="row" alignItems={'center'} justifyContent="space-between">
                    <Text color={colors.text} fontSize={fontSizes.xxxxxlarge} fontFamily={fonts.regularFont}>Take a Quiz</Text>
                    <Center>
                      <MaterialCommunityIcons name='check-circle' size={30} color={colors.iconcolor}/>
                    </Center>
                </View>
                <Divider thickness={2} my={2} bg={colors.primary}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LeaderBoard')}>
                <View  p={2} width={width / 1.1} flexDir="row" alignItems={'center'} justifyContent="space-between">
                    <Text color={colors.text} fontSize={fontSizes.xxxxxlarge} fontFamily={fonts.regularFont}>Leaderboard</Text>
                    <Center>
                      <MaterialCommunityIcons name='check-circle' size={30} color={colors.iconcolor}/>
                    </Center>
                </View>
                <Divider thickness={2} my={2} bg={colors.primary}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PracticeCharts')}>
                <View  p={2} width={width / 1.1} flexDir="row" alignItems={'center'} justifyContent="space-between">
                    <Text color={colors.text} fontSize={fontSizes.xxxxxlarge} fontFamily={fonts.regularFont}>Practice Charts</Text>
                    <Center>
                      <MaterialCommunityIcons name='check-circle' size={30} color={colors.iconcolor}/>
                    </Center>
                </View>
                <Divider thickness={2} my={2} bg={colors.primary}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen