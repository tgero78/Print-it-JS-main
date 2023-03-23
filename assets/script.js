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

let slide_current = 0;
const dots = document.getElementsByClassName("dots");



document.getElementsByClassName("arrow_left")[0].addEventListener("click", logArrowLeft);

function logArrowLeft() {
	console.log("arrow-leftCLICKED");
}

document.getElementsByClassName("arrow_right")[0].addEventListener("click", logArrowRight);

function logArrowRight() {
	console.log("arrow-rightCLICKED");
}
