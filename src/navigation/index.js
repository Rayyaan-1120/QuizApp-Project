import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import PracticeCharts from '../screens/practiceCharts';
import SinglePracticeChart from '../screens/singleChartScreen';
import LeaderBoard from '../screens/leaderBoard';
import QuizStartScreen from '../screens/quizStartScreen';

const MainNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
           <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name='HomeScreen' component={HomeScreen}/>
              <Stack.Screen name='PracticeCharts' component={PracticeCharts}/>
              <Stack.Screen name='SinglePracticeChart' component={SinglePracticeChart}/>
              <Stack.Screen name='LeaderBoard' component={LeaderBoard}/>
              <Stack.Screen name='QuizStartScreen' component={QuizStartScreen}/>
           </Stack.Navigator>
        </NavigationContainer>
)
}

export default MainNavigation