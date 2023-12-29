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
let headerHeight = selectHeader.offsetHeight;
selectHeader.style.marginTop = -headerHeight + "px";

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
	if (!selectHeader.classList.contains("sticky-top")) return;
	let viewportHeight = window.innerHeight;
	let headerHeight = selectHeader.offsetHeight;
	let scrollLength = viewportHeight - headerHeight;

	if (window.scrollY >= scrollLength) {
		selectBody.classList.add("scrolled");
		selectNav.classList.remove("text-uppercase");

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
		selectNav.classList.add("text-uppercase");

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

function mobileNavToogle() {
	document.querySelector('body').classList.toggle('mobile-nav-active');
	mobileNavToggleBtn.classList.toggle('bi-list');
	mobileNavToggleBtn.classList.toggle('bi-x');
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
let urlParams = new URLSearchParams(window.location.search);

