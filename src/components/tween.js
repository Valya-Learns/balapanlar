import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const tabletWidth = 768;

const toggleTween = () => {
	if (window.innerWidth <= tabletWidth) {
		tweenHeading.scrollTrigger.disable();
		tweenSection.scrollTrigger.disable();
	} else {
		tweenHeading.scrollTrigger.enable();
		tweenSection.scrollTrigger.enable();
	}
}

export { toggleTween }
