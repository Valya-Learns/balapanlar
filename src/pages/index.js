import { PopupWithCourse } from "../components/PopupWithCourse.js";

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

const popup = new PopupWithCourse('.popup_type_course')

const courseElemts = document.querySelectorAll('.course-card');
courseElemts.forEach((item => {
	item.addEventListener('mousedown', (evt) => {
		console.log(evt.target)
		popup.open(item.cloneNode(true).innerHTML)
	})
}))

// const node = courseElem.cloneNode(true).innerHTML
// console.log(node)
// popup.open(node)
>>>>>>> b115ece8b6cfde6d9c3b93c754ff6bdeea9bb3cd
