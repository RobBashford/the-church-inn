"use strict";

const logoCol = document.querySelector(".logo-col");

const toggleMobileMenu = function (menu) {
  menu.classList.toggle("open");
  logoCol.classList.toggle("hidden");
};
