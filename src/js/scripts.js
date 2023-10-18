// OPEN MENU
document.getElementById("openMenu").onclick = function () {
  document.getElementById("menu_mobile").style.display = "block";
}
// CLOSE MENU
document.getElementById("closeMenu").onclick = function () {
  document.getElementById("menu_mobile").style.display = "none";
}

// INCREASE AND DECREASE QUANTITY
document.getElementById("dec").onclick = function () {
  document.getElementById("quantity_number").stepDown();
}
document.getElementById("inc").onclick = function () {
  document.getElementById("quantity_number").stepUp();
}

// READ MORE BUTTONS
// FIRST ROW
document.getElementById("myBtn").onclick = function (
) {
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btnText.innerHTML = "-";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "+";
  }
}

// SECOND ROW
document.getElementById("myBtn2").onclick = function (
  ) {
    const moreText = document.getElementById("more2");
    const btnText = document.getElementById("myBtn2");

    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btnText.innerHTML = "-";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "+";
    }
  }

// THIRD ROW
document.getElementById("myBtn3").onclick = function (
  ) {
    const moreText = document.getElementById("more3");
    const btnText = document.getElementById("myBtn3");

    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btnText.innerHTML = "-";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "+";
    }
  }

// ADD TO CART BUTTON
  document.getElementById("addToCart").onclick = function () {
    const element = document.getElementById('cartIcon')
    element.classList.remove('shake'); // reset animation
    void element.offsetWidth; // trigger reflow
    element.classList.add('shake'); // start animation
  }

