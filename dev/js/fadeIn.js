import { gsap } from "gsap";

export let fadeInTL = gsap.timeline();
fadeInTL.from("#Sky",{alpha:0, duration:1.5})
        .from("#Cloud1",{alpha:0, duration:1.5, translateY: 1500, ease: "elastic.out (1, 0.3)" },"-=1")
        .from("#Cloud2",{alpha:0, duration:1.5, translateY: 1500, ease: "elastic.out (1, 0.3)"}, "-=1")
        .from("#BottomLeftCloud",{alpha:0, duration:1.5, translateY: 1500, ease: "elastic.out (1, 0.3)"}, "-=1")
        .from("#BottomRightCloud",{alpha:0, duration:1.5, translateY: 1500, ease: "elastic.out (1, 0.3)"}, "-=1")