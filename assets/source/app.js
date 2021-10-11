var controller = new ScrollMagic.Controller();
// New Timeline and Scene
var timeline = new TimelineMax();
var tween1 = TweenMax.from("#first", 2, { y: 150, opacity: 0, });
var tween2 = TweenMax.to("#first", 2, { y: 0, opacity: 1, });
timeline
    .add(tween1)
    .add(tween2);

// Initialise ScrollMagic Scene
const scene = new ScrollMagic.Scene({
    triggerElement: "#first",
    triggerHook: 0.9,
    duration: 600
})
    .setTween(timeline)
    .addIndicators({ name: "1, #600" })
    .addTo(controller);

// New Timeline and Scene

var timeline2 = new TimelineMax();
var tween3 = TweenMax.from("#second", 3, { y: 200, opacity: 0, });
var tween4 = TweenMax.to("#second", 3, { y: 0, opacity: 1, });
timeline2
    .add(tween3)
    .add(tween4);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#second",
    triggerHook: 0.8,
    duration: 900
})
    .setTween(timeline2)
    .addIndicators({ name: "2, #900" })
    .addTo(controller);


// New Timeline and Scene
var timeline3 = new TimelineMax();
var tween5 = TweenMax.from("#third", 2, { y: 150, opacity: 0, });
var tween6 = TweenMax.to("#third", 2, { y: 0, opacity: 1, });
timeline3
    .add(tween5)
    .add(tween6);

// Initialise ScrollMagic Scene
const scene3 = new ScrollMagic.Scene({
    triggerElement: "#third",
    triggerHook: 0.9,
    duration: 600
})
    .setTween(timeline3)
    .addIndicators({ name: "3, #600" })
    .addTo(controller);


// New Timeline and Scene
var timeline4 = new TimelineMax();
var tween7 = TweenMax.from("#fourth", 3, { y: 200, opacity: 0, });
var tween8 = TweenMax.to("#fourth", 3, { y: 0, opacity: 1, });
timeline4
    .add(tween7)
    .add(tween8);

// Initialise ScrollMagic Scene
const scene4 = new ScrollMagic.Scene({
    triggerElement: "#fourth",
    triggerHook: 0.8,
    duration: 900
})
    .setTween(timeline4)
    .addIndicators({ name: "4, #900" })
    .addTo(controller);

// New Timeline and Scene
var timeline5 = new TimelineMax();
var tween9 = TweenMax.from("#fifth", 2, { opacity: 0, });
var tween10 = TweenMax.to("#fifth", 2, { opacity: 1, });
timeline5
    .add(tween9)
    .add(tween10);

// Initialise ScrollMagic Scene
const scene5 = new ScrollMagic.Scene({
    triggerElement: "#fifth",
    triggerHook: 0.9,
    duration: 600
})
    .setTween(timeline5)
    .addIndicators({ name: "5, #600" })
    .addTo(controller);

// New Timeline and Scene
var timeline6 = new TimelineMax();
var tween10 = TweenMax.from("#howdidwe", 2, { y: 150, opacity: 0, });
var tween11 = TweenMax.to("#howdidwe", 2, { y: 0, opacity: 1 });
timeline6
    .add(tween10)
    .add(tween11);

// Initialise ScrollMagic Scene
const scene6 = new ScrollMagic.Scene({
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
const scene7 = new ScrollMagic.Scene({
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
const scene8 = new ScrollMagic.Scene({
    triggerElement: "#howdidImage",
    triggerHook: 2,
    duration: '100%',
    offset: -10
})
    .setTween(timeline8)
    .addTo(controller);


var timeline9 = new TimelineMax();
var tween17 = TweenMax.from("#howdidImage", 2, { rotation: 0, });
var tween18 = TweenMax.to("#howdidImage", 2, { rotation: -10, });
timeline9
    .add(tween17)
    .add(tween18);

// Initialise ScrollMagic Scene
const scene9 = new ScrollMagic.Scene({
    triggerElement: "#howdidImage",
    triggerHook: 2,
    duration: "100%",
    offset: -10
})
    .setTween(timeline9)
    .addTo(controller);



















// Onclick Functions //


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