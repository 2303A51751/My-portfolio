var typed = new Typed(".multiple-text", {
  strings: ["Java Developer", "Python Programmer", "Web Developer", "ML Enthusiast"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".Projects-section").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".AboutMe").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".Skills-section").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function lumina() {
  open("https://2303a51751.github.io/Lumina-luxe-rides/");
}

function resume() {
  open(
    "https://drive.google.com/file/d/15y3X9KncxgYFVz9_sgOjSpNcRSo_pbIg/view?usp=drivesdk"
  );
}
