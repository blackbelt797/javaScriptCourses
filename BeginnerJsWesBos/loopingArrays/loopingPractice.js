// Sunday 1/30/22 Practicing Looping through arrays

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota', 'Dodge'];

//Dispalay the list of cars on the console

function listOfCars() {
 console.log(cars);
}

//cars.forEach(listOfCars());

// one way to itterate throuh an array is the for loop

var keys = Object.keys(o); // Get an array of property names for object o
var values = []; //Stor matching property values in this array

for (var i = 0; i < keys.length; i++) {
 //For each index in the array
 var key = keys[i]; //Get the key at that index
 values[i] = o[key]; //Store the value in the values array
}
