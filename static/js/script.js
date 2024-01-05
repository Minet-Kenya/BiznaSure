/**
 * Preloader
 */
const preloader = document.querySelector("#preloader");
if (preloader) {
	window.addEventListener("load", () => {
		preloader.remove();
	});
}

/**
 * Back to top button
 */
const backtotop = document.querySelector("#back-to-top");
if (backtotop) {
	const toggleBacktotop = () => {
		if (window.scrollY > 100) {
			backtotop.classList.remove("invisible");
			backtotop.classList.add("visible");
			backtotop.classList.remove("opacity-0");
			backtotop.classList.add("opacity-100");
		} else {
			backtotop.classList.remove("visible");
			backtotop.classList.add("invisible");
			backtotop.classList.remove("opacity-100");
			backtotop.classList.add("opacity-0");
		}
	};

	window.addEventListener("load", toggleBacktotop);
	window.addEventListener("scroll", toggleBacktotop);

	backtotop.addEventListener("click", (e) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});
}

/**
 * Apply .scrolled class to the body as the page is scrolled down
 */
const selectBody = document.querySelector("body");
const selectNavBar = document.querySelector('#navbar');

function toggleScrolled() {
	if (!selectNavBar.classList.contains('fixed-top')) return;
	window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
}

document.addEventListener('scroll', toggleScrolled);
window.addEventListener('load', toggleScrolled);

/**
 * Mobile nav toggle
 */
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
const selectNavMenu = document.getElementById("navmenu");

function mobileNavToogle() {
	document.querySelector('body').classList.toggle('mobile-nav-active');
	mobileNavToggleBtn.classList.toggle('bi-list');
	mobileNavToggleBtn.classList.toggle('bi-x');

	if (selectBody.classList.contains("mobile-nav-active")) {
		selectNavMenu.classList.remove("col-6");
		selectNavMenu.classList.add("col-12");
		// selectNavMenu.classList.add("z-3");
	} else {
		selectNavMenu.classList.add("col-6");
		selectNavMenu.classList.remove("col-12");
	}
}
mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll('#navmenu a').forEach(navmenu => {
	navmenu.addEventListener('click', () => {
		if (document.querySelector('.mobile-nav-active')) {
			mobileNavToogle();
		}
	});
});

/**
 * Automatically update copyright year
 */
async function getCurrentYear() {
	try {
		let response = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC");
		let data = await response.json();

		const currentYear = new Date(data.utc_datetime).getFullYear();
		const selectYear = document.querySelector("#footer .copyright .current-year");

		if (currentYear <= 2023) { return; }
		selectYear.textContent += ` - ${currentYear}`;

	} catch (error) {
		console.error("Error fetching data from WorldTimeAPI:", error);
	}
}
getCurrentYear();

/**
 * Initiate glightbox
 */
const glightbox = GLightbox({
	selector: '.glightbox'
});

/**
 * Animation on scroll function and init
 */
function aosInit() {
	AOS.init({
		duration: 600,
		easing: "ease-in-out",
		once: true,
		mirror: false
	});
}
window.addEventListener("load", aosInit);

/**
 * urlParams
 */
// let urlParams = new URLSearchParams(window.location.search);
