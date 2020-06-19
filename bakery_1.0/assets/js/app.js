var burger = document.querySelector(".burger");
var nav = document.querySelector(".nav");

burger.addEventListener('click', function() {

	nav.classList.toggle('nav_active');
	burger.classList.toggle('burger_active');
});