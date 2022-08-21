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


const cards = document.querySelectorAll('.course-card');

cards.forEach((card) => {
	if (card.querySelector('.course-card__list')) {
		const courseList = card.querySelector('.course-card__list');
		const items = courseList.querySelectorAll('.course-card__list-item');
		if (items.length > 1) {
			for (let i = 1; i < items.length; i++) {
				items[i].style.display = 'none';
	}
		}
}})
