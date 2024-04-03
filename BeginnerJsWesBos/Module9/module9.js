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

const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

const inventory = [
 { type: 'shirt', price: 4000 },
 { type: 'pants', price: 4532 },
 { type: 'socks', price: 234 },
 { type: 'shirt', price: 2343 },
 { type: 'pants', price: 2343 },
 { type: 'socks', price: 542 },
 { type: 'pants', price: 123 },
];

// Looping Methods

function logTopping(topping, index, origArray) {
 console.log(topping, index, origArray);

 // toppings.forEach((topping) => {
 //  console.log(topping);
 // });

 // log the topping

 // log the prev topping is there is one
 // log the next topping if there is one
 const nextTopping = origArray[index + 1];
 const lastTopping = origArray[index - 1];
 nextTopping ? console.log(nextTopping) : null; // do it as a turnary
 lastTopping ? console.log(lastTopping) : null;
 //  if (nextTopping) {
 //   console.log(nextTopping);
 //  }
 // if its the last item in the array say good bye

 index === origArray.length - 1 ? console.log('Good Buy') : console.log('Getting next topping');
 index === origArray.length - 1 && console.log('good Buy');
 console.log('--------------');
}

toppings.forEach(logTopping);

//Map, filter, reduce --> next video  # 50

console.clear();

function addArms(face) {
 return `👋 ${face} 👋`;
}
function capitalize(word) {
 return `${word[0].toUpperCase()}${word.slice(1)}`;
}

const toys = faces.map(addArms);

console.log(toys);

// const fullNames = ['gregg', 'megan', 'owen', 'declan'].map(capitalize).map((name) => `${name} Cline`);
// console.log(fullNames);

const firstLetterCap = ['one', 'two', 'three'].map(capitalize).map((name) => `${name}`);
console.log(firstLetterCap);

//const orderTotalsWithTax = orderTotals.map((total) => total * 1.13);
//console.log(orderTotalsWithTax);

// function attachBody(face, body) {
//  return `
//      ${face}
//    ${body.repeat(3)}
//   ${Array(3).fill(body).join(' ')}
// 👇  ${body.repeat(2)} 👇
//    ${Array(2).fill(body).join(' ')}
//    ${Array(2).fill(body).join(' ')}
//    🦶  🦶
//   `;
// }

// faces.map((face) => attachBody(face, '🍟')).forEach((body) => console.log(body));

const cleanPeople = people.map(function (person) {
 const birthday = new Date(person.birthday).getTime();
 const now = Date.now();
 const age = Math.floor((now - birthday) / 31536000000);
 return {
  age,
  name: `${person.names.first} ${person.names.last}`,
 };
});

console.table(cleanPeople);





