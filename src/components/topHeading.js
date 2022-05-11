import React from 'react';
import {View,Text} from 'native-base'
import {Dimensions} from 'react-native'
import { colors,fontSizes,fonts } from '../config/theme';

const TopHeading = ({text}) => {

    const {width,height} = Dimensions.get('window');


    return(
        <View width={width / 1.1} mx="auto" bg={colors.primary} p={3} borderRadius={3} mt={5} >
        <Text color={colors.text} fontSize={fontSizes.xxxxxxxlarge} textAlign="center" fontFamily={fonts.mediumFont}>{text}</Text>
        </View>
    )
}

export default TopHeading