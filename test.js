function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var mobileOpenButton = document.getElementById("mobile-open-button");
  if (mobileOpenButton) {
    mobileOpenButton.addEventListener("click", function () {
      var nav = document.querySelector('nav[aria-label="main"]');
      if (nav) {
        nav.classList.toggle("hidden");
      }
    });
  } else {
    console.error("Element with ID 'mobile-open-button' not found");
  }
});
