var video = document.getElementById('intro-video');

video.onended = function () {
 video.remove();
 let img = document.getElementById('section__intro-poster');
 img.style.cssText = "opacity: 1; object-fit : cover";
 
 const timeline = new gsap.timeline({
	defaults: {
		duration: 1, // sets the default duration of each tween to 1s
		transformOrigin: "center", // sets default transform-origin to center
		ease: 'ease', // sets the default animation timeline to ease
	},
});

timeline.to(".section__intro-video",{
    scale: 1.02
},).to(".fullscreen-black",{
    backgroundColor: "black",
    opacity: 0.2,
    
},"-=1");
const controller = new ScrollMagic.Controller(); 

// Initialise ScrollMagic Scene
const scene = new ScrollMagic.Scene({ 
	triggerElement: ".section__color-representation",
    triggerHook: 2,
})
// .setPin(".section__intro-video") // This method will pin your scene in which the animation is playing
.setTween(timeline) // This method will bind our GSAP Animation with our ScrollMagic Scene
.addTo(controller); // This method will add the ScrollMagic controller into our ScrollMagic scene

// scene

}


