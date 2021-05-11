import { gsap } from "gsap";



export let endingTL = gsap.timeline();
endingTL.to("#MoonFolder",{alpha:0, scale: 20, duration:4, y: 20}, "ending")
        .to("#Rocket",{alpha:0, duration:0.5, y: 20}, "ending")
        