function mobilecheck() {
    var x = document.getElementById("menu");
    var menu = document.getElementById("mobile");
    va$('.dropdown-toggle').dropdown();
$('#divNewNotifications li').on('click', function() {
    $('#dropdown_title').html($(this).find('a').html());
    }); main = document.getElementsByClassName("centered_top");
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



  