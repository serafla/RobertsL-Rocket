import { gsap } from "gsap";

export let fadeInTL = gsap.timeline();
fadeInTL.from("#Cloud1",{alpha:0, duration:1, translateY: 1500},"-=2")
        .from("#Cloud2",{alpha:0, duration:1, translateY: 1500})
        .from("#BottomLeftCloud",{alpha:0, duration:1, translateY: 1500})
        .from("#BottomRightCloud",{alpha:0, duration:1, translateY: 1500})