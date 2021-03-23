function mobilecheck() {
    var x = document.getElementById("menu");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
  };