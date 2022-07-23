const navBar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
  if (this.window.scrollY > 1) {
    navBar.classList.replace('bg-transparent', 'nav-color');
  } else if (this.window.scrollY <= 0) {
    navBar.classList.replace('nav-color', 'bg-transparent')
  }
});

$(document).ready(function () {
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cS-hidden');
    }
  });
});