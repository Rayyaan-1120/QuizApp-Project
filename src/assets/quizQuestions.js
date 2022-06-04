export const quizQues = [
    {
      question:"What represents boxplot, choose the correct answer:",
      correctAnswer:"first quartile, median, third quartile",
      image:require('./chartimages/questionmark.png'),
      options:{
          a:"minimum,median, geometric mean",
          b:"average, median",
          c:"geometric meen, standard deviation",
          d:"first quartile, median, third quartile"
      }
    },
    
    {
      question:"Which Chart is that?",
      correctAnswer:"Slope Chart",
      image:require('./chartimages/11.png'),
      options:{
          a:"Unit Chart",
          b:"Slope Chart",
          c:"Pyramid Chart",
      }
    },
    {
      question:"Drag and Drop the Right Chart",
      correctAnswer:"Pyramid Chart",
      image:require('./chartimages/faarigh.png'),
      draggable:true,
      imageone:require('./chartimages/15.png'),
        imagetwo:require('./chartimages/16.png'),
        imagethree:require('./chartimages/17.png'),
        imagefour:require('./chartimages/18.png'),

      options:{
          a:"Bar Chart",
          b:"Word Cloud",
          c:"Box Plot",
          d:"Violin Chart"
      }
    },
    {
      question:"Which of the charts shows the peaks in the data along with distribution of numerical data?",
      correctAnswer:"violin chart",
      image:require('./chartimages/questionmark.png'),
      options:{
          a:"boxplot",
          b:"area chart",
          c:"violin Chart",
          d:"histogram"
      }
    },
    {
      question:"Drag and Drop the Right Chart",
      correctAnswer:"Pyramid Chart",
      image:require('./chartimages/faarigh.png'),
      draggable:true,
      imageone:require('./chartimages/4.png'),
        imagetwo:require('./chartimages/5.png'),
        imagethree:require('./chartimages/6.png'),
        imagefour:require('./chartimages/3.png'),

      options:{
          a:"Waterfall Chart",
          b:"Waffle Chart",
          c:"Stacked Bar Chart",
          d:"Pie Chart"
      }
    },
    {
      question:"Which of the following relates to the histogram?",
      correctAnswer:"condenses a data series into an easily interpreted visual",
      image:require('./chartimages/questionmark.png'),
      options:{
          a:"is similar to area chart",
          b:"is a collection, or cluster, of words depicted in different sizes",
          c:"condenses a data series into an easily interpreted visual",
          d:"A chart used to communicate quantities of things"
      }
    },
    {
      question:"Which Chart is that?",
      correctAnswer:"Gantt Chart",
      image:require('./chartimages/7.png'),
      options:{
          a:"Gantt Chart",
          b:"Area Chart",
          c:"Unit Chart",
      }
    },
    {
      question:"The definition “graphs pairs of numerical data, with one variable on each axis, to look for a relationship between them.” relates to:",
      correctAnswer:"scatter chart",
      image:require('./chartimages/questionmark.png'),
      options:{
          a:"scatter chart",
          b:"slope chart",
          c:"dot chart",
          d:"gannt chart"
      }
    },
    {
      question:"Which chart shows the relationship between two points?",
      correctAnswer:"slope chart",
      image:require('./chartimages/questionmark.png'),
      options:{
          a:"boxplot",
          b:"scatter chart",
          c:"slope chart",
          d:"dot chart"
      }
    },
    {
      question:"Which of the diagrams which uses parallel rectangular shapes to represent changes in the size, value, or rate of something?",
      correctAnswer:"boxplot",
      image:require('./chartimages/questionmark.png'),
      options:{
          a:"waffle chart",
          b:"boxplot",
          c:"bar chart",
          d:"unit chart"
      }
    },
]


export function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * i); // no +1 here!
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

// export function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//   }
// }

//  function shuffle(array) {
//           let currentIndex = array.length,  randomIndex;
        
//           // While there remain elements to shuffle.
//           while (currentIndex != 0) {
        
//             // Pick a remaining element.
//             randomIndex = Math.floor(Math.random() * currentIndex);
//             currentIndex--;
        
//             // And swap it with the current element.
//             [array[currentIndex], array[randomIndex]] = [
//               array[randomIndex], array[currentIndex]];
//           }
        
//           return array;
//         }