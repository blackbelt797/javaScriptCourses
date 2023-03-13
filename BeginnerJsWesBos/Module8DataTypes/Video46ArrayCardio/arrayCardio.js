console.log('it works');

const toppings = ['Mushrooms', 'Tomatos', 'Eggs', 'Chili', 'Avacado', 'Bacon', 'Cheese'];

const names = ['Gregg', 'Megan', 'Owen', 'Declan'];

// This is how to loop through an array
names.forEach((name) => {
 console.log(name);
});

//Array Prototypes utilitiies

/* 
Static Methods
*/

// Array.of();

//Make a function that creates a range from x to y with Array.from();
function createRange(start, end) {
 const range = Array.from({ length: end - start + 1 }, function (item, index) {
  return index + start;
 });
 return range;
}

const myRange = createRange(3, 9);

//Check if the least array you created is really an array with Array.isArray();
console.log(Array.isArray(myRange));

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
console.log(Object.entries(toppings));
console.log(Object.keys(toppings));
console.log(Object.values(toppings));
// You can destructure your array directly
Object.values(toppings).forEach(([key, value]) => {
 // const key = entry[0];
 //const value = entry[1];
 //const [key, value] = entry; // This is how you would destructure your array
 console.log(key, value);
});

/* 
Instance Methods
*/
// Display all bun types with " or " - use join()
console.log(toppings.join(' or '));
// We have a array "hot dogs, hamburgers, sausages, corn" - use split() to turn into a string

const foodString = 'hot dogs, hambugers, sausage, corn';

console.log(foodString.split(','));

// Take the last item off toppings with pop()

const lastItem = toppings.pop();
console.log(lastItem);
// add it back with push()
const t2 = toppings.push(lastItem);
console.log(toppings);
// take the first item off toppings with shift()
const firstItem = toppings.shift();
console.log(firstItem);
// add it back in with unshift()
toppings.unshift(firstItem);
console.log(toppings);
// Do the last four, but immutable (with spreads and new variables)

let newToppings = toppings.slice(0, toppings.length - 1);
newToppings = [...newToppings, toppings[toppings.length - 1]];
console.log(newToppings);

// Make a copy of the toppings array with slice()
const toppingsCopy = toppings.slice(0);
toppings[0] = 'Skittles'; // Ohh... this just changed the first index of the array..
console.log(toppings);
console.log(toppingsCopy);
// Make a copy of the toppings array with spread
const toppings2 = [...toppings];
//Take out items 3 to 5 of your new toppings array with splice()
toppingsCopy.splice(3, 5);
console.log(toppingsCopy);
//Find the index of Avacado with indexOf() / lastIndexOf()
const avoIndex = toppings.indexOf('Avacado'); // this works with any type ie objects arrays
console.log(avoIndex);
const gregg = { name: 'gregg' };
const people = [{ name: 'megan' }, gregg];
console.log(people.indexOf(gregg));

//Check if hot sauce is in the toppings with includes()
const isInToppings = toppings.includes('Hot Sauce');
console.log(isInToppings);
if (!isInToppings) {
 toppings.push('Hot Sauce');
 console.log(toppings);
}
// And if it's not

// flip thoes toppings around with reverse()

//toppings.reverse();
//console.log(toppings);

// Now lets take a copy of it

const toppingsReverse = [...toppings].reverse();
//toppingsReverse.reverse();
console.log(toppingsReverse);
