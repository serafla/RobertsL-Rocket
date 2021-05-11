import { gsap } from "gsap";

export let slideInTL = gsap.timeline();
slideInTL.from("#DarkGrass",{translateX: 1500, duration: 2, ease: "back.out(1.7)"})
        .from("#LightGrass",{translateX: -1500, stagger:0.25, duration:2, ease: "back.out(1.7)"},"-=2")
        .from("#BGCow",{translateY: 500, duration:1, ease: "back.out(1.7)"})
        .from("#Laying-Cow",{translateY: 500, duration:1.5, ease: "back.out(1.7)"})
        .from("#ForegroundGrass",{alpha: 0, translateX: 100, duration: 2}, "grass")
        .from("#LightGrass2",{alpha: 0, translateX: 100, duration: 2, y: 100}, "grass")
        .from("#LightGrass3",{alpha: 0, translateX: -100, duration: 2, y: 100}, "grass")
        .from("#LightGrass1",{alpha: 0, translateX: 100, duration: 2, y: 100}, "grass")
        .from("#DarkGrass1",{alpha: 0, translateX: -100, duration: 2, y: 100}, "grass")
        .from("#DarkGrass2",{alpha: 0, translateX: 100, duration: 2, y: 100}, "grass")
        .from("#Cloud1",{alpha:0, duration:1.5},"-=1")
        .from("#Cloud2",{alpha:0, duration:1.5}, "-=1")
        .from("#BottomLeftCloud",{alpha:0, duration:1.5}, "-=1")
        .from("#BottomRightCloud",{alpha:0, duration:1.5}, "-=1")
        .from("#CircleStarsFolder", {alpha:0, duration: 1} )