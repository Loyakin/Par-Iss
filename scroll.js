const scrollElements = document.getElementsByClassName("js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    (elementTop-10) <=
    (window.innerHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  for(var i = 0; i < scrollElements.length; i++) 
  {
    if (elementInView(scrollElements[i], 1.25)) 
      {displayScrollElement(scrollElements[i]);} 
    else if (elementOutofView(scrollElements[i])) 
      {hideScrollElement(scrollElements[i])}
  }
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});