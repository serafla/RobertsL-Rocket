import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.set("#FlightPath",{transformOrigin:"center top"});

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flightTL = gsap.timeline();

flightTL.to("#RocketFolder", {
    duration: 7,
    motionPath: {
        path: "#FlightPath",
        align:"#FlightPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90
    },
    ease: "none",
    scale:1
});


MotionPathHelper.create("#FlightPath");