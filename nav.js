var navbar = `
<html> <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Par-ISS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <ul class="navbar-nav">
      <li class="nav-item active p-1"><a class="nav-link" href="index.html">Home</a></li>
      <li class="nav-item p-1"><a class="nav-link" href="cibo.html">Cibo</a></li>
      <li class="nav-item p-1"><a class="nav-link" href="casa.html">Casa</a></li>
      <li class="nav-item p-1"><a class="nav-link" href="lavoro.html">Lavoro</a></li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Trasporto
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="trasporto.html">In Francia</a>
          <a class="dropdown-item" href="tr_parigi.html">A Parigi</a>
        </div>
      </li>
      <li class="nav-item p-1"><a class="nav-link" href="trasporto.html">Trasporto</a></li>
      <li class="nav-item p-1"><a class="nav-link" href="Contact.html">Contact</a></li>
    </ul>
    </div>
  </div>
</nav></html>
`
document.body.insertAdjacentHTML("afterbegin", navbar);