import { gsap } from "gsap";

gsap.set("#MoonFolder",{transformOrigin:"center"})

export let rotateInTL = gsap.timeline();
rotateInTL.from("#MoonFolder",{alpha: 0, duration: 3});
       