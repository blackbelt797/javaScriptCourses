//The window is the global scope its where all the global variables are stored
// innerwidth gives you the current width of the browser window
//the document is everything on the page and you can access it by using document 


//const p = document.querySelector('p');
//console.log(p);

//const imgs = document.querySelector('.item img');// Using querySelector will only grab the first match
						// Using querySelectorAll will grab all the elements that match
//const item2 = document.querySelector('.item2');

//const item2Image = item2.querySelector('img');

//console.log(item2Image);						 
        // A node list is simailar to an array as it has a list of items but there are differences between arrays and node lists


//**** Element Properties and Methods *****/
const item2 = document.querySelector('.item2');
const item2Image = document.querySelector('img');
const heading = document.querySelector('h2');

//console.log(heading.textContent); //This will show all the text content
//console.log(heading.innerText); // this shows the actual text

// The Code above is used as a getter 

// heading.textContent = "Hey Check this out!!";

// console.log(heading.textContent);
// console.log(heading.innerText);

//Properties 
// .innnerText is aware of styling while .textContent gives you all of it 

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);  

//const burritoList = document.querySelector('.burrito'); 
//console.log(burritoList.textContent);

//burritoList.textContent = `${burritoList.textContent} 🌯`; // This gives you the ability to add text or items to the end of it. 


//burritoList.insertAdjacentText('afterbegin', '🌯');

// Everything is a node where as an element has opening and closing tags


//Classes!!! 
// When you select an element there is a class list attribute on them and on that there are methods for getting or removing thoes classes 


const pic = document.querySelector('.nice');

console.log(pic.classList);