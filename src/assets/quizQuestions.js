export const quizQues = [
    {
      question:"Which Chart is that?",
      correctAnswer:"Venn Chart",
      image:require('./chartimages/1.png'),
      options:{
          a:"Venn Chart",
          b:"Bar Chart",
          c:"Pie Chart",
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
      question:"Which Chart is that?",
      correctAnswer:"Sankey Chart",
      image:require('./chartimages/2.png'),
      options:{
          a:"Pie Chart",
          b:"Dot Chart",
          c:"Sankey Chart",
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
      question:"Which Chart is that?",
      correctAnswer:"Scatter Chart",
      image:require('./chartimages/13.png'),
      options:{
          a:"Unit Chart",
          b:"Scatter Chart",
          c:"Histogram",
      }
    },
    {
      question:"Which Chart is that?",
      correctAnswer:"Grannt Chart",
      image:require('./chartimages/7.png'),
      options:{
          a:"Grannt Chart",
          b:"Area Chart",
          c:"Unit Chart",
      }
    },
    {
      question:"Which Chart is that?",
      correctAnswer:"Histogram",
      image:require('./chartimages/14.png'),
      options:{
          a:"Violin Chart",
          b:"Bar Chart",
          c:"Histogram",
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