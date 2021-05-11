import { gsap } from "gsap";
import {flamesTL} from "./rocketLaunch"


export let landingTL = gsap.timeline();
landingTL.to("#RocketFolder",{duration:3, x:"-=100", y:"+=300", rotation:"-=145"})
            .to("#LightFlame",{duration:1, scaleY:0, onStart:stopFlames},"flames")
            .to("#DarkFlame",{duration:1, scaleY:0},"flames")
            

function stopFlames(){
    console.log("stop");
    flamesTL.kill();
}