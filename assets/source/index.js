document.addEventListener("DOMContentLoaded", function () {
  const controller = new ScrollMagic.Controller();

  const timline1 = new gsap.timeline({
    defaults: {
      duration: 1, // sets the default duration of each tween to 1s
      transformOrigin: "center", // sets default transform-origin to center
      ease: "ease", // sets the default animation timeline to ease
    },
  });
  timline1
    .to(".upper-information", { y: "49px" })
    .to(".upper-information", { backgroundColor: "white" });

  const timline2 = new gsap.timeline({
    defaults: {
      duration: 1, // sets the default duration of each tween to 1s
      transformOrigin: "center", // sets default transform-origin to center
      ease: "ease", // sets the default animation timeline to ease
    },
  }),
    timline4 = new gsap.timeline({
      defaults: {
        duration: 1, // sets the default duration of each tween to 1s
        transformOrigin: "center", // sets default transform-origin to center
        ease: "ease", // sets the default animation timeline to ease
      },
    }),
    timline5 = new gsap.timeline({
      defaults: {
        duration: 1, // sets the default duration of each tween to 1s
        transformOrigin: "center", // sets default transform-origin to center
        ease: "ease", // sets the default animation timeline to ease
      },
    }),
    timline6 = new gsap.timeline({
      defaults: {
        duration: 1, // sets the default duration of each tween to 1s
        transformOrigin: "center", // sets default transform-origin to center
        ease: "ease", // sets the default animation timeline to ease
      },
    });
  timline2.to(".color-representation-content--1", { opacity: 1, y: -50 });
  timline4
    .to(".color-representation-content--2", { opacity: 1, y: -50 })
    .to(".color-representation-content--1", { opacity: 0 }, "-=0.3");
  timline5
    .to(".color-representation-content--3", { opacity: 1, y: -50 })
    .to(".color-representation-content--2", { opacity: 0 }, "-=0.3");
  timline6
    .to(".color-representation-content--4", { opacity: 1, y: -50 })
    .to(".color-representation-content--3", { opacity: 0 }, "-=0.3");

  var video = document.getElementById("intro-video");

  video.onended = function () {
    video.remove();
    let img = document.getElementById("section__intro-poster");
    img.style.cssText = "opacity: 1; object-fit : cover";

    const timline3 = new gsap.timeline({
      defaults: {
        // sets the default duration of each tween to 1s
        transformOrigin: "center", // sets default transform-origin to center
        ease: "ease", // sets the default animation timeline to ease
      },
    });

    timline3
      .to(".section__intro-video", {
        scale: 1.02,
      })
      .to(
        ".fullscreen-black",
        {
          backgroundColor: "black",
          opacity: 0.2,
        },
        "-=1"
      );

    // Initialise ScrollMagic Scene
    const scene1 = new ScrollMagic.Scene({
      triggerElement: ".section__color-representation",
      triggerHook: 1,
      duration: 300,
    })
      .setTween(timline3) // This method will bind our GSAP Animation with our ScrollMagic Scene
      // .addIndicators({name: "intro (duration: 300)"})
      .addTo(controller); // This method will add the ScrollMagic controller into our ScrollMagic scene
  };

  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".color-representation-content--1",
    triggerHook: 0.7,
    duration: 300,
  })
    .setTween(timline2) // This method will bind our GSAP Animation with our ScrollMagic Scene
    // .addIndicators({name: "div1 (duration: 300)"})
    .addTo(controller) // This method will add the ScrollMagic controller into our ScrollMagic scene
    .reverse(true);

  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".color-representation-content--2",
    triggerHook: 0.7,
    duration: 300,
  })
    .setTween(timline4) // This method will bind our GSAP Animation with our ScrollMagic Scene
    // .addIndicators({name: "div2 (duration: 300)"})
    .addTo(controller) // This method will add the ScrollMagic controller into our ScrollMagic scene
    .reverse(true);

  const scene4 = new ScrollMagic.Scene({
    triggerElement: ".color-representation-content--3",
    triggerHook: 0.7,
    duration: 300,
  })
    .setTween(timline5) // This method will bind our GSAP Animation with our ScrollMagic Scene
    // .addIndicators({name: "div3 (duration: 300)"})
    .addTo(controller) // This method will add the ScrollMagic controller into our ScrollMagic scene
    .reverse(true);

  const scene5 = new ScrollMagic.Scene({
    triggerElement: ".color-representation-content--4",
    triggerHook: 0.7,
    duration: 300,
  })
    .setTween(timline6) // This method will bind our GSAP Animation with our ScrollMagic Scene
    // .addIndicators({name: "div4 (duration: 300)"})
    .addTo(controller) // This method will add the ScrollMagic controller into our ScrollMagic scene
    .reverse(true);

  // LOWER CONTENT

  const timline7 = new gsap.timeline({
    default: {
      duration: 3, // sets the default duration of each tween to 1s
      transformOrigin: "center", // sets default transform-origin to center
      ease: "ease", // sets the default animation timeline to ease
    },
  });
  const timline8 = new gsap.timeline({
    default: {
      duration: 3, // sets the default duration of each tween to 1s
      transformOrigin: "center", // sets default transform-origin to center
      ease: "ease", // sets the default animation timeline to ease
    },
  });
  const timline9 = new gsap.timeline({
    default: {
      duration: 3, // sets the default duration of each tween to 1s
      transformOrigin: "center", // sets default transform-origin to center
      ease: "ease", // sets the default animation timeline to ease
    },
  });

  timline7.to("#headline1", {
    opacity: 1,
    y: 0,

  });
  timline8.to("#headline2", {
    opacity: 1,
    y: 0,
  });
  timline9.to(".lower-content-paragraph", {
    opacity: 1,
    y: 0,
  });


  const scene_lowercontenth1 = new ScrollMagic.Scene({
    triggerElement: ".color-representation-lower-content",
    triggerHook: 0.5,
  })
    .setTween(timline7)
    // .addIndicators({ name: "headine1 (duration: 400)" })
    .addTo(controller)
    .reverse(true);
  const scene_lowercontenth2 = new ScrollMagic.Scene({
    triggerElement: ".color-representation-lower-content",
    triggerHook: 0.4,
  })
    .setTween(timline8)
    // .addIndicators({ name: "headine2 (duration: 400)" })
    .addTo(controller)
    .reverse(true);
  const scene_lowercontentpg = new ScrollMagic.Scene({
    triggerElement: ".color-representation-lower-content",
    triggerHook: 0.3,
  })
    .setTween(timline9)
    // .addIndicators({ name: "paragraph (duration: 400)" })
    .addTo(controller)
    .reverse(true);

	/* ******************************************** cinematicMode   */ 

const timline10 = new gsap.timeline();

timline10
.to(('#columnp-1'),4,{y:-10,opacity:0,},"6")
.fromTo(('#columnp-2'),4,{y:-150, opacity:0},{y:-160,opacity:1})
.to(('#columnp-2'),5,{y:-170,opacity:0},">8")
.to(('#row--columnpg'),5,{y:-10,opacity:0},"<")
.to(("#video-editor"),8,{scale:1},">+2")
.to(("#video-border"),8,{scale:1, opacity:1},"<+1")
.to((".black-rounded"),8,{opacity: 1},"<-2")
.to((".black-rounded"),8,{scale: 1},">-6")
.to(("#cinematic-video"),8,{scale:0.5,y:-10 },">-4")
.to(("#video-editor"),8,{opacity:1},"<")
.to(("#pg-left"),5,{opacity:1, y:-250},"<-2")
.to(("#pg-right"),5,{opacity:1, y:-250},"<")
.to(("#pg-left"),5,{opacity:0, y:-300},">+7")
.to(("#pg-right"),5,{opacity:0, y:-300},"<")
.fromTo((".framegroup3-content-lower"),5,{opacity:0, y:-380},{opacity: 1, y:-400},">")
.to((".framegroup3-content-lower"),5,{opacity: 0, y:-420},">+10")



// .to(('.framegroup-flex-img'), 3, { scale: 0.7, transformOrigin: "center top",})  

const scene_cinematic1 = new ScrollMagic.Scene({
    triggerElement: ".cinematicMode__framegroup-flex",
    triggerHook: 0.1,
    duration: 1600,
  })
  	.setPin(".cinematicMode__framegroup-flex")
    .setTween(timline10)
    .addIndicators({ name: "menandwoman (duration: 100%)" })
    .addTo(controller)
    .reverse(true);
});

// https://www.apple.com/105/media/us/iphone-13/2021/19e0ebb3-0e17-4765-95af-c82bc827e02f/anim/cinematic-mode/large.mp4