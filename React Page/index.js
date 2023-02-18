// Selecting the book pages
const leftPage = document.querySelector('.left-page');
const rightPage = document.querySelector('.right-page');

// Selecting the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Initializing the page number to 1
let pageNumber = 1;

// Adding click event listener to book pages
leftPage.addEventListener('click', () => {
  if (pageNumber < 2) {
    leftPage.classList.add('page-turned');
    rightPage.classList.remove('page-turned');
    pageNumber++;
  }
});

rightPage.addEventListener('click', () => {
  if (pageNumber > 1) {
    leftPage.classList.remove('page-turned');
    rightPage.classList.add('page-turned');
    pageNumber--;
  }
});
