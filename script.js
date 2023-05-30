
document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    var currentYear = new Date().getFullYear();
    
    // Update the footer with the current year
    var yearElement = document.getElementById("year");
    yearElement.textContent = currentYear;
  });

  var currentYear = new Date().getFullYear();
  
    var currentYearElement = document.querySelector("#currentYear");
    currentYearElement.textContent = currentYear;


// const footerText = document.getElementById('copyright');
// const currentYear = new Date().getFullYear();
// const lastUpdated = new Date().toLocaleDateString();
// footerText.textContent = `© ${currentYear} My