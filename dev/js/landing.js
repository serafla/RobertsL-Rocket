import { gsap } from "gsap";
import {flamesTL} from "./rocketLaunch"


export let landingTL = gsap.timeline();
landingTL.to("#RocketFolder",{duration:3, x:"-=100", y:"+=600", rotation:"-=145"})
            .to("#LightFlame",{duration:1, scaleY:0, onStart:stopFlames},"flames")
            .to("#DarkFlame",{duration:1, scaleY:0},"flames")
            .to("#MoonFlowers",{alpha:1, scaleY:5, duration: 3})

function stopFlames(){
    console.log("stop");
    flamesTL.kill();
}