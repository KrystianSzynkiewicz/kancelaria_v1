const Btn = document.getElementById("nextSlide");

Btn.addEventListener('click', function myFunction() {
  const element = document.getElementById("paralaxSlider");
  if (element.className == "paralax__slider") {
    element.className = "paralax__slider2";
  } else {
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
  setTimeout(myFunction,4000), false);