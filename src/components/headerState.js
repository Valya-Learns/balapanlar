const header = document.querySelector(".header");
const headerLogo = header.querySelector(".logo");
const firstSection = document.getElementsByTagName("section")[0];
const compensatePadding = "48px";
const initialPadding = "0";
const burgerWidth = 1110;

function setAnimalLogo() {
	headerLogo.classList.remove("logo_type_header-text");
	headerLogo.classList.add("logo_type_header-animals");
}

function setTextLogo() {
	headerLogo.classList.remove("logo_type_header-animals");
	headerLogo.classList.add("logo_type_header-text");
}

function toggleHeaderState() {
	const scroll = window.pageYOffset;
	if (scroll > 0) {
		setTextLogo();
		firstSection.style.paddingTop = compensatePadding;
	}
	if (scroll === 0) {
		setAnimalLogo();
		firstSection.style.paddingTop = initialPadding;
	}
}

function checkScreenWidth(popup) {
	const screenWidth = window.innerWidth;
	if (screenWidth > burgerWidth) {
		toggleHeaderState();
		document.addEventListener('scroll', toggleHeaderState);
		setAnimalLogo();
		popup.close();
	}
	else {
		document.removeEventListener('scroll', toggleHeaderState);
		setTextLogo();
		firstSection.style.paddingTop = initialPadding;
	}
}

export { checkScreenWidth }
