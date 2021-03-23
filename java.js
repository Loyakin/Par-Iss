function mobilecheck() {
    var x = document.getElementById("menu");
    if (navigator.userAgent.match(/Android/i)) {
        x.style.display = "block";
      } else {
        x.style.display = "block";
        x.textContent += navigator.userAgent;
      }
  };