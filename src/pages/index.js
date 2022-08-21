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
