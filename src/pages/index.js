import { PopupWithCourse } from "../components/PopupWithCourse.js";
import {PopupWithPartner} from '../components/PopupWithPartner.js'

document.addEventListener("scroll", () => {
	let scroll = window.pageYOffset;
	const headerLogo = document.querySelector(".header").querySelector(".logo");
	const introSection = document.querySelector(".intro");

	if (scroll > 0) {
		headerLogo.classList.remove("logo_type_header-animals");
		headerLogo.classList.add("logo_type_header-text");
		introSection.style.paddingTop = "48px"
	} else {
		headerLogo.classList.remove("logo_type_header-text");
		headerLogo.classList.add("logo_type_header-animals");
		introSection.style.paddingTop = "0"
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

const popup = new PopupWithCourse('.popup_type_course');

const courseElemts = document.querySelectorAll('.course-card');
courseElemts.forEach((item => {
	item.addEventListener('mousedown', (evt) => {
		console.log(evt.target);
		popup.open(item.cloneNode(true).innerHTML);
	})
}))

// const node = courseElem.cloneNode(true).innerHTML
// console.log(node)
// popup.open(node)


const popupPartner = new PopupWithPartner('.popup_type_partner');

const partners = document.querySelectorAll('.partners__partner-item');
partners.forEach(partner => {
	partner.addEventListener('click', (evt) => {
		popupPartner.open(partner.cloneNode(true));
	})
});
