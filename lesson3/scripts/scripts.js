var date = new Date();
  

var yearElement = document.getElementById("year");
yearElement.textContent = date.getFullYear();
  
document.querySelector("#lastModified").textContent=document.lastModified;
document.querySelector(".current-date").textContent=date.toLocaleDateString("en-GB",{ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });