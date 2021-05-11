import { gsap } from "gsap";

gsap.set("#MoonFolder",{transformOrigin:"center"})
gsap.set("#Laying-Cow",{transformOrigin:"center"})

export let endingTL = gsap.timeline();


endingTL.to("#MoonFolder",{rotate: 360, scale: 3, duration:4, y: 400, x: "-=50"}, "ending")
        .to("#Rocket",{ rotate: 360, alpha:0, scale: 0.2, duration:0.5, y: 20}, "ending")
        .to("#Sky", {alpha: 1, duration: 4}, "ending")