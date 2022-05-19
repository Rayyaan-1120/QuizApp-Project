import React,{useState} from 'react';
import {View, Text, Center, Divider, Image} from 'native-base';
import {
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  StyleSheet,
  ScrollView,
  TextInput
} from 'react-native';
import {colors, fontSizes, fonts} from '../config/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopHeading from '../components/topHeading';
import { useScore } from '../config/scoreContext';

const QuizStartScreen = ({navigation}) => {

    const [name,setname] = useState('')

    const {userData,setuserData} = useScore()

    const {width, height} = Dimensions.get('window');

    const startQuiz = () => {
        if(name.length === 0){
            return alert('Please enter your name')
        }
        setuserData({...userData,userName:name})
        navigation.navigate('MainQuizScreen')

    }

    return(
        <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
            <ScrollView style={{flex:1}} keyboardShouldPersistTaps="handled">

           <View w={width / 1.08} mx="auto">
        <TopHeading text={'Quiz Instructions'} />
                <Text my={8} fontSize={fontSizes.xxlarge} mx="auto" textAlign={'center'} fontFamily={fonts.regularFont} >You Have Five Mins to complete this quiz make sure to complete all answers within time to score maximum points</Text>
         </View>
         <View alignItems="center" mt={20}>
             <TextInput
              placeholderTextColor={'#dcdcdc'}
              onChangeText={(value) => setname(value)}
              placeholder='Enter your name'
              style={{ backgroundColor: 'white',color: '#000',width:"90%",fontFamily:fonts.regularFont,fontSize:fontSizes.xxlarge, borderRadius: 8, padding: 18, marginVertical: 8,borderWidth:2,borderColor:"#dadada" }}
             />
             <TouchableOpacity onPress={startQuiz} style={{ backgroundColor: colors.iconcolor,width:"90%",borderRadius: 8, padding: 18, marginTop: 80,}}>
                 <Text color="#fff" textAlign="center" fontSize={fontSizes.xxxlarge} fontFamily={fonts.mediumFont}>Start Timer</Text>
             </TouchableOpacity>
         </View>
        
            
            </ScrollView>
        </SafeAreaView>
    )
}

export default QuizStartScreen