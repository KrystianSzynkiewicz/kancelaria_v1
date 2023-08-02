const Btn = document.getElementById("nextSlide");
const Btn2 = document.getElementById("backSlide");

Btn.addEventListener('click', function myFunction() {
  const element = document.getElementById("paralaxSlider");
  if (element.className == "paralax__slider") {
    element.className = "paralax__slider2";
  } else if (element.className == "paralax__slider2") {
    element.className = "paralax__slider3";
  } else if (element.className == "paralax__slider3") {
    element.className = "paralax__slider";
  }

});

Btn2.addEventListener('click', function myFunction() {
  const element = document.getElementById("paralaxSlider");
  if (element.className == "paralax__slider") {
    element.className = "paralax__slider3";
  } else if (element.className == "paralax__slider3") {
    element.className = "paralax__slider2";
  } else if (element.className == "paralax__slider2") {
    element.className = "paralax__slider";
  }

});


function myFunction() {
    const element = document.getElementById("paralaxSlider");
    if (element.className == "paralax__slider") {
      element.className = "paralax__slider2";
    } else {
      element.className = "paralax__slider";
    }
  }

  window.addEventListener('load', 
  setTimeout(myFunction,7000), false);


  