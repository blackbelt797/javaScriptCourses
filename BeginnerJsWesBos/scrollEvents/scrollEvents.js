// Scroll Events and
const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
 //console.log(payload[0].intersectionRatio);

 if (payload[0].intersectionRatio === 1) {
  button.disabled = false;
  //stop observing the button
  ob.unobserve(terms.lastElementChild);
 }

 //  if (payload[0].intersectionRatio === 1) {
 //   button.disabled = false;
 //   console.log('Removing Disabled');
 //  } else {
 //   button.disabled = true;
 //  }
}

// This is just a watcher.
const ob = new IntersectionObserver(obCallback, {
 root: terms,
 threshold: 1,
});

ob.observe(terms.lastElementChild);

// ob.observe(watch);

// OLD WAY:
// terms.addEventListener('scroll', function (e) {
//  console.log(e.currentTarget.scrollTo);
//  console.log(e.currentTarget.scrollHeight);
// });

//function scrollToAccept() {
//  if (!terms) {
//   return; // quit this, there isn't that item on the page
//  }
//}
