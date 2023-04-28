console.log('It works');

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const toppings = ['Mushrooms', 'Tomatos', 'Eggs', 'Chili', 'Avacado', 'Bacon', 'Cheese'];
const feedback = [
 { comment: 'Love the burgs', rating: 4 },
 { comment: 'Horrible Service', rating: 2 },
 { comment: 'Smoothies are great, liked the burgers too', rating: 5 },
 { comment: 'Ambiance needs work', rating: 3 },
 { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const meats = {
 beyond: 10,
 beef: 5,
 prok: 7,
};

const prices = {
 hotdog: 453,
 burger: 765,
 sausage: 634,
 corn: 234,
};

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

function filterByMinRating(minRating) {
 return function (singleFeedback) {
  return singleFeedback.rating > minRating;
 };
}

const goodReviews = feedback.filter((singleFeedback) => singleFeedback.rating > 4);
console.table(goodReviews);
//Find all ratings that talk about a burger with filter()

const burgRatings = feedback.filter(findByWord('burg'));
console.table(burgRatings);
//Remove the one star rating however you like

const legitRatings = feedback.filter((single) => single.rating !== 1);

console.table(legitRatings);

// Check if there is at least 5 if the one type of meat with some()

const isThereAtLeastOneMeats = Object.values(meats).some((meatValue) => meatValue >= 5);
console.log(isThereAtLeastOneMeats);
// Make sure we have at least 3 of every meat with every()
const isThereEnoughOfEveryMeat = Object.values(meats).every((meatValue) => meatValue >= 3);
console.log(isThereEnoughOfEveryMeat);

//sort the toppings alphabetically with sort()

const numbers = [1, 2, 100, 3, 200, 400, 155];

// This is an even shorter way with a one liner

const numbersSorted = numbers.sort((firstItem, secondItem) => firstItem - secondItem);
// const numbersSorted = numbers.sort(function (firstItem, secondItem) {
//  return firstItem - secondItem;
//  // Below is a way of looping through the data.
//  //  if (firstItem > secondItem) {
//  //   return 1;
//  //  } else if (secondItem > firstItem) {
//  //   return -1;
//  //  } else {
//  //   return 0;
//  //  }
// });
console.log(numbersSorted);
console.log(toppings.sort());

// Sort the order totals from most expensive to least expensive with .sort()

function numberSort(a, b) {
 return a - b;
}
console.log(orderTotals.sort(numberSort));

//Sort the prices with sort()

const productsSortedByPrice = Object.entries(prices).sort(function (a, b) {
 const aPrice = a[1];
 const bPrice = b[1];
 return aPrice - bPrice;
});
console.table(productsSortedByPrice);
