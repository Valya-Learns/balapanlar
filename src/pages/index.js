document.addEventListener("scroll", () => {
	let scroll = window.pageYOffset;
	const headerLogo = document.querySelector(".header").querySelector(".logo");
	const introSection = document.querySelector(".intro");

	if (scroll > 0) {
		headerLogo.classList.remove("logo_type_header-animals");
		headerLogo.classList.add("logo_type_header-text");
		introSection.style.paddingTop = "48px";
	} else {
		headerLogo.classList.remove("logo_type_header-text");
		headerLogo.classList.add("logo_type_header-animals");
		introSection.style.paddingTop = "0";
	}
});

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".principles__card");

import "./index.css";

const elem = document.querySelector(".principles");

gsap.to(".principles", {
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

const header = document.querySelector(".header");

gsap.to(".principles__heading", {
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

function addPositionFixed() {
	header.classList.add("principles__heading_fixed");
}

function removePositionFixed() {
	header.classList.remove("principles__heading_fixed");
}
