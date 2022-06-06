const logoContainer = document.querySelector(".logo");
const title = document.querySelector("h1");

  



romain.addEventListener("mousemove", (e) => {
  effect.style.left = e.pageX - 25 + "px";
  effect.style.top = e.pageY - 25 + "px";
});

logoContainer.addEventListener("mouseenter", () => {
  logo.style.transform = "rotateZ(765deg)";
});
logoContainer.addEventListener("mouseleave", () => {
  logo.style.transform = "rotateZ(-675deg)";
});

anime({
  targets: "#svgAnim path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutExpo",
  duration: 5000,
  direction: "alternate",
  loop: true,
});

window.addEventListener("scroll", (e) => {
  // console.log(main.viewportY);
  // if (window.scrollY > 50) {
  //   title.style.transform = "translateZ(2000px)";
  //   title.style.margin = "-100px auto 0 auto";
  //   main.style.margin = "-20rem auto 0 ";
  //   main.style.width = "90%";
  //   navbar.style.opacity = "1";
  // } else {
  //   title.style.margin = "90px 0 0 0";
  //   title.style.transform = "translateZ(0)";
  //   main.style.margin = "-8rem auto 0";
  //   main.style.width = "20%";
  //   navbar.style.opacity = "0";
  // }

  if (window.scrollY >= 630) {
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.width = "90%";
  } else {
    navbar.style.position = "static";
    navbar.style.width = "100%";
  }
});

anime({
  targets: "facade textPresentation",
  translateX: 250,
});
