import React from 'react';
import {
  Text,
  NativeBaseProvider,
  StatusBar,
} from 'native-base';
import MainNavigation from './src/navigation';
import { colors } from './src/config/theme';

const App = () => {
  return (
    <NativeBaseProvider>
     <StatusBar backgroundColor={colors.iconcolor}/>
     <MainNavigation />
    </NativeBaseProvider>
  );
};
export default App;
