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
