const logoContainer = document.querySelector(".logo");
const title = document.querySelector("h1");
let positionNavBar = main.offsetTop;

function sticky() {
  let posCurseur = this.pageYOffset;
  if (positionNavBar - posCurseur < 1) {
    navbar.style.position = "fixed";
    navbar.style.top = 0;
    navbar.style.borderRadius = 0;
    navbar.style.width = "90%";
  } else {
    navbar.style.position = "relative";
    navbar.style.width = "100%";
  }
}

window.addEventListener("scroll", sticky);

anime({
  targets: "#svgAnim path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutExpo",
  duration: 5000,
  direction: "alternate",
  loop: true,
});

const navigationHeight = navbar.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + 100 + "px"
);

scrollDown.addEventListener("click", () => {
  window.scrollTo(0, 650);
});

function toggleMenu() {
  const navbar = document.getElementById("navbar");
  const header = document.querySelector("header");
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("show-nav");
    if (burger.classList.contains("show-nav")) {
      header.style.height = "0";
    }
  });
}
toggleMenu();
