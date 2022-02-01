const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

const name = 'Gregg Cline';

const gregg = {
 name: 'gregg',
 age: 100,
 cool: true,
};

// For
for (let i = 0; i <= 10; i++) {
 //console.log(i);
}

// itterate through an array of numbers
// this is the old way to do this typically a forEach() is used instead

// for (let i = 0; i < numbers.length; i++) {
//  console.log(numbers[i]);
// }
// For of
//what is an itteratible, is something that has length

//this way of looping can handle emoji's
const fname = 'Gregg Cline';
for (const letter of fname) {
 console.log(letter);
}

for (const number of numbers) {
 console.log(number);
}

// For in - used for looping over keys of an object
for (const prop in gregg) {
 console.log(prop);
}
//GOTCHAS
const baseHumanStats = {
 feet: 2,
 arms: 2,
 eyes: 2,
 head: 1,
};

function Human(name) {
 this.name = name;
}

Human.prototype = baseHumanStats;

const gregg2 = new Human('gregg');

console.log(Object.entries(gregg2));
// While Loop

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
 console.log(people.name);
}

for (let i = 0; i < people.length; i++) {
 console.log(people[i].name);
}

const oldPeople = people.filter((person) => {
 if (person.age > 30) {
  return person;
 }
});

const findPerson = people.find((person) => {
 if (person.name == 'Kenny') {
  return person;
 }
});

const totalAge = people.reduce((acc, person) => {
 // acc = 0
 // kenny is 32
 // ramey is 31
 acc = person.age + acc;
 return acc;
}, 0);

// const groupPeople = Object.values(people.reduce((acc, people) => {
//   const key = [people.location];
//   acc[key] ||= {
//     location: people.location,
//     people: []
//   }
//   acc[key].people.push(people.name)
//   return acc;
// }, {}))

console.log(totalAge);
