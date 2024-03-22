
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");


document.addEventListener("mousemove", function (dets) {
    console.log(dets)

    crsr.style.left = dets.x+30+"px";
    crsr.style.top = dets.y +"px";
    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 + "px";
    
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent"
        
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "1px solid  #95c11e";
        crsr.style.backgroundColor = " #95c11e";
    })
})



gsap.to("#nav", {

    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: true,
    }

})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers : true,
        start: "top -40%",
        end: "top -80%",
        scrub: 2
    }
})


gsap.from("#about-us , #about-us-in", {
    y: 70, // kis exis se lana h 
    opacity: 0,
    duration: 0.5,
    stagger: 0.4, // use for show one after
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: 2

    }
})

gsap.from(".card", {
    scale: 0.8,     // it's show outer
    opacity: 0,
    duration: 0.5,
    // stagger: 0.001, // use for show one after
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: 1

    }
})

gsap.from("#colon1", {
    y: -50,
    x: -50,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 40%",
        scrub: 4

    }
})

gsap.from("#colon2", {
    y: 50,
    x: 50,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 40%",
        scrub: 4

    }
})

gsap.from("#page4 h1", {
    y: 50,

    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3

    }
})




