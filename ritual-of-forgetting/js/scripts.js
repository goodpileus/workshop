let seconds = new Date().getSeconds();

setTimeout(function() {
  init();
}, 1000)

function init() {
  $("body").css('opacity', '1');

  if (seconds <= 10){
    $("#ritual").html('as i sit, in thrall');
  }  else if (seconds <= 20){
    ritualTwo(rTwo);
  } else if (seconds <= 30){
    ritualThree(rThree);
  } else if (seconds <= 40){
    ritualFour(rFour);
  } else if (seconds <= 50){
    $("#ritual").html('commands my attention with infernal energy<br> and i remember');
  } else if (seconds <= 60){
    ritualSix(rSix);
  }

  if (seconds < 15){
    $("#earth").addClass('zero');
  } else if (seconds >= 15 && seconds < 30){
    $("#earth").addClass('fifteen');
  } else if (seconds >= 30 && seconds < 45){
    $("#earth").addClass('thirty');
  } else if (seconds >= 45 && seconds < 59){
    $("#earth").addClass('fortyfive');
  }
}

setInterval( function() {
  seconds = new Date().getSeconds();
  $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
  console.log(seconds);
  
  if (seconds == 0) {
    zero();
  } else if (seconds == 5) {
    five();
  } else if (seconds == 10) {
    ten();
  } else if (seconds == 15) {
    fifteen();
  } else if (seconds == 20) {
    twenty();
  } else if (seconds == 25) {
    twentyFive();
  } else if (seconds == 30) {
    thirty();
  } else if (seconds == 35) {
    thirtyFive();
  } else if (seconds == 40) {
    forty();
  } else if (seconds == 45) {
    fortyFive();
  } else if (seconds == 50) {
    fifty();
  } else if (seconds == 55) {
    fiftyFive();
  } 
}, 1000);

// 0 sec
function zero() {
  console.log("zero!");
  playRandomMin();

  $("#earth").removeClass('fortyfive');
  $("#earth").addClass('zero');

  $("#ritual").html('as i sit, in thrall');
  
  setBackground(bgs);
  setHead(heads);
  setFeet(feet);
  setBelly(belly);
  setCore(core);
  setRight(right);
  setLeft(left);
}

// 5 sec
function five() {
  console.log("five!");
  playRandomSec();

  setSky(skies);
}

// 10 sec
function ten() {
  console.log("ten!");
  playRandomSec();

  ritualTwo(rTwo);

  setBackground(bgs);
  setHead(heads);
  setFeet(feet);
  setBelly(belly);
  setCore(core);
  setRight(right);
  setLeft(left);
}

// 15 sec
function fifteen() {
  console.log("fifteen!");
  playRandomSec();
  $("#earth").removeClass('zero');
  $("#earth").addClass('fifteen');
  
  setSky(skies);
}

// 20 sec
function twenty() {
  console.log("twenty!");
  playRandomSec();

  ritualThree(rThree);

  setBackground(bgs);
  setHead(heads);
  setFeet(feet);
  setBelly(belly);
  setRight(right);
  setLeft(left);
  setCore(core);
}

// 25 sec
function twentyFive() {
  console.log("twentyfive!");
  playRandomSec();
  
  setSky(skies);
}

// 30 sec
function thirty() {
  console.log("thirty!");
  playRandomSec();

  $("#earth").removeClass('fifteen');
  $("#earth").addClass('thirty');

  ritualFour(rFour);

  setBackground(bgs);
  setHead(heads);
  setFeet(feet);
  setBelly(belly);
  setCore(core);
  setRight(right);
  setLeft(left);
}

// 35 sec
function thirtyFive() {
  console.log("thirtyfive!");
  playRandomSec();
  
  setSky(skies);
}

// 40 sec
function forty() {
  console.log("forty!");
  $("#ritual").html('when suddenly, i remember:');

  playRandomSec();

  setBackground(bgs);
  setHead(heads);
  setFeet(feet);
  setBelly(belly);
  setCore(core);
  setRight(right);
  setLeft(left);
}

// 45 sec
function fortyFive() {
  console.log("fortyfive!");
  playRandomSec();
  $("#earth").removeClass('thirty');
  $("#earth").addClass('fortyfive');
  
  setSky(skies);
}

// 50 sec
function fifty() {
  console.log("fifty!");
  playRandomSec();

  ritualSix(rSix);

  setBackground(bgs);
  setHead(heads);
  setFeet(feet);
  setBelly(belly);
  setCore(core);
  setRight(right);
  setLeft(left);
}

// 55 sec
function fiftyFive() {
  console.log("fiftyfive!");
  playRandomSec();
  
  setSky(skies);
}

// -------------
// =  RITUALS  =
// -------------
var rTwo = [
  'to the light of this screen',
  'to the network’s empty wisdom',
];

function ritualTwo(rTwo) {
  var index = Math.floor(Math.random() * (rTwo.length));
  $('#ritual').html(rTwo[index]);
}


var rThree = [
  'and my ritual of forgetting,'
];

function ritualThree(rThree) {
  var index = Math.floor(Math.random() * (rThree.length));
  $('#ritual').html(rThree[index]);
}

var rFour = [
  'comforted by the rhythm of my own echoes,',
  'hollowed by the diminishing fidelity of the stars,',
  'electrified by the unhindered whims of strangers,',
  'extinguished by so much accumulated spite,',
  'warmed by the friendship of the sun,',
  'dizzied by my unhappy routine,',
];

function ritualFour(rFour) {
  var index = Math.floor(Math.random() * (rFour.length));
  $('#ritual').html(rFour[index]);
}

var rSix = [
  'the flowers on my windowsill are turning to dust',
  'the stone is more enchanting than the phone',
  'a shadow conforms to its surface',
  'i’ve not been gentle with myself',
  'i’ve forgotten to be gentle with others',
  'bitterness swiftly takes the place of sincerity',
  'i should not mistake love for loneliness',
  'we have made it convenient to decay in solitude',
  'stories are shadows cast from the light of our stars',
  'this place once felt vital',
  'i do not want to conjure illusions',
  'practice requires remembering',
  'remembering requires ritual',
  'ritual requires practice',
  'the clouds are changing in a way i can’t perceive',
  'dizziness is not always a dark thing',
  'the river will come eventually',
];

function ritualSix(rSix) {
  var index = Math.floor(Math.random() * (rSix.length));
  $('#ritual').html(rSix[index]);
}

// ---------
// =  SKY  =
// ---------

var skies = [
  'img/stars1.gif',
  'img/stars2.gif',
  'img/stars3.gif',
  'img/stars4.gif',
];

function setSky(skies) {
  var index = Math.floor(Math.random() * (skies.length));
  $('.thermosphere').css('background-image','url(' + skies[index] + ')');
}

setSky(skies);


// ----------------
// =  BACKGROUND  =
// ----------------

var bgs = [
  'img/bg3.gif',
  'img/bg4.gif',
  'img/bg7.gif',
  'img/bg8.gif',
  'img/bg11.gif',
  'img/bg12.gif',
  'img/bg13.gif',
  'img/bg14.gif',
  'img/bg15.gif',
  'img/bg16.gif',
  'img/bg17.gif',
  'img/bg18.gif',
  'img/bg21.gif',
  'img/bg22.gif',
  'img/bg22b.gif',
  'img/bg22c.gif',
  'img/bg25.gif',
  'img/bg26.gif',
  'img/bg27.gif',
  'img/bg28.gif',
  'img/bg29.gif',
  'img/bg30.gif',
  'img/bg31.gif',
  'img/bg33.gif',
];

function setBackground(bgs) {
  var index = Math.floor(Math.random() * (bgs.length));
  $('#earth').css('background-image','url(' + bgs[index] + ')');
}

setBackground(bgs);


// ----------
// =  HEAD  =
// ----------

var heads = [
  'img/blank.gif',
  'img/head1.gif',
  'img/head4.gif',
  'img/head5.gif',
  'img/head6.gif',
];

function setHead(heads) {
  var index = Math.floor(Math.random() * (heads.length));
  $('.head').css('background-image','url(' + heads[index] + ')');
}

setHead(heads);

// ----------
// =  FEET  =
// ----------

var feet = [
  'img/blank.gif',
  'img/feet1.gif',
  'img/feet2.gif',
  'img/feet3.gif',
];

function setFeet(feet) {
  var index = Math.floor(Math.random() * (feet.length));
  $('.feet').css('background-image','url(' + feet[index] + ')');
}

setFeet(feet);


// -----------
// =  BELLY  =
// -----------

var belly = [
  'img/blank.gif',
  'img/belly1.gif',
  'img/belly2.gif',
  'img/belly3.gif'
];

function setBelly(belly) {
  var index = Math.floor(Math.random() * (belly.length));
  $('.belly').css('background-image','url(' + belly[index] + ')');
}

setBelly(belly);

// ----------
// =  CORE  =
// ----------

var core = [
  'img/blank.gif',
  // 'img/core1.gif',
];

function setCore(core) {
  var index = Math.floor(Math.random() * (core.length));
  $('.core').css('background-image','url(' + core[index] + ')');
}

setCore(core);


// -----------
// =  RIGHT  =
// -----------

var right = [
  'img/blank.gif',
  'img/right1.gif',
  'img/right2.gif',
  'img/right3.gif',
];

function setRight(right) {
  var index = Math.floor(Math.random() * (right.length));
  $('.r-hand').css('background-image','url(' + right[index] + ')');
}

setRight(right);


// ----------
// =  LEFT  =
// ----------

var left = [
  'img/blank.gif',
  'img/left1.gif',
  'img/left2.gif',
  'img/left3.gif',
];

function setLeft(left) {
  var index = Math.floor(Math.random() * (left.length));
  $('.l-hand').css('background-image','url(' + left[index] + ')');
}

setLeft(left);


// -----------
// =  SOUND  =
// -----------

const secArray = [
  'sound/s4.wav'
];

function playRandomSec() {
  const secIndex = Math.floor(Math.random() * secArray.length);
  const audioSec = new Audio(secArray[secIndex]);
  audioSec.play();
}

const minArray = [
  'sound/s5.wav'
];

function playRandomMin() {
  const minIndex = Math.floor(Math.random() * minArray.length);
  const audioMin = new Audio(minArray[minIndex]);
  audioMin.play();
}

const loop = new Audio('sound/loop1.wav');
loop.loop = true;
// loop.play();
