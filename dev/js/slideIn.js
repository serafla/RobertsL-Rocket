import { gsap } from "gsap";

export let slideInTL = gsap.timeline();
slideInTL.from("#DarkGrass",{translateX: 1500, duration: 1.5, ease: "back.out(1.7)"})
        .from("#LightGrass",{translateX: -1500, stagger:0.25, duration:1.5, ease: "back.out(1.7)"},"-=2")
        .from("#BGCow",{translateY: 500, duration:1, ease: "back.out(1.7)"})
        .from("#Laying-Cow",{translateY: 500, duration:1.5, ease: "back.out(1.7)"});