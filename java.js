


function mobilecheck() {
    var x = document.getElementById("menu");
    var menu = document.getElementById("mobile");
    var main = document.getElementsByClassName("centered_top");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        x.style.display = "none";
        menu.style.display = "block";
        main.style.fontSize = "3vw"

      } else {
        x.style.display = "block";
        menu.style.display = "none";
        for (var i = 0; i < x.length; i++) {
            main[i].style.fontSize="1vw";
        }
      }
  };

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var btnText2 = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.style.display = "inline"; 
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.style.display = "none"; 
      moreText.style.display = "inline";
    }
  }


  function showCasa() {
    var casa = document.getElementById("Casa");
    var fuori = document.getElementById("Fuori");
    var online = document.getElementById("Online");
    var Gastronomia = document.getElementById("Gastronomia");
  
    casa.style.display = "inline";
    fuori.style.display = "none";
    online.style.display = "none";
    Gastronomia.style.display = "none";
  }

  function showFuori() {
    var casa = document.getElementById("Casa");
    var fuori = document.getElementById("Fuori");
    var online = document.getElementById("Online");
    var Gastronomia = document.getElementById("Gastronomia");
  
    casa.style.display = "none";
    fuori.style.display = "inline";
    online.style.display = "none";
    Gastronomia.style.display = "none";
  }

  function showOnline() {
    var casa = document.getElementById("Casa");
    var fuori = document.getElementById("Fuori");
    var online = document.getElementById("Online");
    var Gastronomia = document.getElementById("Gastronomia");
  
    casa.style.display = "none";
    fuori.style.display = "none";
    online.style.display = "inline";
    Gastronomia.style.display = "none";
  }

  function showGastronomia() {
    var casa = document.getElementById("Casa");
    var fuori = document.getElementById("Fuori");
    var online = document.getElementById("Online");
    var Gastronomia = document.getElementById("Gastronomia");
  
    casa.style.display = "none";
    fuori.style.display = "none";
    online.style.display = "none";
    Gastronomia.style.display = "inline";
  }