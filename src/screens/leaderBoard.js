import React from 'react';
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

const LeaderBoard = ({navigation}) => {
  const {width, height} = Dimensions.get('window');

  const data = [
    {
      score: 9000,
    },
    {
      score: 8000,
    },
    {
      score: 7000,
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <View>
        <TopHeading text={'LeaderBoard'} />
      </View>
      <View
        position={'relative'}
        h={height / 1.7}
        mt={32}
        width={width / 1.15}
        borderRadius={8}
        mx="auto"
        borderWidth={2}
        borderColor={colors.text}>
        <Center
          w={120}
          h={120}
          mt={-16}
          mx="auto"
          borderRadius={'full'}
          bg={colors.text}>
          <MaterialCommunityIcons name="trophy" size={65} color={'yellow'} />
        </Center>

        <View w={'100%'} mt={3}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <View
                  w={'85%'}
                  mx="auto"
                  p={3}
                  flexDir="row"
                  alignItems="center"
                  justifyContent={'space-between'}>
                  <View flexDir={'row'} alignItems="center">
                    <MaterialCommunityIcons
                      name="star"
                      size={25}
                      color={'#222'}
                    />
                    <Text
                      fontFamily={fonts.mediumFont}
                      ml={2}
                      fontSize={fontSizes.xxxxxlarge}>
                      {index + 1} )
                    </Text>
                  </View>
                  <Text
                    fontFamily={fonts.mediumFont}
                    fontSize={fontSizes.xxxxxlarge}>
                    {item.score}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LeaderBoard;
