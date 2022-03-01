//Working with Kenny
const people = [
 {
  name: 'Kenny',
  age: 32,
  location: 'San Diego',
 },
 {
  name: 'Ramey',
  age: 31,
  location: 'San Diego',
 },
 {
  name: 'Dakota',
  age: 8,
  location: 'New York',
 },
 {
  name: 'Kayden',
  age: 5,
  location: 'Texas',
 },
 {
  name: 'Connor',
  age: 0,
  location: 'Texas',
 },
];

// print name
function peopleNames(people) {
 // console.log(people.name);
}

// for (let i = 0; i < people.length; i++) {
//  console.log(people[i].name);
// }

// const oldPeople = people.filter((person) => {
//  if (person.age > 30) {
//   return person;
//  }
// });

// const findPerson = people.find((person) => {
//  if (person.name == 'Kenny') {
//   return person;
//  }
// });

// const totalAge = people.reduce((acc, person) => {
//  // acc = 0
//  // kenny is 32
//  // ramey is 31
//  acc = person.age + acc;
//  return acc;
// }, 0);

// const groupPeople = Object.values(people.reduce((acc, people) => {
//   const key = [people.location];
//   acc[key] ||= {
//     location: people.location,
//     people: []
//   }
//   acc[key].people.push(people.name)
//   return acc;
// }, {}))

//console.log(totalAge);
// create an array

// const numbers = [3, 5, 7, 11, 2, 6, 8, 90, 450, 23, 57, 83];

// let smallToBig = [];
// //display the list of numbers
// //How to display smallest number to biggest number.
// for (let i = 0; i < numbers.length; i++) {
//  if (smallToBig <= numbers[i]) {
//  } else {
//   console.log(numbers[i]);
//  }
// }

// Sunday February 27th 2022
const youngPeople = [];
const names = [
 {
  name: 'Kenny',
  age: 32,
 },
 {
  name: 'Ramey',
  age: 31,
 },
 {
  name: 'Dakota',
  age: 8,
 },
 {
  name: 'Kayden',
  age: 5,
 },
];

// youngPeople.push({name: "kenny"})

// iterate through names
// create conditions if user is under 30
// if under 30 push into youngPeople array .push()

// for (let i = 0; i < names.length; i++) {
//   if (names[i].age < 30) {
//     youngPeople.push(names[i]);
//   }
// }
// Now i want you to log only the names under 30

// TwoSums problem
/* What map in javascript 
  The map object holds key-value pairs and remembers the original inserction order of the keys. Any value 
  (both objects and primitive values) maybe used as either a key or a value.

*/

// const numbers = [1, 4, 6, 3, 8]; // 10
// const target = 10;
// function twoSum(nums, target) {
//  const map = new Map();
//  for (let i = 0; i < numbers.length; i++) {
//   const current_number = numbers[i];
//   if (map.has(current_number)) {
//    return [numbers[map.get(current_number)], numbers[i]];
//   }
//   map.set(target - current_number, i);
//  }
// }
// console.log(twoSum(numbers, target));

//Create an array and display it in console
const numbers = [1, 4, 5, 7, 9, 56, 77, 54, 32, 3, 4, 14];
numbers.forEach((number) => {
 console.log(number);
});

// Now make an array of 5 objects that have 2 properties each.

const cars = [
 {
  make: 'Ford',
  year: '2006',
 },
 {
  make: 'Chevy',
  year: '2016',
 },
 {
  make: 'Dodge',
  year: '2021',
 },
 {
  make: 'Tundra',
  year: '2022',
 },
 {
  make: 'Jeep',
  year: '2010',
 },
];
