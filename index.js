// changing/viewing background
const button = document.getElementById('title-text');
const elements = document.getElementsByClassName('toggleable');
const bgImg = document.getElementById('bgImg');

const bgs = ['bg_cave.jpg', 'bg_house.jpg', 'bg_deck.jpg', 'bg_sky.jpg'];
var i = 0;


function changePic (args) {
    i++;
    i = (i >= bgs.length) ? 0 : i;
    console.log(i);
    bgImg.style.backgroundImage = "url('"+bgs[i]+"')";
}

function visOff (el) {
    console.log(el);
    el.style.visibility = 'hidden';
    bgImg.style.opacity = 1.0;
}

function visOn (el) {
    el.style.visibility = 'visible';
    bgImg.style.opacity = 0.25;
}

button.onclick = function() {
    if (button.classList.contains('toggleOff')) {
        console.log("toggle is off. turning on.");
        for (var x of elements) { visOff(x); }
        changePic();
    } else {
        console.log("toggle is on. turning off.");
        for(var x of elements) { visOn(x); }
    }
    button.classList.toggle('toggleOff');
}

// changing banner/content colours
const buttonBanner = document.getElementById('banner-symbol');
const bannerA = document.getElementById('banner-top');
const bannerB = document.getElementById('banner-left');
const bannerC = document.getElementById('banner-right');
const content = document.getElementsByClassName('content');

const colorsB = ['rgb(70,50,50)', 'rgb(50,70,50)', 'rgb(50,50,70)'];
const colorsA = ['rgb(190,0,0)', 'rgb(0,190,0)', 'rgb(0,0,190)'];
var j = 0;

buttonBanner.onclick = function() {
    j++;
    j = (j == colorsA.length) ? 0 : j;
    console.log(j);
    bannerA.style.backgroundColor = colorsA[j];
    bannerB.style.borderTopColor = colorsA[j];
    bannerC.style.borderTopColor = colorsA[j];
    for (var b of content) {
        b.style.backgroundColor = colorsB[j];
    }
}
