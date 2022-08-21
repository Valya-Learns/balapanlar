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


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".principles__card");

import "./index.css";

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".principles",
//     pin: true,
//     scrub: 3,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=100%",
// 		markers: true,
//   }
// });

gsap.to(".principles", {
	xPercent: -66.66666,
	ease: "none",
	scrollTrigger: {
		trigger: ".principles",
		pin: true,
		scrub: 2,
		snap: 0.5,
		//base vertical scrolling on how wide the container is so it feels more natural.
		end: "+=100%",
		markers: true,
	},
});
