import { gsap } from "gsap";



import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { slideInTL } from "./slideIn"
import { rotateInTL } from "./rotateIn"
import { rocketLaunchTL } from "./rocketLaunch"
import { flightTL } from "./flightPath"
import { moonZoomInTL } from "./moonZoom"
import { landingTL } from "./landing"
import { endingTL } from "./ending"

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(zoomTL)
        .add(slideInTL, "-=3")
        .add(rotateInTL)
        .add(rocketLaunchTL)
        .add(flightTL)
        .add(moonZoomInTL)
        .add(landingTL)
        .addLabel("marker")
        .add(endingTL);

        mainTL.play("marker");


     
// console.log(numberThing);

// GSDevTools.create();