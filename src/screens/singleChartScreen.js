import React,{useState} from 'react';
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
import Swiper from 'react-native-deck-swiper';

const {width,height} = Dimensions.get('window');

const SinglePracticeChart = ({navigation,route}) => {

 const {name,image} = route.params

 const [activeindex,setactiveindex] = useState(null)

 const [swiperdata,setswiperdata] = useState([{name:name},{img:image}])

 const extradata1 = [
    {name:"Venn Chart"},
    {img:require('../assets/chartimages/1.png')},
 ]

  const extradata2 = [
    {name:"Sankey Chart"},
    {img:require('../assets/chartimages/2.png')},
  ]

  const extradata3 = [
    {name:"Pie Chart"},
    {img:require('../assets/chartimages/3.png')},
  ]

  const extradata4 = [
    {name:"Waterfall Chart"},
    {img:require('../assets/chartimages/4.png')},
  ]

  const extradata5 = [
    {name:"Waffle Chart"},
    {img:require('../assets/chartimages/5.png')},
  ]

  const extradata6 = [
    {name:"Stacked Bar Chart"},
    {img:require('../assets/chartimages/6.png')},
  ]

  const extradata7 = [
    {name:"Gannt Chart"},
    {img:require('../assets/chartimages/7.png')},
  ]

  const extradata8 = [
    {name:"Dot Chart"},
    {img:require('../assets/chartimages/8.png')},
  ]

  const extradata9 = [
    {name:"Area Chart"},
    {img:require('../assets/chartimages/9.png')},
  ]

  const extradata10 = [
    {name:"Unit Chart"},
    {img:require('../assets/chartimages/10.png')},
  ]

  const extradata11 = [
    {name:"Slope Chart"},
    {img:require('../assets/chartimages/11.png')},
  ]

  const extradata12 = [
    {name:"Pyramid Chart"},
    {img:require('../assets/chartimages/pyramid.jpeg')},
  ]



 const [index,setindex] = useState(0)

 const onswipe = () => {
   setindex(index + 1)
 }
    
console.log(index,'index')

const data = [
  {
    id:1,
    data:extradata1
  },
  {
    id:2, 
    data:extradata2
  },
  {
    id:3,
    data:extradata3
  },
  {
    id:4,
    data:extradata4
  },
  {
    id:5,
    data:extradata5
  },
  {
    id:6,
    data:extradata6
  },
  {
    id:7,
    data:extradata7
  },
  {
    id:8,
    data:extradata8
  },
  {
    id:9,
    data:extradata9
  },
  {
    id:10,
    data:extradata10
  },
  {
    id:11,
    data:extradata11
  },
  {
    id:12,
    data:extradata12
  }
]


    return(
        <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
            <View>
            <TopHeading text={'Practice'}/>
            </View>
            <View my={10} ml={2}>
              <FlatList 
              horizontal
              data={data}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item,index}) => {
                return(
                  <TouchableOpacity onPress={() => {
                    setactiveindex(index)
                    setswiperdata(item.data)
                    }}>
                  <View w={60} mx={3} p={3} borderRadius={5} borderWidth={1} borderColor={activeindex !== null && activeindex === index ? colors.iconcolor : colors.text}>
                    <Text fontSize={fontSizes.xxlarge} textAlign={'center'} fontFamily={fonts.regularFont}>{item.id}</Text>
                  </View>
                  </TouchableOpacity>
                )
              }}
              />
            </View>
            <View w={width} mx="auto" my={2} >
                <Text w={'90%'} fontSize={fontSizes.xxlarge} mx="auto" textAlign={'center'} fontFamily={fonts.regularFont} >Swap the Card to See</Text>
                <Text w={'90%'} fontSize={fontSizes.xxlarge} mx="auto" textAlign={'center'} fontFamily={fonts.regularFont} >How the Chart Look Like</Text>
            </View>
            <View style={{flex:1.5}}>

            <Swiper
            backgroundColor='transparent'
            cards={swiperdata}
            onSwipedRight={() => setindex(index + 1)}
            onSwipedLeft={() => setindex(index - 1)}
            // onSwiped={onswipe}
            // showSecondCard={false}
            animateCardOpacity={true}
            disableRightSwipe={index === 1}
            disableLeftSwipe={index === 0}
            disableBottomSwipe
            onSwipedAll={() => {
              setindex(0)
              console.log('nice ')
            }}
            disableTopSwipe
            cardIndex={index}
            swipeBackCard
            goBackToPreviousCardOnSwipeLeft={true}
            stackSize= {2}
            stackSeparation={0}
            stackScale={1}
            renderCard={(card) => {

              return (
                <View
                
                style={styles.slide}
              >
                {card.name ? (

                  <Text fontSize={fontSizes.xxxxxxlarge} textAlign={'center'} fontFamily={fonts.boldFont}>{card.name}</Text>
                ) : (
                  <Image
                  key={card.img}
                  style={styles.image}
                  alt="chart-image"
                  source={card.img}
                />
                )}
              </View>
              )
          }}
        />
         
          {/* <View
            style={styles.slide}
          >
            <Image
              style={styles.image}
              alt="chart-image"
              source={image}
            />
          </View>
        </Swiper> */}
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
      height:240,
      width:'100%',
      backgroundColor:"#fff",
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
      resizeMode:"contain",
      height:180
    }
  })

export default SinglePracticeChart;