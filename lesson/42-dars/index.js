let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (parseInt(window.pageYOffset) >= parseInt(nav.offsetHeight)) {
    nav.style.position = "sticky";
    nav.style.top = "0px";
    nav.style.transition = "1s";
    nav.style.backgroundColor = "red";
  } else {
    nav.style.backgroundColor = "burlywood";
    nav.style.position = "static";
  }
});
