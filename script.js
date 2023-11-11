let a = parseFloat(document.querySelector(".p1").innerText);
let b = parseFloat(document.querySelector(".p2").innerText);
let c = parseFloat(document.querySelector(".p3").innerText);
t = a + b + c;
let total = document.querySelector(".tot");
total.innerText = t;

let box = document.querySelector(".b1");
document.querySelector(".del1").onclick = () => {
  if (b != 0 && c != 0) {
    t = b + c;
  } else if (c == 0) {
    t = b;
  } else {
    t = c;
  }
  total.innerText = t;
  a = 0;
  box.classList.toggle("active");
  if (t == 0) {
    document.querySelector(".total").innerText = "No item added in cart";
  }
};

let box1 = document.querySelector(".b2");
document.querySelector(".del2").onclick = () => {
  if (a != 0 && c != 0) {
    t = a + c;
  } else if (c == 0) {
    t = a;
  } else {
    t = c;
  }
  total.innerText = t;
  b = 0;
  box1.classList.toggle("active");
  if (t == 0) {
    document.querySelector(".total").innerText = "No item added in cart";
  }
};

let box2 = document.querySelector(".b3");
document.querySelector(".del3").onclick = () => {
  if (a != 0 && b != 0) {
    t = a + b;
  } else if (a == 0) {
    t = b;
  } else if (b == 0) {
    t = a;
  } else {
    t = 0;
  }
  total.innerText = t;
  c = 0;
  box2.classList.toggle("active");
  if (t == 0) {
    document.querySelector(".total").innerText = "No item added in cart";
  }
};

let box4 = document.querySelector(".b4");
document.querySelector(".del4").onclick = () => {
  t = a + b + c;
  total.innerText = t;
  box4.classList.toggle("active");
};

let box3 = document.querySelector(".b4");
document.querySelector(".crt1").onclick = () => {
  box3.classList.toggle("active");
  let d = parseFloat(document.querySelector(".p4").innerText);
  t = a + b + c + d;
  total.innerText = t;
  alert("Added successfully");
};

let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");

  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");

  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

function myFunction() {
  alert("Order placed successfully");
}
