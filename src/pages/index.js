document.addEventListener("scroll", () => {
	let scroll = window.pageYOffset;
	const headerLogo = document.querySelector(".header").querySelector(".logo");

	if (scroll > 0) {
		headerLogo.classList.remove("logo_type_header-animals");
		headerLogo.classList.add("logo_type_header-text");
	} else {
		headerLogo.classList.remove("logo_type_header-text");
		headerLogo.classList.add("logo_type_header-animals");
	}
});
