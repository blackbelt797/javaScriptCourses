
//Function Definititon 
 function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {

	console.log('Running Calculate Bill');

	const total = billAmount + billAmount * taxRate + billAmount * tipRate;
	console.log(total); // This will log Total to the console 
	return total; // This will return the value set to Total as well 
}



// Running the function or calling the function 
//calculateBill();
// Now if you want to have access to the value in the calculateBill() function buy setting the function
// to a variable.
// nsole.log(`This is your total $${myTotal}`); // Now when you log it, you are able to access that variable/ value inside the function 

// if you want to 'Capture' the varaible inside a function then you will assing it to another variable 
//outside the function


//Example 

function sayHiTo(firstName){
	return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Gregg');

// console.log(greeting);


function doctorize(name) {
	return `Dr. ${name}`;
}

function yell(name){
	return ` HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100,.2);
console.log(myBill4);