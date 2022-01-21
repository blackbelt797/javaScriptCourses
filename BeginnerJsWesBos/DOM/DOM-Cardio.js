// make a Div
const div = document.createElement('div');
//add a class of wrapper to it
div.classList.add('wrapper');
//put it into the body
document.body.appendChild(div);

//make a unorder list
const ul = `<ul> 
<li>one</li>
<li>two</li>
<li>three</li>

</ul> `;

// add three list items named one, two and three
//put list into above wrapper

div.innerHTML = ul;

//console.log(div);

// create a image
const img = document.createElement('img');

img.src = 'https://source.unsplash.com/random/500';

//set the width of the image
img.width = 250;
img.height = 250;

img.classList.add('cute');

img.alt = 'Random Pic';

div.appendChild(img);

const myHTML = `
<div class="myDiv">
<p>Paragraph One</p>
<p>Paragraph Two</p>
</div>
`;

const ulElement = div.querySelector('ul');
console.log(ulElement);
//put this div before the unorderlist from above

ulElement.insertAdjacentHTML('beforebegin', myHTML);

const myDiv = div.querySelector('.myDiv');

// Add a class to the second paragraph called warning
myDiv.children[1].classList.add('warning');

//remove the first paragraph
myDiv.firstElementChild.remove();

//create a function called generatePlayerCard that takes in three arguments age, name , and height

function generatePlayerCard(name, age, height) {
 const html = `
		<div class="playerCard">
		<h2>${name}-${age}</h2>
		<p> Their height is  ${height} and ${age} years old. In Dog years this person
			would be ${age * 7} in dog years.
		</p>
		<button class="delete" type="button">&times; Delete</button>
		</div>
	`;
 return html;
}
// make a new div with the class of cards

const cards = document.createElement('div');

cards.classList.add('cards');

//have that function make 4 cards
let cardsHTML = generatePlayerCard('Gregg', 15, 179);
cardsHTML = cardsHTML += generatePlayerCard('Megan', 15, 179);
cardsHTML = cardsHTML += generatePlayerCard('Owen', 15, 179);
cardsHTML = cardsHTML += generatePlayerCard('Declan', 15, 179);
//append thoes to the div
//console.log(cardsHTML);

//put the div in the DOM jest before the wrapper element
cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);
//Bonus, put a delete Button on each card so when you click it the whole card is removed.

//select all buttons
const buttons = document.querySelectorAll('.delete');
//make the delete function
function deleteCard(event) {
 const buttonThatGotClicked = event.currentTarget;
 //buttonThatGotClicked.parentElement.remove();
 buttonThatGotClicked.closest('.playerCard').remove();
}
//loop over them and attach a listner
buttons.forEach((button) => button.addEventListener('click', deleteCard));
console.log(buttons);
