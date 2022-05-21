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
    name:"Venn Chart",
    image:require('../assets/chartimages/1.png')
  },
  {
    name:"Sankey Chart",
    image:require('../assets/chartimages/2.png')
  },
  {
    name:"Pie Chart",
    image:require('../assets/chartimages/3.png')
  },
  {
    name:"Waterfall Chart",
    image:require('../assets/chartimages/4.png')
  },
  {
    name:"Waffle Chart",
    image:require('../assets/chartimages/5.png')
  },
  {
    name:"Stacked Bar Chart",
    image:require('../assets/chartimages/6.png')
  },
  {
    name:"Gannt Chart",
    image:require('../assets/chartimages/7.png')
  },
  {
    name:"Dot Chart",
    image:require('../assets/chartimages/8.png')
  },
  {
    name:"Area Chart",
    image:require('../assets/chartimages/9.png')
  },
  {
    name:"Unit Chart",
    image:require('../assets/chartimages/10.png')
  },
  {
    name:"Slope Chart",
    image:require('../assets/chartimages/11.png')
  },
  {
    name:"Pyramid Chart",
    image:require('../assets/chartimages/pyramid.jpeg')
  },
  {
    name:"Scatter Chart",
    image:require('../assets/chartimages/13.png')
  },
  {
    name:"Histogram",
    image:require('../assets/chartimages/14.png')
  },
  {
    name:"Bar Chart",
    image:require('../assets/chartimages/15.png')
  },
  {
    name:"Word Cloud",
    image:require('../assets/chartimages/16.png')
  },
  {
    name:"Box Plot",
    image:require('../assets/chartimages/17.png')
  },
  {
    name:"Violin Chart",
    image:require('../assets/chartimages/18.png')
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
              <Image key={item.image} resizeMode='contain' alt="Chart Images" source={item.image} w={150} h={150} />
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