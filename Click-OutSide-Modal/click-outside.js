// Modal

const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick(event) {
 const button = event.Target;
 const card = button.closest('.card');
 //Grab the image src
 const imgSrc = card.querySelector('.img').src;
 const desc = card.dataset.description;
 console.log(desc);
}

cardButtons.forEach((button) => button.addEventListener('click', handleCardButtonClick));
