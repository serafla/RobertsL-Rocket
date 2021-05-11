import { gsap } from "gsap";

export let zoomTL = gsap.timeline();


gsap.set("#MiddleLightestMtn",{transformOrigin:"center"})
gsap.set("#LeftLightMtn",{transformOrigin:"center"})
gsap.set("#RightLightMtn",{transformOrigin:"center"})
gsap.set("#BottomLeftDarkMtn",{transformOrigin:"center"})
gsap.set("#BottomRightDarkMtn",{transformOrigin:"center"});

zoomTL.from("#MiddleLightestMtn",{duration:5, scale:10,ease: "power4.out",y:"+=3000"},"zoom")
            .from("#LeftLightMtn",{duration:5.75, scale:10,ease: "power4.out",y:"+=3000"},"zoom")
            .from("#RightLightMtn",{duration:5.5, scale:10,ease: "power4.out",y:"+=3000"},"zoom")
            .from("#BottomLeftDarkMtn",{duration:5.5, scale:10,ease: "power4.out",y:"+=3020"},"zoom")
            .from("#BottomRightDarkMtn",{duration:5.25, scale:10,ease: "power4.out",y:"+=3020"},"zoom")