import { gsap } from "../../node_modules/gsap/gsap-core.js";
import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".principles__card");

gsap.to(sections, {
	xPercent: -100*(sections.length-1),
	ease: "none",
	ScrollTrigger:{
		trigger:".principles__card",
		pin:true,
		scrub:1,
		snap:1/(sections.length-1),
		end: () => "+=" +
		document.querySelector('.principles').offsetWidth
	}
})
