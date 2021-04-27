import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";


import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { slideInTL } from "./slideIn"
import { rotateInTL } from "./rotateIn"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(zoomTL)
        .add(slideInTL, "-=3")
        .add(rotateInTL);


// console.log(numberThing);

GSDevTools.create();