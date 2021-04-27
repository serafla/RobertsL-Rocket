import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#BottomLeftDarkMtn",{transformOrigin:"center"});
gsap.set("#BottomRightDarkMtn",{transformOrigin:"center"});
gsap.set("#LeftLightMtn",{transformOrigin:"center"});
gsap.set("#MiddleLightestMtn",{transformOrigin:"center"});
gsap.set("#RightLightMtn",{transformOrigin:"center"});

zoomTL.from("#Sky",{alpha:0, duration:1})
            .from("#MiddleLightestMtn",{duration:5, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
            .from("#LeftLightMtn",{duration:5.75, scale:10,ease: "power4.out",y:"+=800"},"zoom")
            .from("#RightLightMtn",{duration:5.5, scale:10,ease: "power4.out",y:"+=800"},"zoom")
            .from("#BottomLeftDarkMtn",{duration:5.5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#BottomRightDarkMtn",{duration:5.25, scale:10,ease: "power4.out",y:"+=420"},"zoom")