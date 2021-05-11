import { gsap } from "gsap";

gsap.set("#MoonFolder",{transformOrigin:"center"});


export let moonZoomInTL = gsap.timeline();
moonZoomInTL.fromTo("#MoonFolder",{alpha:0, scale:0.75},{alpha:1, duration:4, scale:14, y:"+=1200", x:"-=100", ease:"none"}, "flying")
            .to("#RocketFolder", {y: "-=400", duration: 2, scale: 0.5}, "flying")
            .to("#RocketFolder", { x: 350, duration: 4}, "flying")
