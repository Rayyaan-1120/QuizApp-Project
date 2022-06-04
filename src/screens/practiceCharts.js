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
    def:"Venn diagram is an illustration that uses circles to show the relationships among things or finite groups of things. Circles that overlap have a commonality while circles that do not overlap do not share those traits. Venn diagrams help to visually represent the similarities and differences between two concepts.",
    image:require('../assets/chartimages/1.png')
  },
  {
    name:"Sankey Chart",
    def:"Sankey diagrams are a specific type of flow diagram used for visualization of material, cost or energy flows. They show energy or mass flows with arrows proportional to the flow quantity. They have directed arrows (between at least two nodes) featuring flows in a process, production system or supply chain.",
    image:require('../assets/chartimages/2.png')
  },
  {
    name:"Pie Chart",
    def:"Pie Chart is a type of graph that displays data in a circular graph. The pieces of the graph are proportional to the fraction of the whole in each category. In other words, each slice of the pie is relative to the size of that category in the group as a whole.",
    image:require('../assets/chartimages/3.png')
  },
  {
    name:"Waterfall Chart",
    def:"waterfall chart shows a running total as values are added or subtracted. It's useful for understanding how an initial value (for example, net income) is affected by a series of positive and negative values. The columns are color coded so you can quickly tell positive from negative numbers.",
    image:require('../assets/chartimages/4.png')
  },
  {
    name:"Waffle Chart",
    def:"Waffle chart A waffle chart shows progress towards a target or a completion percentage. There is a grid of small cells, of which coloured cells represent the data.A chart can consist of one category or several categories. Multiple waffle charts can be put together to show a comparison between different charts.",
    image:require('../assets/chartimages/5.png')
  },
  {
    name:"Stacked Bar Chart",
    def:"Bar chart Stacked Chart. Bar charts are best used when showing comparisons between categories. Typically, the bars are proportional to the values they represent and can be plotted either horizontally or vertically. One axis of the chart shows the specific categories being compared, and the other axis represents discrete values",
    image:require('../assets/chartimages/6.png')
  },
  {
    name:"Gantt Chart",
    def:"A Gantt chart is a visualization that helps in scheduling, managing, and monitoring specific tasks and resources in a project.It consists of a list of tasks and bars depicting each task's progress.It's the most widely used chart in project management.",
    image:require('../assets/chartimages/7.png')
  },
  {
    name:"Dot Chart",
    def:"A dot plot, also known as a strip plot or dot chart, is a simple form of data visualization that consists of data points plotted as dots on a graph with an x- and y-axis. These types of charts are used to graphically depict certain data trends or groupings",
    image:require('../assets/chartimages/8.png')
  },
  {
    name:"Area Chart",
    def:"An area chart combines the line chart and bar chart to show how one or more groups' numeric values change over the progression of a second variable, typically that of time. An area chart is distinguished from a line chart by the addition of shading between lines and a baseline, like in a bar chart.",
    image:require('../assets/chartimages/9.png')
  },
  {
    name:"Unit Chart",
    def:"Unit chart -A chart used to communicate quantities of things by making the number of symbols on the chart. proportional to the quantity of things being represented",
    image:require('../assets/chartimages/10.png')
  },
  {
    name:"Slope Chart",
    def:"Slope chart (also called slope graph) shows developments between two points, e.g. between two dates. Slope charts can be seen as simplified line charts that just show the start and end point of each line.",
    image:require('../assets/chartimages/11.png')
  },
  {
    name:"Pyramid Chart",
    def:"A pyramid chart (also called a triangle diagram or a triangle chart) appears in the shape of a triangle divided into horizontal sections and is used to represent hierarchies. Because of the chart's shape, each section has a different size, and the width of each section indicates the level of hierarchy among each topic",
    image:require('../assets/chartimages/pyramid.jpeg')
  },
  {
    name:"Scatter Chart",
    def:"Scatter chart - The scatter diagram graphs pairs of numerical data, with one variable on each axis, to look for a relationship between them. If the variables are correlated, the points will fall along a line or curve. The better the correlation, the tighter the points will hug the line",
    image:require('../assets/chartimages/13.png')
  },
  {
    name:"Histogram",
    def:"A histogram is a graphical representation that organizes a group of data points into user-specified ranges. Similar in appearance to a bar graph, the histogram condenses a data series into an easily interpreted visual by taking many data points and grouping them into logical ranges or bins",
    image:require('../assets/chartimages/14.png')
  },
  {
    name:"Bar Chart",
    def:"A bar chart is a graph which uses parallel rectangular shapes to represent changes in the size, value, or rate of something or to compare the amount of something relating to a number of different countries or groups",
    image:require('../assets/chartimages/15.png')
  },
  {
    name:"Word Cloud",
    def:"A word cloud is a collection, or cluster, of words depicted in different sizes. The bigger and bolder the word appears, the more often it's mentioned within a given text and the more important it is",
    image:require('../assets/chartimages/16.png')
  },
  {
    name:"Box Plot",
    def:"A box and whisker plot—also called a box plot—displays the five-number summary of a set of data. The five-number summary is the minimum, first quartile, median, third quartile, and maximum. In a box plot, we draw a box from the first quartile to the third quartile. A vertical line goes through the box at the median",
    image:require('../assets/chartimages/17.png')
  },
  {
    name:"Violin Chart",
    def:"A violin plot is a hybrid of a box plot and a kernel density plot, which shows peaks in the data. It is used to visualize the distribution of numerical data. Unlike a box plot that can only show summary statistics, violin plots depict summary statistics and the density of each variable",
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
                  image:item.image,
                  def:item.def
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