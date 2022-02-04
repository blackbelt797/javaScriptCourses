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
// create an array

const numbers = [3, 5, 7, 11, 2, 6, 8, 90, 450, 23, 57, 83];

let smallToBig = [];
//display the list of numbers
//How to display smallest number to biggest number.
for (let i = 0; i < numbers.length; i++) {
 if (smallToBig <= numbers[i]) {
 } else {
  console.log(numbers[i]);
 }
}
