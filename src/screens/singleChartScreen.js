import React from 'react';
import {View, Text, Center, Divider, Image} from 'native-base';
import {
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  StyleSheet
} from 'react-native';
import {colors, fontSizes, fonts} from '../config/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TopHeading from '../components/topHeading';
import Swiper from 'react-native-swiper'

const {width,height} = Dimensions.get('window');

const SinglePracticeChart = ({navigation,route}) => {

 const {name,image} = route.params
    


    return(
        <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
            <View flex={1.2} >
            <TopHeading text={'Practice'}/>
            </View>
            <View w={width} mx="auto" mb={5}>
                <Text w={'90%'} fontSize={fontSizes.xxlarge} mx="auto" textAlign={'center'} fontFamily={fonts.regularFont} >Swap the Card to See</Text>
                <Text w={'90%'} fontSize={fontSizes.xxlarge} mx="auto" textAlign={'center'} fontFamily={fonts.regularFont} >How the Chart Look Like</Text>
            </View>
            <View w={width/1.1}  flex={1} mx="auto" mb={5} alignItems="center" justifyContent="center">

            <Swiper
            contentContainerStyle={{backgroundColor:colors.primary}}
          height={240}
          showsPagination={false}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          loop={false}
        >
          <View
            style={styles.slide}
          >
           <Text fontSize={fontSizes.xxxxxxlarge} textAlign={'center'} fontFamily={fonts.boldFont}>{name}</Text>
          </View>
          <View
            style={styles.slide}
          >
            <Image
              style={styles.image}
              alt="chart-image"
              source={image}
            />
          </View>
        </Swiper>
        </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  
    wrapper: {},
  
    slide: {
      flex: 1,
      width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:2,
      borderColor:"#222",
      borderRadius:8,
    },
  
  
    text: {
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold'
    },
  
    image: {
      width:180,
      height:180
    }
  })

export default SinglePracticeChart;