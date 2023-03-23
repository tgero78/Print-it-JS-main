const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slide_current = 0
const banner_img = document.getElementsByClassName('banner-img')
const banner_text = document.getElementsByClassName('banner-text')
const dots = document.getElementsByClassName('dots')[0]


document.getElementsByClassName("arrow_left")[0].addEventListener("click", logArrowLeft);
document.getElementsByClassName("arrow_right")[0].addEventListener("click", logArrowRight);


function logArrowLeft() {
	if (slide_current <= 0) {
		slide_current = 3;
		console.log(slide_current);
	} else {
		slide_current = (slide_current - 1);
		console.log(slide_current);
	};
	changeSlide();
}


function logArrowRight() {
	if (slide_current >= 3) {
		slide_current = 0;
		console.log(slide_current);
	} else {
		slide_current = (slide_current + 1);
		console.log(slide_current);
	};
	changeSlide();
}


for (let i = 0; i < slides.length; i++) {
	sinlgeDot = document.createElement('div');
	dots.appendChild(sinlgeDot);
	sinlgeDot.classList.add('dot');
	console.log(sinlgeDot);
}

document.getElementsByClassName("dot")[slide_current].classList.add("dot_selected")

function changeSlide() {
	console.log("change");
	document.getElementsByClassName("dot_selected")[0].classList.remove("dot_selected");
	document.getElementsByClassName("dot")[slide_current].classList.add("dot_selected");
	banner_img[0].src = "./assets/images/slideshow/" + slides[slide_current].image;
	banner_text[0].innerHTML = slides[slide_current].tagLine;
}