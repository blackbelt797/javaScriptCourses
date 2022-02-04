

//Global variable 
//global Scope is called the window.
//Any thing that is in the global scope is attached to the window  object  EXCEPT const and let 


// const age = 200; 

// function go() {
// 	const age = 200; 
// 	const hair = 'blond';
// 	console.log(age);
// 	console.log(hair);




// }


// go();


// function isCool(name) {
// 	let cool; 
// 	if (name === 'Gregg') {
// 		cool = true;
// 	}
// 	console.log(cool);
// 	return cool;
// }

//Block Scoping is whatever you have inside the  curly brackets is what your varaible is 
//scoped to. 
// Var variable is function scoped not block scoped 
// What are the differences between block scope, global scoped and function scoped
// Basically Scoped is saying there are barriers that can be crossed or not between your 
// entire application aka Global Scoped, you have function scoped and block scope. 



// for(let i = 0; i < 10; i++)  {
// 	console.log(i);
// }




// Example of scope look up 

const dog = 'snickers'; 

function logDog() {
	console.log(dog);

}
function go() {
	const dog = 'sonny';
	logDog();
}

go();


//This is a part of JavaScript Lexical Scoping or static scoping 
// Scope look up or variable look up is looking for where they are defined not where it is ran


//Best Practices for creating variables
 // -- Dont make global variable
 //-- Function scoping you can make a function inside of a function that is allowed but not very common
 

function sayHi(name) {
	function yell() {
		console.log(name.toUpperCase())
	}
	yell();
}

yell();