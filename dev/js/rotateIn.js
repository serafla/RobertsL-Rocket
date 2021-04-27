import { gsap } from "gsap";

export let rotateInTL = gsap.timeline();
rotateInTL.from("#FlowerStar1",{alpha: 0, rotate: 360, duration: 0.5}, "-=0.5")
        .from("#FlowerStar2",{alpha: 0, rotate: 360, duration: 0.5}, "-=0.5")
        .from("#FlowerStar3",{alpha: 0, rotate: 360, duration: 0.5}, "-=0.5")
        .from("#FlowerStar4",{alpha: 0, rotate: 360, duration: 0.5}, "-=0.5")
        .from("#FlowerStar5",{alpha: 0, rotate: 360, duration: 0.5}, "-=0.5")
        .from("#MoonFolder",{alpha: 0, rotate: 360, duration: 1}, "-=0.5");
       