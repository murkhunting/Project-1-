"use strict";

class User {
  constructor(name, planet, email, password) {
    this.name = name;
    this.planet = planet;
    this.email = email;
    this.password = password;
  }
}

function toggleMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
