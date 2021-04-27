import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";


import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { slideInTL } from "./slideIn"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(zoomTL)
        .add(slideInTL)
        .add(fadeInTL);


// console.log(numberThing);

GSDevTools.create();