// Function Decleration or Regular Function 
  /*
	function doctorize(firstName) {
		return `Dr.${firstName}`;
	}
  */

	// Anon function 

	/*
	function (firstName){

		return `Dr.${firstName}`;
	}
	*/


//Function Expression 
// const doctorize = function(firstName) {
// 	return `Dr.${firstName}`;
// };

// const inchToCM = function inchToCM(inches) {
// 	return inches * 2.54;

// };

//const inchToCM = inches => inches * 2.24;

// Returing an object

	// Also this is one way to write a function 
// function makeABaby(first, last) {
// 	const baby = {
// 		name: `${first} ${last}`,
// 		age: 0
// 	}
// 	return baby;
// } 



// This is a way but using arrow functions and in order to make it into an => function 
// you have to make it set to a "variable" or 
// You end up taking an unamous function and stuck it into a variable

// const makeABaby =  (first, last) => {
// 	const baby = {
// 		name: `${first} ${last}`,
// 		age: 0
// 	}
// 	return baby;
// }

// Termonology.... making it an 'implecit return' 
// How do you implecitly return an object 

//const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 0 });

//IIFE 
// Immediatley Invoked Function Expression
//by wrapping the entire functrion in paraenthese and parenthesies always run first in JavaScript then calling the function. 
// (function() {
// 	console.log('Running Anon function');
// 	return 'You are cool!';
// })(); // these bottom two parenthesies are need to run or call the imediatly ran function. 

//What are the benefits? before block scope and modules were availible

// ****Methods!!!! ******
// Methods is a function that lives inside an object 


const gregg = {
	name: 'Gregg Cline',

	//Method
	sayHi: function() {
		console.log('Hey Gregg');
		return 'Hey Gregg';
	},
	//Short hand Method 
	// This is the typical way of writing a method. 
	yellHi() {
		console.log('Hey GREGGGGGG!!');
	},

	// Arrow function 
	wisperHi: () => {
		console.log('hi! Shhhhhhh!');
	}
}

// Callback Functions 
// click callback 

const button = document.querySelector('.clickMe');

function handleClick() {
	console.log('Great Clicking!!');
}

//button.addEventListener('click', handleClick);  // This is one way to do it 

button.addEventListener('click', function() {
	console.log('Nice Job!!!');
});  // this is passing it an annomous function and the browser knows to call this functions 

// Timer Callback or a callback function 
setTimeout(function() {
	console.log('Done! Time to eat!');
}, 1000);