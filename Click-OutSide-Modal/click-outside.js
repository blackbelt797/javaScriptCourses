// Modal

const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

//Here is a function that will handle the card button click
// First you "grab" the event.target, One thing I have learned is when you say "grab... somthing " it means
// to make a variable and set it to what you are grabbing.
function handleCardButtonClick(event) {
 const button = event.currentTarget;
 const card = button.closest('.card');
 //Grab the image src
 const imgSrc = card.querySelector('img').src;
 const desc = card.dataset.description;
 const name = card.querySelector('h2').textContent;
 //populate the modal with th new info

 modalInner.innerHTML = `
 <img width="400" height="400" src="${imgSrc.replace('200', '400')}" alt="${name}"/>
 <p>${desc}</p>`;

 //Show modal
 modalOuter.classList.add('open');
}

cardButtons.forEach((button) => button.addEventListener('click', handleCardButtonClick));

function closeModal() {
 modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (event) {
 const isOutside = !event.target.closest('.modal-inner');
 if (isOutside) {
  closeModal();
 }
});

window.addEventListener('keydown', (event) => {
 if (event.key === 'Escape') closeModal();
});
