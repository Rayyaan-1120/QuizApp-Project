import React,{useState,useEffect,useLayoutEffect,useRef} from 'react';
import {View, Text, Center, Divider, Image} from 'native-base';
import {
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  StyleSheet,
  Animated,
  PanResponder,
  ScrollView
} from 'react-native';
import {colors, fontSizes, fonts} from '../config/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopHeading from '../components/topHeading';
import RenderIf from '../components/renderIf';
import { quizQues,shuffle } from '../assets/quizQuestions';
import { useScore } from '../config/scoreContext';
import Draggable from '../components/draggable';
import {OptionComponentone,OptionComponenttwo,OptionComponentthree,OptionComponentfour} from '../components/optionComponent';

const MainQuizScreen = ({navigation}) => {

    const [quizQuestions,setquizQuestions] = useState(quizQues);

    useEffect(() => {
        setquizQuestions(shuffle(quizQues));
    },[])

    console.log(quizQuestions,'quizQuestions');


    const [currentQuestion,setcurrentQuestion] = useState(0)
    const [selectedQuestion,setselectedQuestion] = useState('')
    const {width, height} = Dimensions.get('window');

    const {userData,setuserData, dragscore,
        setdragscore,draggableoptiononecolor,setdraggableoptiononecolor,draggableoptiontwocolor,setdraggableoptiontwocolor,draggableoptionthreecolor,setdraggableoptionthreecolor,draggableoptionfourcolor,setdraggableoptionfourcolor} = useScore()


    const nextquestion  = () => {
        if(quizQuestions[currentQuestion]?.draggable){
             if(!draggableoptiononecolor || !draggableoptiontwocolor || !draggableoptionthreecolor || !draggableoptionfourcolor){
                alert('Please drag all the charts to its right place')
                return
             }

             console.log(dragscore,'dragscore')

             setuserData({...userData,
                score:userData.score + dragscore,
                correctAnswers:userData.correctAnswers + 1})

                alert(`You Have dropped ${dragscore / 250} charts in right place`)
                
                setdraggableoptiononecolor(false)
            setdraggableoptiontwocolor(false)
            setdraggableoptionthreecolor(false)
            setdraggableoptionfourcolor(false)
            setdragscore(0)


             if(currentQuestion === quizQuestions.length - 1){
                return navigation.navigate('QuizResultScreen',{
                    timeFinished:false,
                })
             }else{
                setcurrentQuestion((prevstate) => prevstate === quizQuestions.length - 1 ?  quizQuestions.length - 1 :  prevstate + 1 )
            }

           

        }else{
            console.log(userData.score,'userData.score')

            if(selectedQuestion.length === 0) {
                return alert('Please Select the Answer')
            }
            if(quizQuestions[currentQuestion].correctAnswer === selectedQuestion){
                setuserData({...userData,
                    score:userData.score + 1000,
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
        
    }
    const prevquestion  = () => {
        if(quizQuestions[currentQuestion]?.draggable){
            setdraggableoptiononecolor(false)
            setdraggableoptiontwocolor(false)
            setdraggableoptionthreecolor(false)
            setdraggableoptionfourcolor(false)
            console.log(dragscore,'dragscore')
            // setuserData({...userData,score:userData.score - 1000})
            setdragscore(0)
            setuserData({...userData,score:userData.score - 1000})
        }else{
            console.log(userData.score,'userData.score')
            setselectedQuestion('')
            setuserData({...userData,score:userData.score - 1000})
        }
        setcurrentQuestion((prevstate) => prevstate === 0 ? 0 :  prevstate - 1 )
    }

    console.log(userData.score,'userData.score');

    

    const [countDown, setCountDown] = React.useState(0);
    const [runTimer, setRunTimer] = React.useState(true);
  
    React.useEffect(() => {
      let timerId;
  
      if (runTimer) {
        setCountDown(60 * 5);
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
  
    const seconds = String(countDown % 60).padStart(2, 0);
    const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

    return(
       <SafeAreaView style={{flex:1,backgroundColor: colors.background}}>
          <ScrollView bounces={false}>

          <View w={width / 1.1} mx="auto">
              <TopHeading text={`Question ${currentQuestion + 1}`}/>
              <View flexDir="row" alignItems={'center'} justifyContent="center" mt={3}>
                  <MaterialCommunityIcons name="timer" size={32} color={colors.iconcolor}/>
                  <Text fontFamily={fonts.regularFont} color={colors.text} fontSize={fontSizes.xxxlarge} ml={2}>{minutes}:{seconds}</Text>
              </View>
          </View>


          {quizQuestions && quizQuestions[currentQuestion]?.draggable ? (
              <View w={width / 1.15} mx="auto" alignItems="center" justifyContent="center">
              <Text my={3} textAlign="center" fontFamily={fonts.mediumFont} color={colors.text} fontSize={fontSizes.xxxxxlarge}>{quizQuestions && quizQuestions[currentQuestion]?.question}</Text>
              <View flexDir={'row'} alignItems="center" flexWrap={'wrap'} justifyContent="space-between">
                  <Draggable correctAnswer={quizQuestions && quizQuestions[currentQuestion]?.correctAnswer} option={quizQuestions && quizQuestions[currentQuestion]?.options.a} image={quizQuestions && quizQuestions[currentQuestion]?.imageone}/>
                  <Draggable correctAnswer={quizQuestions && quizQuestions[currentQuestion]?.correctAnswer} option={quizQuestions && quizQuestions[currentQuestion]?.options.b} image={quizQuestions && quizQuestions[currentQuestion]?.imagetwo}/>
                  <Draggable correctAnswer={quizQuestions && quizQuestions[currentQuestion]?.correctAnswer} option={quizQuestions && quizQuestions[currentQuestion]?.options.c} image={quizQuestions && quizQuestions[currentQuestion]?.imagethree}/>
                  <Draggable correctAnswer={quizQuestions && quizQuestions[currentQuestion]?.correctAnswer} option={quizQuestions && quizQuestions[currentQuestion]?.options.d} image={quizQuestions && quizQuestions[currentQuestion]?.imagefour}/>
                  
              </View>
          </View>
          ) : (

              <View w={width / 1.15} mx="auto" alignItems="center" justifyContent="center">
                  <Text my={3} textAlign="center" fontFamily={fonts.mediumFont} color={colors.text} fontSize={fontSizes.xxlarge}>{quizQuestions && quizQuestions[currentQuestion]?.question}</Text>
                  <Image key={quizQuestions && quizQuestions[currentQuestion]?.image} mt={5} resizeMode="contain" alt="Chart Image" source={quizQuestions && quizQuestions[currentQuestion]?.image} width={250} height={180}/>
              </View>
          )}
          
          <View mt={4} mx="auto" alignItems="center" width={width / 1.2}> 

          {quizQuestions && !(quizQuestions[currentQuestion]?.draggable) ? (
              <>
              {Object.entries(quizQuestions[currentQuestion]?.options).map(([key,value],index) => {
                 return(
                    //  <>
                    <TouchableOpacity
                    
                    key={index} onPress={() => setselectedQuestion(value)} style={{alignSelf:'flex-start',width: '100%',
                    padding: 8,
                    borderWidth: 0.8,
                    borderRadius: 4,
                    marginVertical:5}} >

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
      
                 )
             })}
              
               
              </>
          ) : (
             <>

<OptionComponentone num={1} value={quizQuestions && quizQuestions[currentQuestion]?.options.a} conditionone={selectedQuestion !== quizQuestions && quizQuestions[currentQuestion]?.options.a} conditiontwo={selectedQuestion === quizQuestions && quizQuestions[currentQuestion]?.options.a}/>
             <OptionComponenttwo num={2} value={quizQuestions && quizQuestions[currentQuestion]?.options.b} conditionone={selectedQuestion !== quizQuestions && quizQuestions[currentQuestion]?.options.b} conditiontwo={selectedQuestion === quizQuestions && quizQuestions[currentQuestion]?.options.b}/>
             <OptionComponentthree num={3} value={quizQuestions && quizQuestions[currentQuestion]?.options.c} conditionone={selectedQuestion !== quizQuestions && quizQuestions[currentQuestion]?.options.c} conditiontwo={selectedQuestion === quizQuestions && quizQuestions[currentQuestion]?.options.c}/>
             <OptionComponentfour num={4} value={quizQuestions && quizQuestions[currentQuestion]?.options.d} conditionone={selectedQuestion !== quizQuestions && quizQuestions[currentQuestion]?.options.d} conditiontwo={selectedQuestion === quizQuestions[currentQuestion]?.options.d}/>
              
              
             </>
          )}
         
               
          </View>
           
           <View mx="auto" my={5} width={width / 1.2} flexDir="row" justifyContent="space-between">

            {currentQuestion !== 0 && (

               <TouchableOpacity
               onPress={prevquestion}

               style={{
                   width:100,
                   padding:3,
                   alignItems:'center',
                   borderRadius:5,
                alignSelf:"flex-start",

                   backgroundColor:colors.iconcolor,
               }}
               >
                  <Text fontFamily={fonts.regularFont} color={'#fff'} fontSize={fontSizes.xxlarge}>Prev</Text>
               </TouchableOpacity>
            )}

               <TouchableOpacity
               onPress={nextquestion}
               
               style={{
                width:100,
                padding:3,
                alignItems:'center',
                alignSelf:"flex-end",
                borderRadius:5,
                backgroundColor:colors.iconcolor,
            }}
               >
                  <Text fontFamily={fonts.regularFont} color={'#fff'} fontSize={fontSizes.xxlarge}>Next</Text>
               </TouchableOpacity>


           </View>

       </ScrollView>
       </SafeAreaView>

    )
}

export default MainQuizScreen