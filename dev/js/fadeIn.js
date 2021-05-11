import { gsap } from "gsap";

export let fadeInTL = gsap.timeline();
fadeInTL.from("#Sky",{alpha:0, duration:1.5})
        