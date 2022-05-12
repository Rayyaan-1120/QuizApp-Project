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
import { quizQuestions } from '../assets/quizQuestions';
import { useScore } from '../config/scoreContext';

const MainQuizScreen = ({navigation}) => {

    const [currentQuestion,setcurrentQuestion] = useState(0)
    const [selectedQuestion,setselectedQuestion] = useState('')
    const {width, height} = Dimensions.get('window');

    const nextquestion  = () => {
        if(selectedQuestion.length === 0) {
            return alert('Please Select the Answer')
        }
        if(quizQuestions[currentQuestion].correctAnswer === selectedQuestion){
            setuserData({...userData,
                score:userData.score + 1,
                correctAnswers:userData.correctAnswers + 1})
        }else{
            setuserData({...userData,
                wrongAnswers:userData.wrongAnswers + 1})
        }
        setselectedQuestion('')
        if(currentQuestion === quizQuestions.length - 1){
           return navigation.navigate('QuizResultScreen',{
               timeFinished:false,
           })
        }else{
            setcurrentQuestion((prevstate) => prevstate === quizQuestions.length - 1 ? quizQuestions.length - 1 :  prevstate + 1 )
        }
    }
    const prevquestion  = () => setcurrentQuestion((prevstate) => prevstate === 0 ? 0 :  prevstate - 1 )

    console.log(selectedQuestion,'selected')
    console.log(currentQuestion,'wtf')

    const {userData,setuserData} = useScore()

    console.log(userData,'userData')

    // useEffect(() => {
    //     function shuffle(array) {
    //         let currentIndex = array.length,  randomIndex;
          
    //         // While there remain elements to shuffle.
    //         while (currentIndex != 0) {
          
    //           // Pick a remaining element.
    //           randomIndex = Math.floor(Math.random() * currentIndex);
    //           currentIndex--;
          
    //           // And swap it with the current element.
    //           [array[currentIndex], array[randomIndex]] = [
    //             array[randomIndex], array[currentIndex]];
    //         }
          
    //         return array;
    //       }

    //       shuffle(quizQuestions)
    // },[])
    

    const [countDown, setCountDown] = React.useState(0);
    const [runTimer, setRunTimer] = React.useState(true);
  
    React.useEffect(() => {
      let timerId;
  
      if (runTimer) {
        setCountDown(60 * 1);
        timerId = setInterval(() => {
          setCountDown((countDown) => countDown - 1);
        }, 1000);
      } else {
        clearInterval(timerId);
      }
  
      return () => clearInterval(timerId);
    }, [runTimer]);
  
    React.useEffect(() => {
      if (countDown < 0 && runTimer) {
        navigation.navigate('QuizResultScreen',{
            timeFinished:true
        })
        setRunTimer(false);
        setCountDown(0);
      }
    }, [countDown, runTimer]);
  
    const togglerTimer = () => setRunTimer((t) => !t);
  
    const seconds = String(countDown % 60).padStart(2, 0);
    const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

    return(
       <SafeAreaView style={{flex:1,backgroundColor: colors.background}}>
          <View w={width / 1.1} mx="auto">
              <TopHeading text={`Question ${currentQuestion + 1}`}/>
              <View flexDir="row" alignItems={'center'} justifyContent="center" mt={3}>
                  <MaterialCommunityIcons name="timer" size={32} color={colors.iconcolor}/>
                  <Text fontFamily={fonts.regularFont} color={colors.text} fontSize={fontSizes.xxxlarge} ml={2}>{minutes}:{seconds}</Text>
              </View>
          </View>

          <View w={width / 1.15} mx="auto" alignItems="center" justifyContent="center">
              <Text my={3} fontFamily={fonts.mediumFont} color={colors.text} fontSize={fontSizes.xxxxxlarge}>{quizQuestions[currentQuestion]?.question}</Text>
              <Image key={quizQuestions[currentQuestion]?.image} mt={5} alt="Chart Image" source={quizQuestions[currentQuestion]?.image} width={250} height={180}/>
          </View>

          <View mt={4} mx="auto" alignItems="center" width={width / 1.2}> 

          {Object.entries(quizQuestions[currentQuestion]?.options).map(([key,value],index) => {
                 return(
                    //  <>
                    <TouchableOpacity key={index} onPress={() => setselectedQuestion(value)} style={{alignSelf:'flex-start'}} >

                    <View w={'100%'} my={1.5} flexDir={'row'} alignItems="center">
                        <RenderIf isTrue={selectedQuestion !== value}>
                        <View w={6} h={6} borderWidth={2} borderColor={colors.iconcolor} borderRadius={'full'}/>
                        </RenderIf>
                        <RenderIf isTrue={selectedQuestion === value}>
                        <View w={6} h={6} bg={colors.iconcolor} borderRadius={'full'}/>
                        </RenderIf>
                        <Text ml={4} fontFamily={fonts.regularFont} color={colors.text} fontSize={fontSizes.xxxlarge}>{value}</Text>
                    </View>
                    </TouchableOpacity>
      
                    // <Divider opacity={0.2} thickness={2} bg={colors.text} mt={2}/>
                    // </>
                 )
             })}
               
          </View>
           
           <View mx="auto" my={5} width={width / 1.2} alignItems="center" justifyContent="space-between" flexDir="row">

            

               <TouchableOpacity
               onPress={prevquestion}

               style={{
                   width:100,
                   padding:3,
                   alignItems:'center',
                   borderRadius:5,
                   backgroundColor:colors.iconcolor,
               }}
               >
                  <Text fontFamily={fonts.regularFont} color={colors.text} fontSize={fontSizes.xxlarge}>Prev</Text>
               </TouchableOpacity>

               <TouchableOpacity
               onPress={nextquestion}
               
               style={{
                width:100,
                padding:3,
                alignItems:'center',
                borderRadius:5,
                backgroundColor:colors.iconcolor,
            }}
               >
                  <Text fontFamily={fonts.regularFont} color={colors.text} fontSize={fontSizes.xxlarge}>Next</Text>
               </TouchableOpacity>
           </View>

       </SafeAreaView>
    )
}

export default MainQuizScreen