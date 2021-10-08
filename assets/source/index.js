document.addEventListener("DOMContentLoaded", function() {
	const shape0="M0 0";
	const shape1="M-12.5,-23.812000274658203 C-12.376999855041504,-23.812999725341797 -12.262999534606934,-23.812999725341797 -12.163000106811523,-23.812999725341797 C-11.067000389099121,-23.812999725341797 -9.838000297546387,-23.812999725341797 -8.527999877929688,-23.812999725341797"
	const shape2="M-36.82600021362305,-18.398000717163086 C-36.393001556396484,-21.285999298095703 -33.9010009765625,-23.5 -30.89299964904785,-23.5 C-30.892560958862305,-23.5 -23.954561233520508,-23.5 -19.267560958862305,-23.5 C-18.374561309814453,-23.5 -16.629560470581055,-24.044647216796875 -15.965560913085938,-24.53507423400879 C-14.287561416625977,-25.773056030273438 -13.056561470031738,-27.3831729888916 -11.383561134338379,-28.626083374023438 C-10.776561737060547,-29.07707977294922 -9.08656120300293,-29.5584716796875 -8.267560958862305,-29.5584716796875 C-3.205561399459839,-29.5584716796875 0.8119999766349792,-29.5584716796875 6.375,-29.5584716796875 C7.175000190734863,-29.5584716796875 8.817000389099121,-29.049970626831055 9.428999900817871,-28.62690544128418 C11.255000114440918,-27.36427879333496 12.71399974822998,-25.765663146972656 14.574000358581543,-24.536718368530273 C15.32800006866455,-24.038896560668945 17.156999588012695,-23.5 18.125,-23.5 C22.812000274658203,-23.5 30,-23.5 30,-23.5 C32.92599868774414,-23.5 35.36199951171875,-21.4060001373291 35.893001556396484,-18.635000228881836"
	const shape3="M-19.4060001373291,23.5 C-25.70199966430664,23.5 -30,23.5 -30,23.5 C-33.31399917602539,23.5 -36,20.81399917602539 -36,17.5 C-36,17.5 -36,-17.5 -36,-17.5 C-36,-20.81399917602539 -33.31399917602539,-23.5 -30,-23.5 C-30,-23.5 -23.062000274658203,-23.5 -18.375,-23.5 C-17.48200035095215,-23.5 -15.737000465393066,-24.163000106811523 -15.072999954223633,-24.760000228881836 C-13.395000457763672,-26.267000198364258 -12.163999557495117,-28.226999282836914 -10.491000175476074,-29.739999771118164 C-9.883999824523926,-30.288999557495117 -8.194000244140625,-30.875 -7.375,-30.875 C-2.312999963760376,-30.875 0.8119999766349792,-30.875 6.375,-30.875 C7.175000190734863,-30.875 8.817000389099121,-30.256000518798828 9.428999900817871,-29.740999221801758 C11.255000114440918,-28.20400047302246 12.71399974822998,-26.257999420166016 14.574000358581543,-24.761999130249023 C15.32800006866455,-24.1560001373291 17.156999588012695,-23.5 18.125,-23.5 C22.812000274658203,-23.5 30,-23.5 30,-23.5 C33.31399917602539,-23.5 36,-20.81399917602539 36,-17.5 C36,-17.5 36,-17.5 36,-17.5 C36,-17.5 36,17.5 36,17.5 C36,20.81399917602539 33.31399917602539,23.5 30,23.5 C30,23.5 23.874000549316406,23.5 15.536999702453613,23.5"
	const shape4=" M-3.00600004196167,23.5 C-16.940000534057617,23.5 -30,23.5 -30,23.5 C-33.31399917602539,23.5 -36,20.81399917602539 -36,17.5 C-36,17.5 -36,-17.5 -36,-17.5 C-36,-20.81399917602539 -33.31399917602539,-23.5 -30,-23.5 C-30,-23.5 -23.062000274658203,-23.5 -18.375,-23.5 C-17.48200035095215,-23.5 -15.737000465393066,-24.163000106811523 -15.072999954223633,-24.760000228881836 C-13.395000457763672,-26.267000198364258 -12.163999557495117,-28.226999282836914 -10.491000175476074,-29.739999771118164 C-9.883999824523926,-30.288999557495117 -8.194000244140625,-30.875 -7.375,-30.875 C-2.312999963760376,-30.875 0.8119999766349792,-30.875 6.375,-30.875 C7.175000190734863,-30.875 8.817000389099121,-30.256000518798828 9.428999900817871,-29.740999221801758 C11.255000114440918,-28.20400047302246 12.71399974822998,-26.257999420166016 14.574000358581543,-24.761999130249023 C15.32800006866455,-24.1560001373291 17.156999588012695,-23.5 18.125,-23.5 C22.812000274658203,-23.5 30,-23.5 30,-23.5 C33.31399917602539,-23.5 36,-20.81399917602539 36,-17.5 C36,-17.5 36,-17.5 36,-17.5 C36,-17.5 36,17.5 36,17.5 C36,20.81399917602539 33.31399917602539,23.5 30,23.5 C30,23.5 14.418999671936035,23.5 -0.8629999756813049,23.5"
	const controller = new ScrollMagic.Controller(); 

	const timeline1 = new gsap.timeline({
		defaults: {
			duration:1, // sets the default duration of each tween to 1s
			transformOrigin: "center", // sets default transform-origin to center
			ease: 'ease', // sets the default animation timeline to ease
		},
	});
	timeline1.to(".upper-information",{y:"49px"}).to(".upper-information",{backgroundColor:"white"})

	const timeline2=new gsap.timeline({
		defaults: {
			duration:1, // sets the default duration of each tween to 1s
			transformOrigin: "center", // sets default transform-origin to center
			ease: 'ease', // sets the default animation timeline to ease
		},
	}),timeline4=new gsap.timeline({
		defaults: {
			duration:1, // sets the default duration of each tween to 1s
			transformOrigin: "center", // sets default transform-origin to center
			ease: 'ease', // sets the default animation timeline to ease
		},
	}),timeline5=new gsap.timeline({
		defaults: {
			duration:1, // sets the default duration of each tween to 1s
			transformOrigin: "center", // sets default transform-origin to center
			ease: 'ease', // sets the default animation timeline to ease
		},
	}),timeline6=new gsap.timeline({
		defaults: {
			duration:1, // sets the default duration of each tween to 1s
			transformOrigin: "center", // sets default transform-origin to center
			ease: 'ease', // sets the default animation timeline to ease
		},
	});
	timeline2.to(".color-representation-content--1",{opacity:1,y:-50})
	timeline4.to(".color-representation-content--2",{opacity:1,y:-50}).to(".color-representation-content--1",{opacity:0,}, "-=0.3")
	timeline5.to(".color-representation-content--3",{opacity:1,y:-50}).to(".color-representation-content--2",{opacity:0,},"-=0.3")
	timeline6.to(".color-representation-content--4",{opacity:1,y:-50}).to(".color-representation-content--3",{opacity:0,},"-=0.3")
	
	var video = document.getElementById('intro-video');
	
	video.onended = function () {
	 video.remove();
	 let img = document.getElementById('section__intro-poster');
	 img.style.cssText = "opacity: 1; object-fit : cover";
	 
	 const timeline3 = new gsap.timeline({
		defaults: {
			 // sets the default duration of each tween to 1s
			transformOrigin: "center", // sets default transform-origin to center
			ease: 'ease', // sets the default animation timeline to ease
		},
	});
	
	timeline3.to(".section__intro-video",{
		scale: 1.02
	},).to(".fullscreen-black",{
		backgroundColor: "black",
		opacity: 0.2,
		
	},"-=1");
	
	
	// Initialise ScrollMagic Scene
	const scene1 = new ScrollMagic.Scene({ 
		triggerElement: ".section__color-representation",
		triggerHook: 1,
		duration: 300,
		
	})
	.setTween(timeline3) // This method will bind our GSAP Animation with our ScrollMagic Scene
	.addIndicators({name: "intro (duration: 300)"})
	.addTo(controller); // This method will add the ScrollMagic controller into our ScrollMagic scene
	
	
	
	}

	const scene2 = new ScrollMagic.Scene({ 
		triggerElement: ".color-representation-content--1",
		triggerHook: 0.7,
		duration: 300,
		
	})
	.setTween(timeline2) // This method will bind our GSAP Animation with our ScrollMagic Scene
	.addIndicators({name: "div1 (duration: 300)"})
	.addTo(controller) // This method will add the ScrollMagic controller into our ScrollMagic scene
	.reverse(true);

	const scene3 = new ScrollMagic.Scene({ 
		triggerElement: ".color-representation-content--2",
		triggerHook: 0.7,
		duration: 300
	})
	.setTween(timeline4) // This method will bind our GSAP Animation with our ScrollMagic Scene
	.addIndicators({name: "div2 (duration: 300)"})
	.addTo(controller) // This method will add the ScrollMagic controller into our ScrollMagic scene
	.reverse(true);

	const scene4 = new ScrollMagic.Scene({ 
		triggerElement: ".color-representation-content--3",
		triggerHook: 0.7,
		duration: 300
	})
	.setTween(timeline5) // This method will bind our GSAP Animation with our ScrollMagic Scene
	.addIndicators({name: "div3 (duration: 300)"})
	.addTo(controller) // This method will add the ScrollMagic controller into our ScrollMagic scene
	.reverse(true);

	const scene5 = new ScrollMagic.Scene({ 
		triggerElement: ".color-representation-content--4",
		triggerHook: 0.7,
		duration: 300
	})
	.setTween(timeline6) // This method will bind our GSAP Animation with our ScrollMagic Scene
	.addIndicators({name: "div4 (duration: 300)"})
	.addTo(controller) // This method will add the ScrollMagic controller into our ScrollMagic scene
	.reverse(true);
  });




