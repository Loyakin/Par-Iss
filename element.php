var tag = document.createElement("p");
$(document).ready(function () {
  yourFunction();
});
function yourFunction(){
  var navbar = `"Tutorix is the best e-learning platform"
  `
  var element = document.getElementById("content").insertAdjacentHTML('beforeend', '<div id="idChild"> content html </div>');;
  tag.appendChild(navbar);
}
