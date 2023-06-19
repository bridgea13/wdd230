

var date = new Date();
// var day = new weekDay();  

var yearElement = document.getElementById("year");
yearElement.textContent = date.getFullYear();
  
document.querySelector("#lastModified").textContent=document.lastModified;
document.querySelector(".current-date").textContent=date.toLocaleDateString("en-GB",{ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

// const banner = document.querySelector('.banner');
// if(weekday() == "Monday" || weekday == "Tuesday");
//   banner.getElementsByClassName.display = "block";
  
// var dayOfWeek = date.getDay();
// var weekday = new Array(7);
// weekday[0]=  "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var day = weekday[now.getDay()];
// const banner = document.querySelector('.banner');
// if (day.weekday() == 1 || day.weekday() == 3) {
//   banner.style.display = "block";
//   banner.classList.toggle("is-active");
//   }



const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');


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





// var filename = 'image-' + date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + '.jpg';

// document.getElementById('banner').src = '/path/to/' + filename;

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