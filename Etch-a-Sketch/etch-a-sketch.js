//Select the elements on the page - canvas shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 40; //When its a true value and wont change you cna name the variable with all CAPS and _ underscores

// Setup our canvas for drawing
//Destructuring
//const width = canvas.width; // this will grab the width of the canvas
//const height = canvas.height; //this will grab the height of the canvas but now its availabe as a varaible called height

//make a variable called height and width from the same properties on our cavas
//this is also called Destructuring
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath(); // Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
//write a draw function
//This is where we are destructuring an object so that its only one level down
function draw({ key }) {
 //increment the hue
 hue += 10;
 ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
 console.log(key);
 //start the path
 ctx.beginPath();
 ctx.moveTo(x, y);
 //move our x and y values depending on the user
 switch (key) {
  case 'ArrowUp':
   y -= MOVE_AMOUNT;
   break;
  case 'ArrowRight':
   x += MOVE_AMOUNT;
   break;
  case 'ArrowDown':
   y += MOVE_AMOUNT;
   break;
  case 'ArrowLeft':
   x -= MOVE_AMOUNT;
  default:
   break;
 }
 ctx.lineTo(x, y);
 ctx.stroke();
}
// write a handler for the keys
function handleKey(e) {
 if (e.key.includes('Arrow')) {
  e.preventDefault();
  draw({ key: e.key });
 }
}
//clear/ shake function

function clearCanvas() {
 canvas.classList.add('shake');
 ctx.clearRect(0, 0, width, height);
 canvas.addEventListener(
  'animationend',
  function () {
   console.log('Done the Shake');
   canvas.classList.remove('shake');
  },
  { once: true }
 );
}

//listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
