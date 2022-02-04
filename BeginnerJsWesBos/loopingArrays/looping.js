/**************/

const toppings = [
 'Mushrooms ',
 'Tomatoes',
 'Eggs',
 'Chili',
 'Lettuce',
 'Avocado',
 'Chiles',
 'Bacon',
 'Pickles',
 'Onions',
 'Cheese',
];

// const toDoList = ['clean kitchen', 'do laundry', 'clean bedrooms', 'pickup garage'];
// function list(chores) {
//  console.log(chores);
// }

// toDoList.forEach(list);

// //itterate through the arry
// function showTopping(topping) {
//  console.log(topping);
// }

// toppings.forEach(showTopping);

// When working wiht arrays there this is the structure
// Arrow function Way
// forEach((element) => { /* ... */ } )
// forEach((element, index) => { /* ... */ } )
// forEach((element, index, array) => { /* ... */ } )

// function logTopping(topping, index, originalArray) {
//  const nextTopping = originalArray[index + 1];
//  const prevTopping = originalArray[index - 1];
//  //log topping
//  console.log(topping);
//  // log previous topping if there is one
//  prevTopping ? console.log(prevTopping) : null;

//  //log the next topping of there is one

//  nextTopping ? console.log(nextTopping) : null;

//  //  if (nextTopping) {
//  //   console.log(nextTopping);
//  //  }

//  // if its the last item in the array "say good bye"

//  index === originalArray.length - 1 ? console.log('Goodbye') : console.log('Getting next topping');

//  //we are taking the index aka the array and asking if its equal to the originalArray.length - 1 will
//  // go the entire length of the array -1 and ? says if that is true then say good buy
//  // otherwise/ : say Getting toppings

//  //index === originalArray.length && console.log('Goodbye');
//  console.log('------------ 🍕 --------- ');
// }

// toppings.forEach(logTopping);

//map, filter, reduce

const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

function addArms(face) {
 console.log(`👋 ${face} 👋`);
}
const toys = faces.map(addArms);
console.log(toys);

//Examples of map wich are transforms

function addCline(name) {
 return `${name} Cline`;
}
function capitalize(word) {
 return `${word[0].toUpperCase()}${word.slice(1)}`;
}

const fullNames = ['gregg', 'megan', 'owen', 'declan'].map(capitalize).map(addCline);
console.log(fullNames);

// const fullNames = ['Gregg', 'Megan', 'Owen', 'Declan'].map((name) => `${name}  Cline`);
// console.log(fullNames);

const students = [
 {
  id: '11ce',
  first_name: 'Dall',
  last_name: 'Puckring',
 },
 {
  id: '2958',
  first_name: 'Margarete',
  last_name: 'Brandi',
 },
 {
  id: '565a',
  first_name: 'Bendicty',
  last_name: 'Woodage',
 },
 {
  id: '3a16',
  first_name: 'Micki',
  last_name: 'Mattes',
 },
 {
  id: 'f396',
  first_name: 'Flory',
  last_name: 'Gladeche',
 },
 {
  id: 'de5f',
  first_name: 'Jamill',
  last_name: 'Emilien',
 },
 {
  id: '54cb',
  first_name: 'Brett',
  last_name: 'Aizikowitz',
 },
 {
  id: '9135',
  first_name: 'Lorry',
  last_name: 'Smallman',
 },
 {
  id: '978f',
  first_name: 'Gilly',
  last_name: 'Flott',
 },
];

const people = [
 {
  birthday: 'April 22, 1993',
  names: {
   first: 'Keith',
   last: 'Buckley',
  },
 },
 {
  birthday: 'January 3, 1975',
  names: {
   first: 'Larry',
   last: 'Heep',
  },
 },
 {
  birthday: 'February 12, 1944',
  names: {
   first: 'Linda',
   last: 'Bermeer',
  },
 },
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
 beyond: 10,
 beef: 5,
 pork: 7,
};

const prices = {
 hotDog: 453,
 burger: 765,
 sausage: 634,
 corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
 { comment: 'Love the burgs', rating: 4 },
 { comment: 'Horrible Service', rating: 2 },
 { comment: 'Smoothies are great, liked the burger too', rating: 5 },
 { comment: 'Ambiance needs work', rating: 3 },
 { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const inventory = [
 { type: 'shirt', price: 4000 },
 { type: 'pants', price: 4532 },
 { type: 'socks', price: 234 },
 { type: 'shirt', price: 2343 },
 { type: 'pants', price: 2343 },
 { type: 'socks', price: 542 },
 { type: 'pants', price: 123 },
];

/*
      Looping Methods
    */
