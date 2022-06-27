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
  window.scrollTo(0, 1280);
});

LottieInteractivity.create({
  player:'#toggleLottie',
  mode:"cursor",
  actions: [
      {
          type: "toggle"
      }
]
});