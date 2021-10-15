var controller = new ScrollMagic.Controller();
// New Timeline and Scene
var timeline = new TimelineMax();
var tween1 = TweenMax.from("#first", 2, { y: 150, opacity: 0, });
var tween2 = TweenMax.to("#first", 2, { y: 0, opacity: 1, });
timeline
    .add(tween1)
    .add(tween2);

// Initialise ScrollMagic Scene
const scene111 = new ScrollMagic.Scene({
    triggerElement: "#first",
    triggerHook: 0.9,
    duration: 600
})
    .setTween(timeline)
    .addTo(controller);

// New Timeline and Scene

var timeline2 = new TimelineMax();
var tween3 = TweenMax.from("#second", 3, { y: 200, opacity: 0, });
var tween4 = TweenMax.to("#second", 3, { y: 0, opacity: 1, });
timeline2
    .add(tween3)
    .add(tween4);

const scene112 = new ScrollMagic.Scene({
    triggerElement: "#second",
    triggerHook: 0.8,
    duration: 900
})
    .setTween(timeline2)
    .addTo(controller);


// New Timeline and Scene
var timeline3 = new TimelineMax();
var tween5 = TweenMax.from("#third", 2, { y: 150, opacity: 0, });
var tween6 = TweenMax.to("#third", 2, { y: 0, opacity: 1, });
timeline3
    .add(tween5)
    .add(tween6);

// Initialise ScrollMagic Scene
const scene113 = new ScrollMagic.Scene({
    triggerElement: "#third",
    triggerHook: 2,
    duration: "100%"
})
    .setTween(timeline3)
    .addTo(controller);



// New Timeline and Scene
var timeline4 = new TimelineMax();
var tween7 = TweenMax.from("#fourth", 2, { y: 150, opacity: 0, });
var tween8 = TweenMax.to("#fourth", 2, { y: 0, opacity: 1, });
timeline4
    .add(tween7)
    .add(tween8);

// Initialise ScrollMagic Scene
const scene114 = new ScrollMagic.Scene({
    triggerElement: "#fourth",
    triggerHook: 2,
    duration: '100%',
    offset: 100
})
    .setTween(timeline4)
    .addTo(controller);

// New Timeline and Scene
var timeline5 = new TimelineMax();
var tween9 = TweenMax.from("#fifth", 2, { opacity: 0, });
var tween10 = TweenMax.to("#fifth", 2, { opacity: 1, });
timeline5
    .add(tween9)
    .add(tween10);

// Initialise ScrollMagic Scene
const scene115 = new ScrollMagic.Scene({
    triggerElement: "#fifth",
    triggerHook: 0.9,
    duration: 600
})
    .setTween(timeline5)
    .addTo(controller);

// New Timeline and Scene
var timeline6 = new TimelineMax();
var tween10 = TweenMax.from("#howdidwe", 2, { y: 150, opacity: 0, });
var tween11 = TweenMax.to("#howdidwe", 2, { y: 0, opacity: 1 });
var tween32 = TweenMax.to("#howdidwe", 2, { y: 10 });
timeline6
    .add(tween10)
    .add(tween11)
    .add(tween32);

// Initialise ScrollMagic Scene
const scene116 = new ScrollMagic.Scene({
    triggerElement: "#howdidwe",
    triggerHook: 0.9,
    duration: '100%'
})
    .setTween(timeline6)
    .addTo(controller);


// New Timeline and Scene
var timeline7 = new TimelineMax();
var tween11 = TweenMax.from("#howdidImage", 2, { y: 0, opacity: 0, });
var tween12 = TweenMax.to("#howdidImage", 2, { y: 0, opacity: 1, });
timeline7
    .add(tween11)
    .add(tween12);

// Initialise ScrollMagic Scene
const scene117 = new ScrollMagic.Scene({
    triggerElement: "#howdidImage",
    triggerHook: 1,
    duration: '100%',
    offset: 230
})
    .setPin('#howdidwe')
    .setTween(timeline7)
    .addTo(controller);

// New Timeline and Scene
var timeline8 = new TimelineMax();
var tween13 = TweenMax.from("#howdidImage", 2, { rotation: 0, });
var tween14 = TweenMax.to("#howdidImage", 2, { rotation: 0, });
var tween15 = TweenMax.to("#howdidwe", 2, { opacity: 0, });
var tween16 = TweenMax.to("#thinking", 2, { opacity: 0, });
timeline8
    .add(tween13)
    .add(tween14)
    .add(tween15)
    .add(tween16);

// Initialise ScrollMagic Scene
const scene118 = new ScrollMagic.Scene({
    triggerElement: "#howdidImage",
    triggerHook: 2,
    duration: '100%',
    offset: -10
})
    .setTween(timeline8)
    .addTo(controller);


var timeline9 = new TimelineMax();
var tween17 = TweenMax.from("#howdidImage", 2, { rotation: 0, });
var tween18 = TweenMax.to("#howdidImage", 2, { rotation: 0, });
timeline9
    .add(tween17)
    .add(tween18);

// Initialise ScrollMagic Scene
const scene119 = new ScrollMagic.Scene({
    triggerElement: "#howdidImage",
    triggerHook: 2,
    duration: "100%",
    offset: -10
})
    .setTween(timeline9)
    .addTo(controller);

var controller = new ScrollMagic.Controller();
// New Timeline and Scene
var timelinemax = new TimelineMax();
var tweenMax = TweenMax.from("#firstCmrg", 1, { y: 50, opacity: 0, });
var tweenMax2 = TweenMax.to("#firstCmrg", 1, { y: 0, opacity: 1, });
timelinemax
    .add(tweenMax)
    .add(tweenMax2);

// Initialise ScrollMagic Scene
const sceneMax = new ScrollMagic.Scene({
    triggerElement: "#firstCmrg",
    triggerHook: 1,
    duration: '100%'
})
    .setTween(timelinemax)
    .addIndicators({ name: "firstCmrg" })
    .reverse(true)
    .addTo(controller);

// New Timeline and Scene
var timelinemax2 = new TimelineMax();
var tweenMax3 = TweenMax.from("#ok", 5, { y: 0, opacity: 0, });
var tweenMax4 = TweenMax.to("#ok", 5, { y: 0, opacity: 1, });
timelinemax2
    .add(tweenMax3)
    .add(tweenMax4);

// Initialise ScrollMagic Scene
const sceneMax2 = new ScrollMagic.Scene({
    triggerElement: "#ok",
    triggerHook: 1,
    duration: '100%'
})
    .setTween(timelinemax2)
    .addIndicators({ name: "ok" })
    .reverse(true)
    .addTo(controller);



// New Timeline and Scene
var timelinemax3 = new TimelineMax();
var tweenMax5 = TweenMax.from("#secondCmrg", 2, { y: 50, opacity: 0, });
var tweenMax6 = TweenMax.to("#secondCmrg", 2, { y: 0, opacity: 1, });
timelinemax3
    .add(tweenMax5)
    .add(tweenMax6);

// Initialise ScrollMagic Scene
const sceneMax3 = new ScrollMagic.Scene({
    triggerElement: "#secondCmrg",
    triggerHook: 1,
    duration: '100%'
})
    .setTween(timelinemax3)
    .addIndicators({ name: "secondCmrg" })
    .reverse(true)
    .addTo(controller);


// New Timeline and Scene
var timelinemax4 = new TimelineMax();
var tweenMax7 = TweenMax.from("#thirdCmrgImage", 2, { y: 50, opacity: 0, });
var tweenMax8 = TweenMax.to("#thirdCmrgImage", 2, { y: 0, opacity: 1, });
timelinemax4
    .add(tweenMax7)
    .add(tweenMax8);

// Initialise ScrollMagic Scene
const sceneMax4 = new ScrollMagic.Scene({
    triggerElement: "#thirdCmrgImage",
    triggerHook: 1,
    duration: '100%'
})
    .setTween(timelinemax4)
    .addIndicators({ name: "thirdCmrgImage" })
    .reverse(true)
    .addTo(controller);

// New Timeline and Scene
var timelinemax5 = new TimelineMax();
var tweenMax9 = TweenMax.from("#thirdCmrgText", 2, { y: 0, opacity: 0, });
var tweenMax10 = TweenMax.to("#thirdCmrgText", 2, { y: 0, opacity: 1, });
timelinemax5
    .add(tweenMax9)
    .add(tweenMax10);

// Initialise ScrollMagic Scene
const sceneMax5 = new ScrollMagic.Scene({
    triggerElement: "#thirdCmrgText",
    triggerHook: 0.7,
    duration: '100%'
})
    .setTween(timelinemax5)
    .addIndicators({ name: "thirdCmrgText" })
    .reverse(true)
    .addTo(controller);



// New Timeline and Scene
var timelinemax6 = new TimelineMax();
var tweenMax11 = TweenMax.from("#fourthCmrg", 2, { y: 50, opacity: 0, });
var tweenMax12 = TweenMax.to("#fourthCmrg", 2, { y: 0, opacity: 1, });
timelinemax6
    .add(tweenMax11)
    .add(tweenMax12);

// Initialise ScrollMagic Scene
const sceneMax6 = new ScrollMagic.Scene({
    triggerElement: "#fourthCmrg",
    triggerHook: 1,
    duration: '100%'
})
    .setTween(timelinemax6)
    .addIndicators({ name: "fourthCmrg" })
    .reverse(true)
    .addTo(controller);

// New Timeline and Scene
var timelinemax7 = new TimelineMax();
var tweenMax13 = TweenMax.from("#fifthCmrgLeft", 2, { y: 50, opacity: 0, });
var tweenMax14 = TweenMax.to("#fifthCmrgLeft", 2, { y: 0, opacity: 1, });
timelinemax7
    .add(tweenMax13)
    .add(tweenMax14);

// Initialise ScrollMagic Scene
const sceneMax7 = new ScrollMagic.Scene({
    triggerElement: "#fifthCmrgLeft",
    triggerHook: 1,
    duration: '100%'
})
    .setTween(timelinemax7)
    .addIndicators({ name: "fifthCmrgLeft" })
    .reverse(true)
    .addTo(controller);

// New Timeline and Scene
var timelinemax8 = new TimelineMax();
var tweenMax15 = TweenMax.from("#fifthCmrgRight", 2, { opacity: 0, });
var tweenMax16 = TweenMax.to("#fifthCmrgRight", 2, { opacity: 1, });
timelinemax8
    .add(tweenMax15)
    .add(tweenMax16);

// Initialise ScrollMagic Scene
const sceneMax8 = new ScrollMagic.Scene({
    triggerElement: "#fifthCmrgRight",
    triggerHook: 0.7,
    duration: '100%'
})
    .setTween(timelinemax8)
    .addIndicators({ name: "fifthCmrgRight" })
    .reverse(true)
    .addTo(controller);



// New Timeline and Scene
var timelinemax9 = new TimelineMax();
var tweenMax17 = TweenMax.from("#sixthCmrg", 2, { y: 50, opacity: 0, });
var tweenMax18 = TweenMax.to("#sixthCmrg", 2, { y: 0, opacity: 1, });
timelinemax9
    .add(tweenMax17)
    .add(tweenMax18);

// Initialise ScrollMagic Scene
const sceneMax9 = new ScrollMagic.Scene({
    triggerElement: "#sixthCmrg",
    triggerHook: 0.7,
    duration: '100%'
})
    .setTween(timelinemax9)
    .addIndicators({ name: "sixthCmrg" })
    .reverse(true)
    .addTo(controller);


// New Timeline and Scene
var timelinemax10 = new TimelineMax();
var tweenMax19 = TweenMax.from("#seventhCmrg", 2, { y: 50, opacity: 0, });
var tweenMax20 = TweenMax.to("#seventhCmrg", 2, { y: 0, opacity: 1, });
timelinemax10
    .add(tweenMax19)
    .add(tweenMax20);

// Initialise ScrollMagic Scene
const sceneMax10 = new ScrollMagic.Scene({
    triggerElement: "#seventhCmrg",
    triggerHook: 0.7,
    duration: '100%'
})
    .setTween(timelinemax10)
    .addIndicators({ name: "seventhCmrg" })
    .reverse(true)
    .addTo(controller);


// New Timeline and Scene
var timelinemax11 = new TimelineMax();
var tweenMax21 = TweenMax.from("#ninethCmrg", 2, { y: 50, opacity: 0, });
var tweenMax22 = TweenMax.to("#ninethCmrg", 2, { y: 0, opacity: 1, });
timelinemax11
    .add(tweenMax21)
    .add(tweenMax22);

// Initialise ScrollMagic Scene
const sceneMax11 = new ScrollMagic.Scene({
    triggerElement: "#ninethCmrg",
    triggerHook: 0.7,
    duration: '100%'
})
    .setTween(timelinemax11)
    .reverse(true)
    .addTo(controller);



// New Timeline and Scene
var final = new TimelineMax();
var final2 = TweenMax.to("#final1", 3, { scale: .4, transformOrigin: "center top" });
final
    .add(final2);

// Initialise ScrollMagic Scene
const scenefinal = new ScrollMagic.Scene({
    triggerElement: "#final1",
    triggerHook: 0.6,
    duration: "100%",
})
    .setTween(final)
    .reverse(true)
    .addTo(controller);


// New Timeline and Scene
var finaltime = new TimelineMax();
var final3 = TweenMax.to("#final2", 3, { scale: .4, transformOrigin: "center top" });
finaltime
    .add(final3);

// Initialise ScrollMagic Scene
const scenefinal2 = new ScrollMagic.Scene({
    triggerElement: "#final2",
    triggerHook: 0.6,
    duration: "100%",
})
    .setTween(finaltime)
    .reverse(true)
    .addTo(controller);


// New Timeline and Scene
var finaltime2 = new TimelineMax();
var final4 = TweenMax.to("#final3", 3, { scale: .2, transformOrigin: "center top", zIndex: 1, });
finaltime2
    .add(final4);

// Initialise ScrollMagic Scene
const scenefinal3 = new ScrollMagic.Scene({
    triggerElement: "#final3",
    triggerHook: 0.9,
    duration: "100%",
})
    .setTween(finaltime2)
    .reverse(true)
    .addTo(controller);

// New Timeline and Scene
var finaltime3 = new TimelineMax();
var final5 = TweenMax.from("#endCmrg", 3, { opacity: 0 });
var final6 = TweenMax.to("#endCmrg", 3, { opacity: 1 });
finaltime3
    .add(final5)
    .add(final6);

// Initialise ScrollMagic Scene
const scenefinal4 = new ScrollMagic.Scene({
    triggerElement: "#endCmrg",
    triggerHook: 0.9,
    duration: "100%",
})
    .setTween(finaltime3)
    .reverse(true)
    .addTo(controller);



// New Timeline and Scene
var acamera = new TimelineMax();
var camera = TweenMax.from("#aCamera", 1, { y: 150, opacity: 0 });
var camera1 = TweenMax.to("#aCamera", 1, { y: 0, opacity: 1 });
acamera
    .add(camera)
    .add(camera1);

// Initialise ScrollMagic Scene
const ascene = new ScrollMagic.Scene({
    triggerElement: "#aCamera",
    triggerHook: 1,
})
    .setTween(acamera)
    .reverse(true)
    .addTo(controller);


// New Timeline and Scene
var acamera1 = new TimelineMax();
var camera3 = TweenMax.from("#introCamera", 3, { y: 0, opacity: 0 });
var camera4 = TweenMax.to("#introCamera", 3, { y: 0, opacity: 1 });
acamera1
    .add(camera3)
    .add(camera4);

// Initialise ScrollMagic Scene
const ascene2 = new ScrollMagic.Scene({
    triggerElement: "#introCamera",
    triggerHook: 1,
})
    .setTween(acamera1)
    .reverse(true)
    .addTo(controller);

// New Timeline and Scene
var acamera2 = new TimelineMax();
var camera5 = TweenMax.from("#styles1", 2, { y: 150, opacity: 0 });
var camera6 = TweenMax.to("#styles1", 2, { y: 0, opacity: 1 });
acamera2
    .add(camera5)
    .add(camera6);

// Initialise ScrollMagic Scene
const ascene3 = new ScrollMagic.Scene({
    triggerElement: "#styles1",
    triggerHook: 1,
})
    .setTween(acamera2)
    .reverse(true)
    .addTo(controller);



// New Timeline and Scene
var acamera3 = new TimelineMax();
var camera7 = TweenMax.from("#photoaCamera", 1, { y: 100, opacity: 0 });
var camera8 = TweenMax.to("#photoaCamera", 1, { y: 0, opacity: 1 });
acamera3
    .add(camera7)
    .add(camera8);

// Initialise ScrollMagic Scene
const ascene4 = new ScrollMagic.Scene({
    triggerElement: "#photoaCamera",
    triggerHook: 2,
})
    .setTween(acamera3)
    .reverse(true)
    .addTo(controller);




// New Timeline and Scene
var acamera4 = new TimelineMax();
var camera9 = TweenMax.from("#seconda3", 1, { y: 100, opacity: 0 });
var camera10 = TweenMax.to("#seconda3", 1, { y: 0, opacity: 1 });
acamera4
    .add(camera9)
    .add(camera10);

// Initialise ScrollMagic Scene
const ascene5 = new ScrollMagic.Scene({
    triggerElement: "#seconda3",
    triggerHook: 2,
    offset: 150
})
    .setTween(acamera4)
    .reverse(true)
    .addTo(controller);


// New Timeline and Scene
var acamera5 = new TimelineMax();
var camera11 = TweenMax.from("#thirdaCameraImg", 1, { y: 150, opacity: 0 });
var camera12 = TweenMax.to("#thirdaCameraImg", 1, { y: 0, opacity: 1 });
acamera5
    .add(camera11)
    .add(camera12);

// Initialise ScrollMagic Scene
const ascene6 = new ScrollMagic.Scene({
    triggerElement: "#thirdaCameraImg",
    triggerHook: 1,
})
    .setTween(acamera5)
    .reverse(true)
    .addTo(controller);


// New Timeline and Scene
var acamera6 = new TimelineMax();
var camera13 = TweenMax.from("#fourtha1img", 1, { y: 150, opacity: 0 });
var camera14 = TweenMax.to("#fourtha1img", 1, { y: 0, opacity: 1 });
acamera6
    .add(camera13)
    .add(camera14);

// Initialise ScrollMagic Scene
const ascene7 = new ScrollMagic.Scene({
    triggerElement: "#fourtha1img",
    triggerHook: 1,
})
    .setTween(acamera6)
    .reverse(true)
    .addTo(controller);


// New Timeline and Scene
var acamera7 = new TimelineMax();
var camera15 = TweenMax.from("#fourtha2", 1, { y: 150, opacity: 0 });
var camera16 = TweenMax.to("#fourtha2", 1, { y: 0, opacity: 1 });
acamera7
    .add(camera15)
    .add(camera16);

// Initialise ScrollMagic Scene
const ascene8 = new ScrollMagic.Scene({
    triggerElement: "#fourtha2",
    triggerHook: 1,
    offset: 150
})
    .setTween(acamera7)
    .reverse(true)
    .addTo(controller);


var acamera8 = new TimelineMax();
var camera17 = TweenMax.from("#fourtha3img", 1, { y: 150, opacity: 0 });
var camera18 = TweenMax.to("#fourtha3img", 1, { y: 0, opacity: 1 });
acamera8
    .add(camera17)
    .add(camera18);
fourtha3img
// Initialise ScrollMagic Scene
const ascene9 = new ScrollMagic.Scene({
    triggerElement: "#fourtha3img",
    triggerHook: 1,
    offset: 150
})
    .setTween(acamera8)
    .reverse(true)
    .addTo(controller);













// Onclick Functions //

let video = document.getElementById("video");
let videoBtn = document.getElementById("videoBtn")

videoBtn.addEventListener("click", function () {

    if (video.paused) {
        video.play();
        videoBtn.innerText = "Pause"
    } else {
        video.pause();
        videoBtn.innerText = "Play"
    }

    video.autoplay = true;
})


// Color Options //

let blue = document.getElementById("blueOption")
let black = document.getElementById("blackOption")
let red = document.getElementById("redOption")
let silver = document.getElementById("silverOption")


let first = document.getElementById("first");
let firstSpan = document.getElementById("firstSpan");
let firstColor = document.getElementById("firstColor");

let second = document.getElementById("second");
let secondSpan = document.getElementById("secondSpan");

let third = document.getElementById("third");
let thirdimg1 = document.getElementById("thirdimg1");
let thirdimg2 = document.getElementById("thirdimg2");
let thirdSpan = document.getElementById("thirdSpan");
let thirdSpan2 = document.getElementById("thirdSpan2");

let fourth = document.getElementById("fourth");
let fourthSpan = document.getElementById("fourthSpan");

let fifth = document.getElementById("fifth");


function blueSelected() {
    blue.classList.add("selected");
    black.classList.remove("selected");
    red.classList.remove("selected");
    silver.classList.remove("selected");

    first.style.backgroundColor = "#0c3139";
    first.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/blue_finish__calta2yqeqoi_large.jpg')";
    first.style.backgroundPosition = "bottom";
    first.style.backgroundRepeat = "no-repeat";
    firstSpan.style.color = "#b6ff9b";
    firstColor.innerText = "Blue";

    second.style.backgroundColor = "#0c3139";
    secondSpan.style.color = "#b6ff9b";
    second.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/blue_ceramic_shield__coeb6blazh36_large.jpg')";

    third.style.backgroundColor = "#0c3139";
    thirdSpan.style.color = "#b6ff9b"
    thirdSpan2.style.color = "#b6ff9b"
    thirdimg1.src = "https://www.apple.com/v/iphone-13/c/images/overview/design/blue_iphone_13__cyh05gd4qic2_large.jpg";
    thirdimg2.src = "https://www.apple.com/v/iphone-13/c/images/overview/design/blue_iphone_13_mini__gmhvsb6wu6ie_large.jpg";

    fourth.style.backgroundColor = "#0c3139";
    fourth.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/blue_flat_edge__opkoocld04am_large.jpg')";
    fourthSpan.style.color = "#b6ff9b";

    fifth.style.backgroundColor = "#0c3139";
    fifth.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/water_resistant_blue__c0j14e4usxsi_large.jpg')"
}

function blackSelected() {
    blue.classList.remove("selected");
    red.classList.remove("selected");
    black.classList.add("selected");
    silver.classList.remove("selected");

    first.style.backgroundColor = "#12203b";
    first.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/midnight_finish__c0zmupb1wr2a_large.jpg')";
    first.style.backgroundPosition = "bottom";
    first.style.backgroundRepeat = "no-repeat";
    firstSpan.style.color = "#ffa9ab";
    firstColor.innerText = "Midnight";

    second.style.backgroundColor = "#12203b";
    secondSpan.style.color = "#ffa9ab";
    second.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/midnight_ceramic_shield__dab2qcc38ioi_large.jpg')";

    third.style.backgroundColor = "#12203b";
    thirdSpan.style.color = "#ffa9ab";
    thirdSpan2.style.color = "#ffa9ab";
    thirdimg1.src = "https://www.apple.com/v/iphone-13/c/images/overview/design/midnight_iphone_13__eofav935lbiq_large.jpg";
    thirdimg2.src = "https://www.apple.com/v/iphone-13/c/images/overview/design/midnight_iphone_13_mini__efrvgux3ls02_large.jpg";

    fourth.style.backgroundColor = "#12203b";
    fourth.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/midnight_flat_edge__gj2qkr3u94q6_large.jpg')";
    fourthSpan.style.color = "#ffa9ab";

    fifth.style.backgroundColor = "#12203b";
    fifth.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/water_resistant_midnight__cz38pgnhst26_large.jpg')"
}

function redSelected() {
    blue.classList.remove("selected");
    black.classList.remove("selected");
    silver.classList.remove("selected");
    red.classList.add("selected");

    first.style.backgroundColor = "#3e1921";
    first.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/red_finish__c441x0ljv9yu_large.jpg')";
    first.style.backgroundPosition = "bottom";
    first.style.backgroundRepeat = "no-repeat";
    firstSpan.style.color = "#ffb44c";
    firstColor.innerText = "Midnight";

    second.style.backgroundColor = "#3e1921";
    secondSpan.style.color = "#ffb44c";
    second.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/red_ceramic_shield__c7b9gmy1p7ma_large.jpg')";

    third.style.backgroundColor = "#3e1921";
    thirdSpan.style.color = "#ffb44c";
    thirdSpan2.style.color = "#ffb44c";
    thirdimg1.src = "https://www.apple.com/v/iphone-13/c/images/overview/design/red_iphone_13__zhh6dzfw2syu_large.jpg";
    thirdimg2.src = "https://www.apple.com/v/iphone-13/c/images/overview/design/red_iphone_13_mini__btujqivh5qpe_large.jpg";

    fourth.style.backgroundColor = "#3e1921";
    fourth.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/red_flat_edge__cj23r9vmldyu_large.jpg')";
    fourthSpan.style.color = "#ffb44c";

    fifth.style.backgroundColor = "#3e1921";
    fifth.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/water_resistant_red__be2yibg6u4ky_large.jpg')"
}

function silverSelected() {
    blue.classList.remove("selected");
    black.classList.remove("selected");
    red.classList.remove("selected");
    silver.classList.add("selected");

    first.style.backgroundColor = "#2e2e3a";
    first.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/starlight_finish__e4on9og9dr42_large.jpg')";
    first.style.backgroundPosition = "bottom";
    first.style.backgroundRepeat = "no-repeat";
    firstSpan.style.color = "#72e5ce";
    firstColor.innerText = "Midnight";

    second.style.backgroundColor = "#2e2e3a";
    secondSpan.style.color = "#72e5ce";
    second.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/starlight_ceramic_shield__cguqzcysb64i_large.jpg')";

    third.style.backgroundColor = "#2e2e3a";
    thirdSpan.style.color = "#72e5ce";
    thirdSpan2.style.color = "#72e5ce";
    thirdimg1.src = "https://www.apple.com/v/iphone-13/c/images/overview/design/starlight_iphone_13__bzg83hx84dde_large.jpg";
    thirdimg2.src = "https://www.apple.com/v/iphone-13/c/images/overview/design/starlight_iphone_13_mini__gjth145wkkuq_large.jpg";

    fourth.style.backgroundColor = "#2e2e3a";
    fourth.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/starlight_flat_edge__fiwihrjr90yi_large.jpg')";
    fourthSpan.style.color = "#72e5ce";

    fifth.style.backgroundColor = "#2e2e3a";
    fifth.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/water_resistant_starlight__cb8pejfi5bma_large.jpg')"
}