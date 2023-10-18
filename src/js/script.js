function readFirst() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btnText.innerHTML = "-";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "+";
  }
}
function readSecond() {
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btnText.innerHTML = "-";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "+";
  }
}
function readThird() {
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btnText.innerHTML = "-";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "+";
  }
}
function addToCart(){
  const element = document.getElementById('cartIcon')

// element.classList.remove('classname'); // reset animation
// void element.offsetWidth; // trigger reflow
// element.classList.add('classname'); // start animation
}

function increase(){
  var input = document.getElementById('quantity_number');
  
  input.value = parseInt(input.value) + 1;
}
function decrease(){
  var input = document.getElementById('quantity_number');

  if(input.value > 1){
    input.value = parseInt(input.value) - 1;}
}

function openMenu(){
  var menu = document.getElementById('menu_mobile');
  menu.style.display = "block";
}
function closeMenu(){
  var menu = document.getElementById('menu_mobile');
  menu.style.display = "none";
}
