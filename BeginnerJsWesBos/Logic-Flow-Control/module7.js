// The set timeout is a globally scoped method
// the setTimeout() will take 2 things a call back and the number of millaseconds or ms

//setTimeout(callback, ms);

// This is using an anomous function
// setTimeout(function () {
// console.log('Done!');
// }, 500);

function buzzer() {
 console.log('ENNNGGGGGGG');
}

// What is happening? JavaScript will run the console.log 'Starting' then start the
// function buzzer but it will move on to the next console.log and run that
// Then when the function buzzer is complete it will display/ execute that code

// This is the Asyncronous nature of JavaScript meaning it will continue to run

// console.log('Starting');
// setTimeout(buzzer, 500); // This is why callbacks are called callbacks
// console.log('finishing');

//setInterval(buzzer, 100); // This will continue to run

function setImmediateInterval(funcToRun, ms) {
 //right away call that function
 funcToRun();
 //run a regular interval
 return setInterval(funcToRun, ms);
}

setImmediateInterval(buzzer, 2000);
function sayHi() {
 console.log('Hi!!!');
}

//setImmediateInterval(sayHi, 200);

function destroy() {
 document.body.innerHTML = `<p> DESTROYED</p>`;
}

//You can stre this variable in a variable....
const bombTimer = setTimeout(destroy, 5000);

// The only way to celar a timer is to save reference to it in a variable.

window.addEventListener('click', function () {
 console.log('You clicked! You saved the world');
 //How to stop the function from running?
 clearTimeout(bombTimer); // Stop the Timer from running.
});

// This will continue to run
// setInterval(function () {
//  console.log('💩');
//  console.log('Hehehe');
// }, 10);

// To stop it set it to a variable.
const poopInterval = setInterval(function () {
 console.log('💩');
 console.log('Hehehe');
}, 100);

setTimeout(function () {
 clearInterval(poopInterval);
}, 3000);
