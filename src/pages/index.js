import { PopupWithCourse } from "../components/PopupWithCourse.js";
import { PopupWithPartner } from '../components/PopupWithPartner.js';
import { PopupWithBurger } from "../components/PopupWithBurger.js";

const headerLogo = document.querySelector(".header").querySelector(".logo");
const introSection = document.querySelector(".intro");
const popupHeader = new PopupWithBurger('.popup_type_header');

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
	if (scroll === 1) {
		setTextLogo();
		introSection.style.paddingTop = "48px";
	}
	if (scroll === 0) {
		setAnimalLogo();
		introSection.style.paddingTop = "0";
	}
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth)

popupHeader.burgerButton.addEventListener('mousedown', popupHeader.toggleBurgerMenu)

function checkScreenWidth() {
	const screenWidth = window.innerWidth;
	if (screenWidth > 744) {
		document.addEventListener('scroll', toggleHeaderState);
		setAnimalLogo();
		popupHeader.close();
	}
	else {
		document.removeEventListener('scroll', toggleHeaderState);
		setTextLogo();
		popupHeader.deactivateBurgerButton();
	}
}

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
