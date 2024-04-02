function createGreeting(greeting = '') {
 const myGreeting = greeting.toUpperCase();
 return function (name) {
  //inner scope here
  return `${myGreeting} ${name}`; //inner scope here
 };
} // outer scoper here aka the whole function

// the variable that was made was in the inner scope or inside the function
//closure is when you the function has stopped runnig but you ca still access the variables inside the scope
function createGreeting(greeting = '') {
 const myGreeting = greeting.toUpperCase();
 return function (name) {
  return `${myGreeting} ${name}`;
 };
} // outer scope

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');

console.log(sayHello('gregg'));
console.log(sayHello('megan'));
console.log(sayHey('owen'));

//Other Example making private varables

function createGame(gameName) {
 //when you create a new game you create an empty score variable
 let score = 0;
 return function win() {
  // this inner function will increment it
  score++;
  return `Your name ${gameName} score is ${score}`;
 };
}

// this is use full because you can run more then one game at a time
const hockeyGame = createGame('Hockey');

const soccerGame = createGame('soccer');

//Closure are the ablility of a child function or inner function to access variables from a higher level scope even after the function has been called or ran.
