"use strict";

var burgerAnimation = function burgerAnimation() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav-links");
  var navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 5 + 0.5, "s");
      }
    });
    burger.classList.toggle('toggle');
  });
};

var navAnimation = function navAnimation() {
  var sections = document.querySelectorAll('section');
  var bubble = document.querySelector('.bubble');
  var socialdivs = document.querySelector('.socialdivs');
  /*const gradients = [
    "linear-gradient(to left,#B79891,#94716B)",
    "linear-gradient(to left,#757F9A,#D7DDE8)",
    "linear-gradient(to left,#6190E8,#A7BFE8)"
  ];*/

  var options = {
    threshold: 0.7
  };
  var observer = new IntersectionObserver(navCheck, options);

  function navCheck(entries) {
    entries.forEach(function (entry) {
      var className = entry.target.className;
      var activeAnchor = document.querySelector("[data-page=".concat(className, "]"));
      var gradientIndex = entry.target.getAttribute('data-index');
      var coords = activeAnchor.getBoundingClientRect();
      var logo = document.querySelector(".logo");
      var directions = {
        height: coords.height,
        width: coords.width,
        top: coords.top,
        left: coords.left
      };

      if (entry.isIntersecting) {
        bubble.style.setProperty("left", "".concat(directions.left, "px"));
        bubble.style.setProperty("top", "".concat(directions.top, "px"));
        bubble.style.setProperty("width", "".concat(directions.width, "px"));
        bubble.style.setProperty("height", "".concat(directions.height, "px"));
      }

      if (className !== "contact") {
        $(socialdivs).removeClass("socialdivs-active");
      } else {
        $(socialdivs).addClass("socialdivs-active");
      }

      console.log(className);
    });
  }

  sections.forEach(function (section) {
    observer.observe(section);
  });
};

var decisionPicker = function decisionPicker() {
  var optionGood = document.querySelector('.button-good');
  var optionDark = document.querySelector('.button-dark');
  optionGood.addEventListener("click", function () {//toggle 
  });
  optionDark.addEventListener("click", function () {//toggle 
  });
};

burgerAnimation();
navAnimation();
decisionPicker();