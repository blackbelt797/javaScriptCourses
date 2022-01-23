const gregg = document.querySelector('.gregg');

gregg.addEventListener('click', function (event) {
 const shouldChangePage = confirm('THe website may be malicious!, do you wish to proceed?');
 //this is one way of using prevent default

 //  if (shouldChangePage) {
 //   window.location = event.currentTarget.href;
 //  }
 // });

 // If you put the if statement to say if Not ShouldChangePage then..... run the preventDefault
 if (!shouldChangePage) {
  event.preventDefault(); // this will stop the link from opening
 }
});

const signupForm = document.querySelector('[name="signup"');

signupForm.addEventListener('submit', function (event) {
 const name = event.currentTarget.name.value;
 if (name.includes('chad')) {
  alert('Sorry bro');
  event.preventDefault();
 }
});

//This a great way to test or check to see everything it connected
// signupForm.addEventListener('submit', function (event) {
//  event.preventDefault();
//  console.log(event.currentTarget.name);
//  console.log(event.currentTarget.email.value);
//  console.log(event.currentTarget.agree.checked);
// });

function logEvent(event) {
 console.log(event.type);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
 if (event.type === 'click' || event.key === 'Enter') {
  console.log('You clicked the photo');
 }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);

//How do you only listen on the enter key??
