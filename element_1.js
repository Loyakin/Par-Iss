var navbar = `
<br>
<div class="shadow p-3 mb-5 bg-white rounded row"> 
          <div class="row">
            <div class="col">
              <img src=`
var navbar2 = ` class="float-left mr-5">`
var navbar3 = `</div>
          </div>
      </div>
`
var text_1 = document.currentScript.getAttribute('one'); //1
var text_2 = document.currentScript.getAttribute('two'); //2

document.getElementById("content").insertAdjacentHTML("beforeEnd", navbar + text_1 + navbar2 + text_2 + navbar3);

