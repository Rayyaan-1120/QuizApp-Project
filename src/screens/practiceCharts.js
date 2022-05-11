import React from 'react';
import {View, Text, Center, Divider, Image} from 'native-base';
import {
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {colors, fontSizes, fonts} from '../config/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopHeading from '../components/topHeading';

const chartsdata = [
  {
    name: 'Pie Chart',
    image: require('../assets/chartimages/kindpng_1708478.png'),
  },
  {
    name: 'Bar Chart',
    image: require('../assets/chartimages/kindpng_2461295.png'),
  },
  {
    name: 'Line Chart',
    image: require('../assets/chartimages/kindpng_2853573.png'),
  },
  {
    name: 'Pyramid Chart',
    image: require('../assets/chartimages/faarigh.png'),
  },
];

const PracticeCharts= ({navigation}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
       contentContainerStyle={{width:width/1.1,margin:"auto",alignSelf:"center"}}
        ListHeaderComponent={
          <View>
            <TopHeading text={'Practice Charts'} />
          </View>
        }
        numColumns={2}
        data={chartsdata}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <View w={'50%'} py={2} mt={3}>
              <TouchableOpacity onPress={() => navigation.navigate('SinglePracticeChart',{
                  name:item.name,
                    image:item.image
              })} style={{alignItems:'center'}}>
              <Image alt="Chart Images" source={item.image} w={125} h={125} />
              <Text mt={2}  fontFamily={fonts.regularFont} fontSize={fontSizes.large}>{item.name}</Text>
              </TouchableOpacity>

            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default PracticeCharts