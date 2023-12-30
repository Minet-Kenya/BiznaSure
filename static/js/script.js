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
		} else {
			backtotop.classList.remove("visible");
			backtotop.classList.add("invisible");
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
 * Move header up to the hero section
 */
const selectHeader = document.querySelector("#header");
let headerHeight = selectHeader.offsetHeight + 24;
selectHeader.style.marginTop = -headerHeight + "px";
let distance = window.innerHeight - selectHeader.getBoundingClientRect().bottom;

window.addEventListener("resize", () => {
	headerHeight = selectHeader.offsetHeight + 24;
	selectHeader.style.marginTop = -headerHeight + "px";

	distance = window.innerHeight - selectHeader.getBoundingClientRect().bottom;
});

/**
 * Apply .scrolled class to the body as the page is scrolled down
 */
const selectBody = document.querySelector("body");
const selectNav = document.querySelector("#navmenu ul");
const selectToggle = document.querySelector("#navmenu .mobile-nav-toggle");

const selectSlogan = document.querySelector("#header .slogan");
const selectLogo = document.querySelector("#header .header-logo");

const selectMinet = document.querySelector(".minet");
const selectEndorseWhite = document.querySelector(".aon-white");

function toggleScrolled() {
	let viewportHeight = window.innerHeight;
	let headerHeight = selectHeader.offsetHeight;
	let scrollLength = viewportHeight - headerHeight;

	if (window.scrollY >= scrollLength) {
		selectBody.classList.add("scrolled");

		selectToggle.classList.remove("text-white");
		selectToggle.classList.add("text-secondary");

		selectLogo.classList.remove("d-none");
		if (!selectSlogan.classList.contains("d-none")) {
			selectSlogan.classList.add("d-none");
		}

		selectMinet.classList.remove("d-none");
		if (!selectEndorseWhite.classList.contains("d-none")) {
			selectEndorseWhite.classList.add("d-none");
		}
	} else {
		selectBody.classList.remove("scrolled");

		selectToggle.classList.add("text-white");
		selectToggle.classList.remove("text-secondary");

		if (!selectLogo.classList.contains("d-none")) {
			selectLogo.classList.add("d-none");
		}
		selectSlogan.classList.remove("d-none");

		if (!selectMinet.classList.contains("d-none")) {
			selectMinet.classList.add("d-none");
		}
		selectEndorseWhite.classList.remove("d-none");
	}
}
document.addEventListener("scroll", toggleScrolled);
window.addEventListener("load", toggleScrolled);

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
		let response = await fetch("http://worldtimeapi.org/api/timezone/Etc/UTC");
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
