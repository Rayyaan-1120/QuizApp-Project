import React, {useState} from 'react';
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
import Swiper from 'react-native-deck-swiper';

const {width, height} = Dimensions.get('window');

const SinglePracticeChart = ({navigation, route}) => {
  const {name, image, def} = route.params;

  const [activeindex, setactiveindex] = useState(null);

  const [swiperdata, setswiperdata] = useState([
    {name: name},
    {def: def},
    {img: image},
  ]);

  const extradata1 = [
    {name: 'Venn Chart'},
    {
      def: 'Venn diagram is an illustration that uses circles to show the relationships among things or finite groups of things. Circles that overlap have a commonality while circles that do not overlap do not share those traits. Venn diagrams help to visually represent the similarities and differences between two concepts.',
    },
    {img: require('../assets/chartimages/1.png')},
  ];

  const extradata2 = [
    {name: 'Sankey Chart'},
    {
      def: 'Sankey diagrams are a specific type of flow diagram used for visualization of material, cost or energy flows. They show energy or mass flows with arrows proportional to the flow quantity. They have directed arrows (between at least two nodes) featuring flows in a process, production system or supply chain.',
    },
    {img: require('../assets/chartimages/2.png')},
  ];

  const extradata3 = [
    {name: 'Pie Chart'},
    {
      def: 'Pie Chart is a type of graph that displays data in a circular graph. The pieces of the graph are proportional to the fraction of the whole in each category. In other words, each slice of the pie is relative to the size of that category in the group as a whole.',
    },
    {img: require('../assets/chartimages/3.png')},
  ];

  const extradata4 = [
    {name: 'Waterfall Chart'},
    {
      def: "waterfall chart shows a running total as values are added or subtracted. It's useful for understanding how an initial value (for example, net income) is affected by a series of positive and negative values. The columns are color coded so you can quickly tell positive from negative numbers.",
    },
    {img: require('../assets/chartimages/4.png')},
  ];

  const extradata5 = [
    {name: 'Waffle Chart'},
    {
      def: 'Waffle chart A waffle chart shows progress towards a target or a completion percentage. There is a grid of small cells, of which coloured cells represent the data.A chart can consist of one category or several categories. Multiple waffle charts can be put together to show a comparison between different charts.',
    },
    {img: require('../assets/chartimages/5.png')},
  ];

  const extradata6 = [
    {name: 'Stacked Bar Chart'},
    {
      def: 'Bar chart Stacked Chart. Bar charts are best used when showing comparisons between categories. Typically, the bars are proportional to the values they represent and can be plotted either horizontally or vertically. One axis of the chart shows the specific categories being compared, and the other axis represents discrete values',
    },
    {img: require('../assets/chartimages/6.png')},
  ];

  const extradata7 = [
    {name: 'Gannt Chart'},
    {
      def: "A Gantt chart is a visualization that helps in scheduling, managing, and monitoring specific tasks and resources in a project.It consists of a list of tasks and bars depicting each task's progress.It's the most widely used chart in project management.",
    },
    {img: require('../assets/chartimages/7.png')},
  ];

  const extradata8 = [
    {name: 'Dot Chart'},
    {
      def: 'A dot plot, also known as a strip plot or dot chart, is a simple form of data visualization that consists of data points plotted as dots on a graph with an x- and y-axis. These types of charts are used to graphically depict certain data trends or groupings',
    },
    {img: require('../assets/chartimages/8.png')},
  ];

  const extradata9 = [
    {name: 'Area Chart'},
    {
      def: "An area chart combines the line chart and bar chart to show how one or more groups' numeric values change over the progression of a second variable, typically that of time. An area chart is distinguished from a line chart by the addition of shading between lines and a baseline, like in a bar chart.",
    },
    {img: require('../assets/chartimages/9.png')},
  ];

  const extradata10 = [
    {name: 'Unit Chart'},
    {
      def: 'Unit chart -A chart used to communicate quantities of things by making the number of symbols on the chart. proportional to the quantity of things being represented',
    },
    {img: require('../assets/chartimages/10.png')},
  ];

  const extradata11 = [
    {name: 'Slope Chart'},
    {
      def: 'Slope chart (also called slope graph) shows developments between two points, e.g. between two dates. Slope charts can be seen as simplified line charts that just show the start and end point of each line.',
    },
    {img: require('../assets/chartimages/11.png')},
  ];

  const extradata12 = [
    {name: 'Pyramid Chart'},
    {
      def: "A pyramid chart (also called a triangle diagram or a triangle chart) appears in the shape of a triangle divided into horizontal sections and is used to represent hierarchies. Because of the chart's shape, each section has a different size, and the width of each section indicates the level of hierarchy among each topic",
    },
    {img: require('../assets/chartimages/pyramid.jpeg')},
  ];

  const [index, setindex] = useState(0);

  const onswipe = () => {
    setindex(index + 1);
  };

  console.log(index, 'index');

  const data = [
    {
      id: 1,
      data: extradata1,
    },
    {
      id: 2,
      data: extradata2,
    },
    {
      id: 3,
      data: extradata3,
    },
    {
      id: 4,
      data: extradata4,
    },
    {
      id: 5,
      data: extradata5,
    },
    {
      id: 6,
      data: extradata6,
    },
    {
      id: 7,
      data: extradata7,
    },
    {
      id: 8,
      data: extradata8,
    },
    {
      id: 9,
      data: extradata9,
    },
    {
      id: 10,
      data: extradata10,
    },
    {
      id: 11,
      data: extradata11,
    },
    {
      id: 12,
      data: extradata12,
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <View>
        <TopHeading text={'Practice'} />
      </View>
      <View my={10} ml={2}>
        <FlatList
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setactiveindex(index);
                  setswiperdata(item.data);
                }}>
                <View
                  w={60}
                  mx={3}
                  p={3}
                  borderRadius={5}
                  borderWidth={1}
                  borderColor={
                    activeindex !== null && activeindex === index
                      ? colors.iconcolor
                      : colors.text
                  }>
                  <Text
                    fontSize={fontSizes.xxlarge}
                    textAlign={'center'}
                    fontFamily={fonts.regularFont}>
                    {item.id}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View w={width} mx="auto" my={1}>
        <Text
          w={'90%'}
          fontSize={fontSizes.xxlarge}
          mx="auto"
          textAlign={'center'}
          fontFamily={fonts.regularFont}>
          Swap the Card to See
        </Text>
        <Text
          w={'90%'}
          fontSize={fontSizes.xxlarge}
          mx="auto"
          textAlign={'center'}
          fontFamily={fonts.regularFont}>
          How the Chart Look Like
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Swiper
          backgroundColor="transparent"
          cards={swiperdata}
          onSwipedRight={() => setindex(index + 1)}
          onSwipedLeft={() => setindex(index - 1)}
          // onSwiped={onswipe}
          // showSecondCard={false}
          animateCardOpacity={true}
          disableRightSwipe={index === 2}
          disableLeftSwipe={index === 0}
          disableBottomSwipe
          onSwipedAll={() => {
            setindex(0);
            console.log('nice ');
          }}
          disableTopSwipe
          cardIndex={index}
          swipeBackCard
          goBackToPreviousCardOnSwipeLeft={true}
          stackSize={2}
          stackSeparation={0}
          stackScale={1}
          renderCard={card => {
            return (
              <View style={styles.slide}>
                {card.name ? (
                  <Text
                    fontSize={fontSizes.xxxxxlarge}
                    fontFamily={fonts.boldFont}>
                    {card.name}
                  </Text>
                ) : card.def ? (
                  <Text
                    fontSize={15}
                    fontFamily={fonts.regularFont}>
                    {card.def}
                  </Text>
                ) : (
                  <Image
                    key={card.img}
                    style={styles.image}
                    alt="chart-image"
                    source={card.img}
                  />
                )}
              </View>
            );
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {},

  slide: {
    minHeight: 240,
    maxHeight: 'auto',
    width: '100%',
    padding: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#222',
    borderRadius: 8,
  },

  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    width: 180,
    resizeMode: 'contain',
    height: 180,
  },
});

export default SinglePracticeChart;
