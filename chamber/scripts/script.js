// document.addEventListener("DOMContentLoaded", function() {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
//     const today = new Date();
//     const dayOfWeek = daysOfWeek[today.getDay()];
//     const dayOfMonth = today.getDate();
//     const month = monthsOfYear[today.getMonth()];
//     const year = today.getFullYear();
    
//     const currentDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
//     var dateElement = document.getElementById("currentDate");
//     dateElement.textContent = currentDate;
//   });
// const banner = document.querySelector('.banner');
// if (d.getDay() == 1 || d.getDay() == 2) {
//   banner.style.display = "block";
//   social.classList.toggle("is-active");
//   menu.style.top = "40%";
// }
//     const hamburgerMenu = document.querySelector('.hamburger-menu');
//     const navLinks = document.querySelector('.nav-links');

// hamburgerMenu.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');
const navLogo = document.querySelector('.logo');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 1008 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
}

};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// Showing Banner on Mondays and Tuesdays
const banner = document.querySelector('.banner');
if (d.getDay() == 1 || d.getDay() == 2) {
  banner.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
  // Get the current year
  var currentYear = new Date().getFullYear();
  
  // Update the footer with the current year
  var yearElement = document.getElementById("year");
  yearElement.textContent = currentYear;
});