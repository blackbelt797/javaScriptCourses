console.log('It works');

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
 { comment: 'Love the burgs', rating: 4 },
 { comment: 'Horrible Service', rating: 2 },
 { comment: 'Smoothies are great, liked the burgers too', rating: 5 },
 { comment: 'Ambiance needs work', rating: 3 },
 { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

// *** Callback Methods ***

// Find the first rating that talks about burger with find()

//const findBurgRating = (singleFeedback) => singleFeedback.comment.includes('burg'); // Yshorter way of writing it or implecit return
//Explicit return 👇
// function findBurgRating(singleFeedback) {
//  return singleFeedback.comment.includes('burg');
// }

// const burgRating = feedback.find(findBurgRating);
// console.log(burgRating);

//This is another way of writing it but now it can be used as a method
// const utils = {
//  findBurgRating: function (singleFeedback) {
//   return singleFeedback.comment.includes('burg');
//  },
// };

function findByWord(word) {
 return function (singleFeedback) {
  return singleFeedback.comment.includes(word);
 };
}

const burgRating = feedback.find(findByWord('burg'));
const smoothieRating = feedback.find(findByWord('Smoothie'));

console.log(burgRating, smoothieRating);

//ToDo
// Find all ratings that are above 2 with filter()

//Find all ratings that talk about a burger with filter()

//Remove the one star rating however you like

// Check if there is at least 5 if the one type of meat with some()

// Make sure we have at least 3 of every meat with every()

//sort the toppings alphabetically with sort()

// Sort the order totals from most expensive to least expensive
