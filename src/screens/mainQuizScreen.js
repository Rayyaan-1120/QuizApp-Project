import React,{useState,useEffect,useRef} from 'react';
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
import { quizQuestions } from '../assets/quizQuestions';
import { useScore } from '../config/scoreContext';
import Draggable from '../components/draggable';
import {OptionComponentone,OptionComponenttwo,OptionComponentthree,OptionComponentfour} from '../components/optionComponent';

const MainQuizScreen = ({navigation}) => {

    const touchableref = useRef()

    useEffect(() => {
      if(touchableref.current){
          touchableref.current.measure((x, y, width, height, pageX, pageY) => {
              console.log(x,'x')
                console.log(y,'y')
                console.log(width,'width')
                console.log(height,'height')
                console.log(pageX,'pageX')
                console.log(pageY,'pageY')

          })
      }
    },[])

   

    const [currentQuestion,setcurrentQuestion] = useState(0)
    const [selectedQuestion,setselectedQuestion] = useState('')
    const {width, height} = Dimensions.get('window');

    const {userData,setuserData, dragscore,
        setdragscore,draggableoptiononecolor,draggableoptiontwocolor,draggableoptionthreecolor,draggableoptionfourcolor} = useScore()


    const nextquestion  = () => {
        if(quizQuestions[currentQuestion]?.draggable){
             if(!draggableoptiononecolor || !draggableoptiontwocolor || !draggableoptionthreecolor || !draggableoptionfourcolor){
                alert('Please drag all the charts to its right place')
                return
             }

             setuserData({...userData,
                score:userData.score + dragscore,
                correctAnswers:userData.correctAnswers + 1})


             if(currentQuestion === quizQuestions.length - 1){
                return navigation.navigate('QuizResultScreen',{
                    timeFinished:false,
                })
             }else{
                setcurrentQuestion((prevstate) => prevstate === quizQuestions.length - 1 ? quizQuestions.length - 1 :  prevstate + 1 )
            }

           

        }else{
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
    const prevquestion  = () => setcurrentQuestion((prevstate) => prevstate === 0 ? 0 :  prevstate - 1 )

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
        setCountDown(60 * 60);
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
          <ScrollView>

          <View w={width / 1.1} mx="auto">
              <TopHeading text={`Question ${currentQuestion + 1}`}/>
              <View flexDir="row" alignItems={'center'} justifyContent="center" mt={3}>
                  <MaterialCommunityIcons name="timer" size={32} color={colors.iconcolor}/>
                  <Text fontFamily={fonts.regularFont} color={colors.text} fontSize={fontSizes.xxxlarge} ml={2}>{minutes}:{seconds}</Text>
              </View>
          </View>


          {quizQuestions[currentQuestion]?.draggable ? (
              <View w={width / 1.15} mx="auto" alignItems="center" justifyContent="center">
              <Text my={3} fontFamily={fonts.mediumFont} color={colors.text} fontSize={fontSizes.xxxxxlarge}>{quizQuestions[currentQuestion]?.question}</Text>
              <View flexDir={'row'} alignItems="center" flexWrap={'wrap'} justifyContent="space-between">
                  <Draggable correctAnswer={quizQuestions[currentQuestion]?.correctAnswer} option={quizQuestions[currentQuestion]?.options.a} image={quizQuestions[currentQuestion]?.imageone}/>
                  <Draggable correctAnswer={quizQuestions[currentQuestion]?.correctAnswer} option={quizQuestions[currentQuestion]?.options.b} image={quizQuestions[currentQuestion]?.imagetwo}/>
                  <Draggable correctAnswer={quizQuestions[currentQuestion]?.correctAnswer} option={quizQuestions[currentQuestion]?.options.c} image={quizQuestions[currentQuestion]?.imagethree}/>
                  <Draggable correctAnswer={quizQuestions[currentQuestion]?.correctAnswer} option={quizQuestions[currentQuestion]?.options.d} image={quizQuestions[currentQuestion]?.imagefour}/>
                  
              </View>
          </View>
          ) : (

              <View w={width / 1.15} mx="auto" alignItems="center" justifyContent="center">
                  <Text my={3} fontFamily={fonts.mediumFont} color={colors.text} fontSize={fontSizes.xxxxxlarge}>{quizQuestions[currentQuestion]?.question}</Text>
                  <Image key={quizQuestions[currentQuestion]?.image} mt={5} resizeMode="contain" alt="Chart Image" source={quizQuestions[currentQuestion]?.image} width={250} height={180}/>
              </View>
          )}
          
          <View mt={4} mx="auto" alignItems="center" width={width / 1.2}> 

          {!quizQuestions[currentQuestion]?.draggable ? (
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
      
                    // <Divider opacity={0.2} thickness={2} bg={colors.text} mt={2}/>
                    // </>
                 )
             })}
              </>
          ) : (
             <>

             <OptionComponentone num={1} value={quizQuestions[currentQuestion]?.options.a} conditionone={selectedQuestion !== quizQuestions[currentQuestion]?.options.a} conditiontwo={selectedQuestion === quizQuestions[currentQuestion]?.options.a}/>
             <OptionComponenttwo num={2} value={quizQuestions[currentQuestion]?.options.b} conditionone={selectedQuestion !== quizQuestions[currentQuestion]?.options.b} conditiontwo={selectedQuestion === quizQuestions[currentQuestion]?.options.b}/>
             <OptionComponentthree num={3} value={quizQuestions[currentQuestion]?.options.c} conditionone={selectedQuestion !== quizQuestions[currentQuestion]?.options.c} conditiontwo={selectedQuestion === quizQuestions[currentQuestion]?.options.c}/>
             <OptionComponentfour num={4} value={quizQuestions[currentQuestion]?.options.d} conditionone={selectedQuestion !== quizQuestions[currentQuestion]?.options.d} conditiontwo={selectedQuestion === quizQuestions[currentQuestion]?.options.d}/>
              
                    {/* <TouchableOpacity
                    onLayout={(event) => {
                        setdnd({...dnd,dropzoneone:event.nativeEvent.layout}) ;
                    }}
                      style={{alignSelf:'flex-start'}} >

                    <View w={'100%'} my={1.5} flexDir={'row'} alignItems="center">
                        
                        <Text ml={4} fontFamily={fonts.regularFont} color={colors.text} fontSize={fontSizes.xxxlarge}>{quizQuestions[currentQuestion]?.options.a}</Text>
                        <RenderIf isTrue={selectedQuestion !== quizQuestions[currentQuestion]?.options.a}>
                        <View w={6} h={6} borderWidth={2} borderColor={colors.iconcolor} borderRadius={'full'}/>
                        </RenderIf>
                        <RenderIf isTrue={selectedQuestion === quizQuestions[currentQuestion]?.options.a}>
                        <View w={6} h={6} bg={colors.iconcolor} borderRadius={'full'}/>
                        </RenderIf>
                    </View>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity
                    ref={touchableref}
                    
                      style={{alignSelf:'flex-start'}} >

                    <View w={'100%'} my={1.5} flexDir={'row'} alignItems="center">
                        
                        <Text ml={4} fontFamily={fonts.regularFont} color={colors.text} fontSize={fontSizes.xxxlarge}>{quizQuestions[currentQuestion]?.options.b}</Text>
                        <RenderIf isTrue={selectedQuestion !== quizQuestions[currentQuestion]?.options.b}>
                        <View w={6} h={6} borderWidth={2} borderColor={colors.iconcolor} borderRadius={'full'}/>
                        </RenderIf>
                        <RenderIf isTrue={selectedQuestion === quizQuestions[currentQuestion]?.options.b}>
                        <View w={6} h={6} bg={colors.iconcolor} borderRadius={'full'}/>
                        </RenderIf>
                    </View>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity
                     onLayout={(event) => {
                        setdnd({...dnd,dropzonethree:event.nativeEvent.layout}) ;
                    }}
                      style={{alignSelf:'flex-start'}} >

                    <View w={'100%'} my={1.5} flexDir={'row'} alignItems="center">
                        
                        <Text ml={4} fontFamily={fonts.regularFont} color={colors.text} fontSize={fontSizes.xxxlarge}>{quizQuestions[currentQuestion]?.options.c}</Text>
                        <RenderIf isTrue={selectedQuestion !== quizQuestions[currentQuestion]?.options.c}>
                        <View w={6} h={6} borderWidth={2} borderColor={colors.iconcolor} borderRadius={'full'}/>
                        </RenderIf>
                        <RenderIf isTrue={selectedQuestion === quizQuestions[currentQuestion]?.options.c}>
                        <View w={6} h={6} bg={colors.iconcolor} borderRadius={'full'}/>
                        </RenderIf>
                    </View>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity
                     onLayout={(event) => {
                        setdnd({...dnd,dropzonefour:event.nativeEvent.layout}) ;
                    }}
                      style={{alignSelf:'flex-start'}} >

                    <View w={'100%'} my={1.5} flexDir={'row'} alignItems="center">
                        
                        <Text ml={4} fontFamily={fonts.regularFont} color={colors.text} fontSize={fontSizes.xxxlarge}>{quizQuestions[currentQuestion]?.options.d}</Text>
                        <RenderIf isTrue={selectedQuestion !== quizQuestions[currentQuestion]?.options.d}>
                        <View w={6} h={6} borderWidth={2} borderColor={colors.iconcolor} borderRadius={'full'}/>
                        </RenderIf>
                        <RenderIf isTrue={selectedQuestion === quizQuestions[currentQuestion]?.options.d}>
                        <View w={6} h={6} bg={colors.iconcolor} borderRadius={'full'}/>
                        </RenderIf>
                    </View>
                    </TouchableOpacity> */}
      
                    
              
             </>
          )}
         
               
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

       </ScrollView>
       </SafeAreaView>

    )
}

export default MainQuizScreen