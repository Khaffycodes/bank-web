//mobile menu
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hlink = document.querySelectorAll('#hlink');
const faSolid = document.querySelector('.fa-solid');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  faSolid.classList.toggle('fa-xmark');

  hlink.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      faSolid.classList.toggle('fa-xmark');
    });
  });
});

//testimonials
const userTexts = document.getElementsByClassName('user-text');
const userPics = document.getElementsByClassName('user-pic');

function showReview() {
  for (userPic of userPics) {
    userPic.classList.remove('active-pic');
  }

  for (userText of userTexts) {
    userText.classList.remove('active-text');
  }

  let i = Array.from(userPics).indexOf(event.target);

  userPics[i].classList.add('active-pic');
  userTexts[i].classList.add('active-text');
}
