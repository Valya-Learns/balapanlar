import { PopupWithCourse } from "../components/PopupWithCourse.js";
import { PopupWithPartner } from "../components/PopupWithPartner.js";
import { PopupWithBurger } from "../components/PopupWithBurger.js";
import { checkScreenWidth } from "../components/headerState.js";

const popupHeader = new PopupWithBurger(".popup_type_header");

checkScreenWidth(popupHeader);

window.addEventListener("resize", () => checkScreenWidth(popupHeader));

popupHeader.burgerButton.addEventListener(
	"mousedown",
	popupHeader.toggleBurgerMenu
);

const cards = document.querySelectorAll(".course-card");

cards.forEach((card) => {
	if (card.querySelector(".course-card__list")) {
		const courseList = card.querySelector(".course-card__list");
		const items = courseList.querySelectorAll(".course-card__list-item");
		if (items.length > 1) {
			for (let i = 1; i < items.length; i++) {
				items[i].style.display = "none";
			}
		}
	}
});

const popup = new PopupWithCourse(".popup_type_course");

document.querySelectorAll(".course-card__popup-button").forEach((btn) => {
	btn.addEventListener("mousedown", () => {
		popup.open(btn.closest(".course-card").cloneNode(true).innerHTML);
	});
});

const popupPartner = new PopupWithPartner(".popup_type_partner");

const partners = document.querySelectorAll(".partners__partner-item");
partners.forEach((partner) => {
	partner.addEventListener("click", (evt) => {
		popupPartner.open(partner.cloneNode(true));
	});
});

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "./index.css";

const elem = document.querySelector(".principles");

const tweenSection = gsap.to(".principles", {
	xPercent: -66.66666,
	ease: "none",
	scrollTrigger: {
		trigger: ".principles",
		pin: true,
		start: "top top",
		scrub: 1,
		snap: 0.5,
		end: () => `+=${elem.offsetHeight}`,
	},
});

const tweenHeading = gsap.to(".principles__heading", {
	xPercent: 66.66666,
	ease: "none",
	scrollTrigger: {
		trigger: ".principles",
		start: "top top",
		scrub: 1,
		snap: 0.5,
		end: () => `+=${elem.offsetHeight}`,
	},
});

window.addEventListener("resize", () => {
	if (window.innerWidth <= 992) {
		tweenHeading.scrollTrigger.disable();
		tweenSection.scrollTrigger.disable();
	} else {
		tweenHeading.scrollTrigger.enable();
		tweenSection.scrollTrigger.enable();
	}
});
