function toggleHeader() {
	let scroll = window.pageYOffset;
	const headerLogo = document.querySelector(".header").querySelector(".logo");
		if (scroll > 0) {
			headerLogo.classList.remove("logo_type_header-animals");
			headerLogo.classList.add("logo_type_header-text");
		} else {
			headerLogo.classList.remove("logo_type_header-text");
			headerLogo.classList.add("logo_type_header-animals");
		}
}

const burgerButton = document.querySelector('.burger-button');
const burgerButtonElements = burgerButton.querySelectorAll(".burger-button__line-element");

window.addEventListener("resize", () => {
	const pageWidth = document.documentElement.scrollWidth
	if (pageWidth > 1150) {
		document.addEventListener("scroll", toggleHeader);
	}
	else {
		document.removeEventListener("scroll", toggleHeader);
	}
});

// function enableActiveBurgerButton() {
// 	element.classList.add("burger-button__line-element_active");
// }

// function disableActiveBurgerButton() {
// 	element.classList.remove("burger-button__line-element_active");
// }

function toggleBurgerButton() {
	burgerButtonElements.forEach(function(element) {
		if (!element.classList.contains("burger-button__line-element_active")) {
			element.classList.add("burger-button__line-element_active");
		} else {
			element.classList.remove("burger-button__line-element_active");
		}
	});
}

burgerButton.addEventListener('mousedown', toggleBurgerButton)
