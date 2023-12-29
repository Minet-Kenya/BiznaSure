/**
 * Back to top button
 */
const backtotop = document.querySelector("#back-to-top");
if (backtotop) {
	const toggleBacktotop = () => {
		if (window.scrollY > 100) {
			backtotop.classList.add("active");
		} else {
			backtotop.classList.remove("active");
		}
	};
	window.addEventListener("load", toggleBacktotop);
	window.addEventListener("scroll", toggleBacktotop);
}

/**
 * Preloader
 */
const preloader = document.querySelector('#preloader');
if (preloader) {
	window.addEventListener('load', () => {
		preloader.remove();
	});
}

/**
 * urlParams
 */
let urlParams = new URLSearchParams(window.location.search);

/**
 * Animation on scroll function and init
 */
function aosInit() {
	AOS.init({
		duration: 600,
		easing: 'ease-in-out',
		once: true,
		mirror: false
	});
}
window.addEventListener('load', aosInit);