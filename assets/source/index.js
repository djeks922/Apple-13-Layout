document.addEventListener("DOMContentLoaded", function () {
  const controller = new ScrollMagic.Controller();

  const timeline1 = new gsap.timeline({
    defaults: {
      duration: 1, // sets the default duration of each tween to 1s
      transformOrigin: "center", // sets default transform-origin to center
      ease: "ease", // sets the default animation timeline to ease
    },
  });
  timeline1
    .to(".upper-information", { y: "49px" })
    .to(".upper-information", { backgroundColor: "white" });

  const timeline2 = new gsap.timeline({
      defaults: {
        duration: 1, // sets the default duration of each tween to 1s
        transformOrigin: "center", // sets default transform-origin to center
        ease: "ease", // sets the default animation timeline to ease
      },
    }),
    timeline4 = new gsap.timeline({
      defaults: {
        duration: 1, // sets the default duration of each tween to 1s
        transformOrigin: "center", // sets default transform-origin to center
        ease: "ease", // sets the default animation timeline to ease
      },
    }),
    timeline5 = new gsap.timeline({
      defaults: {
        duration: 1, // sets the default duration of each tween to 1s
        transformOrigin: "center", // sets default transform-origin to center
        ease: "ease", // sets the default animation timeline to ease
      },
    }),
    timeline6 = new gsap.timeline({
      defaults: {
        duration: 1, // sets the default duration of each tween to 1s
        transformOrigin: "center", // sets default transform-origin to center
        ease: "ease", // sets the default animation timeline to ease
      },
    });
  timeline2.to(".color-representation-content--1", { opacity: 1, y: -50 });
  timeline4
    .to(".color-representation-content--2", { opacity: 1, y: -50 })
    .to(".color-representation-content--1", { opacity: 0 }, "-=0.3");
  timeline5
    .to(".color-representation-content--3", { opacity: 1, y: -50 })
    .to(".color-representation-content--2", { opacity: 0 }, "-=0.3");
  timeline6
    .to(".color-representation-content--4", { opacity: 1, y: -50 })
    .to(".color-representation-content--3", { opacity: 0 }, "-=0.3");

  var video = document.getElementById("intro-video");

  video.onended = function () {
    video.remove();
    let img = document.getElementById("section__intro-poster");
    img.style.cssText = "opacity: 1; object-fit : cover";

    const timeline3 = new gsap.timeline({
      defaults: {
        // sets the default duration of each tween to 1s
        transformOrigin: "center", // sets default transform-origin to center
        ease: "ease", // sets the default animation timeline to ease
      },
    });

    timeline3
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
      .setTween(timeline3) // This method will bind our GSAP Animation with our ScrollMagic Scene
      // .addIndicators({name: "intro (duration: 300)"})
      .addTo(controller); // This method will add the ScrollMagic controller into our ScrollMagic scene
  };

  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".color-representation-content--1",
    triggerHook: 0.7,
    duration: 300,
  })
    .setTween(timeline2) // This method will bind our GSAP Animation with our ScrollMagic Scene
    // .addIndicators({name: "div1 (duration: 300)"})
    .addTo(controller) // This method will add the ScrollMagic controller into our ScrollMagic scene
    .reverse(true);

  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".color-representation-content--2",
    triggerHook: 0.7,
    duration: 300,
  })
    .setTween(timeline4) // This method will bind our GSAP Animation with our ScrollMagic Scene
    // .addIndicators({name: "div2 (duration: 300)"})
    .addTo(controller) // This method will add the ScrollMagic controller into our ScrollMagic scene
    .reverse(true);

  const scene4 = new ScrollMagic.Scene({
    triggerElement: ".color-representation-content--3",
    triggerHook: 0.7,
    duration: 300,
  })
    .setTween(timeline5) // This method will bind our GSAP Animation with our ScrollMagic Scene
    // .addIndicators({name: "div3 (duration: 300)"})
    .addTo(controller) // This method will add the ScrollMagic controller into our ScrollMagic scene
    .reverse(true);

  const scene5 = new ScrollMagic.Scene({
    triggerElement: ".color-representation-content--4",
    triggerHook: 0.7,
    duration: 300,
  })
    .setTween(timeline6) // This method will bind our GSAP Animation with our ScrollMagic Scene
    // .addIndicators({name: "div4 (duration: 300)"})
    .addTo(controller) // This method will add the ScrollMagic controller into our ScrollMagic scene
    .reverse(true);

  // LOWER CONTENT

  const timeline7 = new gsap.timeline({
      default: {
        duration: 3, // sets the default duration of each tween to 1s
        transformOrigin: "center", // sets default transform-origin to center
        ease: "ease", // sets the default animation timeline to ease
      },
    });
   const timeline8 = new gsap.timeline({
      default: {
        duration: 3, // sets the default duration of each tween to 1s
        transformOrigin: "center", // sets default transform-origin to center
        ease: "ease", // sets the default animation timeline to ease
      },
    });
   const timeline9 = new gsap.timeline({
      default: {
        duration: 3, // sets the default duration of each tween to 1s
        transformOrigin: "center", // sets default transform-origin to center
        ease: "ease", // sets the default animation timeline to ease
      },
    });

  timeline7.to("#headline1", {
    opacity: 1,
    y: 0,
	
  });
  timeline8.to("#headline2", {
    opacity: 1,
    y: 0,
  });
  timeline9.to(".lower-content-paragraph", {
    opacity: 1,
    y: 0,
  });
  

  const scene_lowercontenth1 = new ScrollMagic.Scene({
    triggerElement: ".color-representation-lower-content",
    triggerHook: 0.5,
  })
    .setTween(timeline7)
    .addIndicators({ name: "headine1 (duration: 400)" })
    .addTo(controller)
    .reverse(true);
  const scene_lowercontenth2 = new ScrollMagic.Scene({
    triggerElement: ".color-representation-lower-content",
    triggerHook: 0.4,
  })
    .setTween(timeline8)
    .addIndicators({ name: "headine2 (duration: 400)" })
    .addTo(controller)
    .reverse(true);
  const scene_lowercontentpg = new ScrollMagic.Scene({
    triggerElement: ".color-representation-lower-content",
    triggerHook: 0.3,
  })
    .setTween(timeline9)
    .addIndicators({ name: "paragraph (duration: 400)" })
    .addTo(controller)
    .reverse(true);
});
