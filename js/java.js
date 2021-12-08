console.log('carousel loaded')

/*gallory*/

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}
/* dorpdown*//*
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/

var modal = document.getElementById('myModal');

var btn = document.getElementById('myButton');

var span = document.getElementsByClassName('close')[0];

btn.onclick = function (){
  modal.style.display = "block";
}

span.onclick = function(){
  modal.style.display = "none";
}
window.onclick = function(){
  if (event.target == modal){
    modal.style.display = "none";
  }
}
