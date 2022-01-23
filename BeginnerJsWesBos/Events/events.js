// Text Pastry extension

const butts = document.querySelector('.butts');
const coolbutton = document.querySelector('.cool');

const buyButtons = document.querySelectorAll('button.buy');

function handleClick() {
 console.log('it got clicked');
}

butts.addEventListener('click', handleClick);

coolbutton.addEventListener('click', handleClick);
//butts.removeEventListener('click', handleClick);  // This is unbinding

//listen on multiple items

function buyItem() {
 console.log('Buying Item');
}

console.log(buyButtons);
console.dir(butts);

// buyButtons.addEventListener('click', buyItem);

//When you run this it will run on all 10 buttons
buyButtons.forEach(function (buyButton) {
 console.log('Binding the buy button');
 buyButton.addEventListener('click', buyItem);
});
