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
}

// 5 sec
function five() {
  console.log("five!");
  playRandomSec();
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
}

// 15 sec
function fifteen() {
  console.log("fifteen!");
  playRandomSec();
  $("#earth").removeClass('zero');
  $("#earth").addClass('fifteen');
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
}

// 25 sec
function twentyFive() {
  console.log("twentyfive!");
  playRandomSec();
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
}

// 35 sec
function thirtyFive() {
  console.log("thirtyfive!");
  playRandomSec();
}

// 40 sec
function forty() {
  console.log("forty!");
  $("#ritual").html('commands my attention with infernal energy<br> and i remember');

  playRandomSec();

  setBackground(bgs);
  setHead(heads);
  setFeet(feet);
  setBelly(belly);
}

// 45 sec
function fortyFive() {
  console.log("fortyfive!");
  playRandomSec();
  $("#earth").removeClass('thirty');
  $("#earth").addClass('fortyfive');
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
}

// 55 sec
function fiftyFive() {
  console.log("fiftyfive!");
  playRandomSec();
}

// -------------
// =  RITUALS  =
// -------------
var rTwo = [
  'to the light of this screen<br> and my ritual of forgetting,',
  "to the network's empty wisdom<br> and my ritual of forgetting,"
];

function ritualTwo(rTwo) {
  var index = Math.floor(Math.random() * (rTwo.length));
  $('#ritual').html(rTwo[index]);
}


var rThree = [
  'comforted by the rhythm of my own echoes,<br> hollowed by their diminishing fidelity,',
  'electrified by the whims of strangers,<br> extinguished by so much accumulated spite,'
];

function ritualThree(rThree) {
  var index = Math.floor(Math.random() * (rThree.length));
  $('#ritual').html(rThree[index]);
}

var rFour = [
  'when the light from the star overhead —<br> the light that gives me my earthly shadow —',
  'when the light from the star overhead —<br> the light that became my only friend —'
];

function ritualFour(rFour) {
  var index = Math.floor(Math.random() * (rFour.length));
  $('#ritual').html(rFour[index]);
}

var rSix = [
  'the flowers on my windowsill are turning to dust',
  'the stone is more enchanting than the phone',
  'a shadow conforms to its surface',
  "i've not been gentle with myself",
  'bitterness swiftly takes the place of sincerity'
];

function ritualSix(rSix) {
  var index = Math.floor(Math.random() * (rSix.length));
  $('#ritual').html(rSix[index]);
}

// ----------------
// =  BACKGROUND  =
// ----------------

var bgs = [
  'img/flower-1.gif',
  'img/frog-1.gif',
  'img/sun-3.gif'
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
  'img/head1.png',
  'img/head2.png',
  'img/head3.png'
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
  'img/feet1.png',
  'img/feet2.png'
];

function setFeet(feet) {
  var index = Math.floor(Math.random() * (feet.length));
  $('.feet').css('background-image','url(' + feet[index] + ')');
}

setFeet(feet);



// ----------
// =  BELLY  =
// ----------

var belly = [
  'img/belly1.png',
  'img/belly2.png',
  'img/belly3.png'
];

function setBelly(belly) {
  var index = Math.floor(Math.random() * (belly.length));
  $('.belly').css('background-image','url(' + belly[index] + ')');
}

setBelly(belly);


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
