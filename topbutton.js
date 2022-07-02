// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {window.onload = scrollFunction()};

function scrollFunction() {
  mybutton = document.getElementById("myBtn")

  if (window.pageYOffset > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

