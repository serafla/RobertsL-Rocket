import { gsap } from "gsap";

gsap.set("#Rocket",{transformOrigin:"center"});
gsap.set("#RocketCloudsFolder",{transformOrigin:"center bottom"});
gsap.set("#LightFlame",{transformOrigin:"center top"});
gsap.set("#DarkFlame",{transformOrigin:"center top"});

export let rocketLaunchTL = gsap.timeline();

rocketLaunchTL.from("#RocketFolder", { alpha: 1, y:1500, duration:2}, "rocketclouds")
                .from("#RocketCloudsFolder",{duration:0.25, y: 1500, alpha:1, ease: "power3.in"})
                .to("#Rocket",{duration:0.15, rotation:-10,ease:"none"})
                .to("#Rocket",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
                .to("#Rocket",{duration:0.15, rotation:0,ease:"none", onComplete:controlFlames})
                .to("#TopCloud",{duration:4, y:"-=150", alpha:0, ease: "power3.in"},'upAndAway')
                .to("#RightBGCloud",{duration:4, y:"-=250", scale: 5, alpha:0, ease: "power3.in"},'upAndAway')
                .to("#LeftBGCloud",{duration:4, y:"-=250", scale: 5, alpha:0, ease: "power3.in"},'upAndAway')
                .to("#RocketFolder",{duration:5, y:"-=400", ease: "power3.in"},"upAndAway")
                .to("#BottomCloudsFolder",{duration:6, y:"+=900", ease: "power3.in"},'upAndAway')
                .to("#TopCloudsFolder",{duration:7, y:"+=1000", ease: "power3.in"},'upAndAway')
                .to("#ForegroundFolder",{duration:5, y:"+=600", ease: "power3.in"},'upAndAway')
                .to("#MiddlegroundFolder",{duration:5, y:"+=500", ease: "power3.in"},'upAndAway')
                .to("#MountainsFolder",{duration:5, y:"+=700", ease: "power3.in"},'upAndAway')
                .to("#Sky",{duration:5, alpha: 0, delay: 3},'upAndAway')
                .to("#CircleStarsFolder",{duration:5, y: "+=100", delay: 4},'upAndAway')
                .to("#RocketFolder",{duration:3, y:"+=400", x:"-=200", scale: 0.75})


export let flamesTL = gsap.timeline({paused:true});
flamesTL.to("#LightFlame",{duration:0.15, scaleY:.6,yoyo:true, repeat:-1},"flames")
.to("#DarkFlame",{duration:0.25, scaleY:.5,yoyo:true, repeat:-1},"flames")

function controlFlames(){
    gsap.set(".flames",{display:"block"});
    flamesTL.play()
}
        