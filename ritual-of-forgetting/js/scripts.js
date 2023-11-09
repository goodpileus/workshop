let seconds = new Date().getSeconds();

setInterval( function() {
  seconds = new Date().getSeconds();
  $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
  console.log(seconds);
  
  if (seconds == 0) {
    zero();
  } else if (seconds == 10) {
    ten();
  } else if (seconds == 20) {
    twenty();
  } else if (seconds == 30) {
    thirty();
  } else if (seconds == 40) {
    forty();
  } else if (seconds == 50) {
    fifty();
  }
}, 1000);

setTimeout(function() {
  init();
}, 1000)

function init() {
  if (seconds <= 10){
    $("#ritual").html('as i sit, in thrall');
  } else if (seconds <= 20){
    $("#ritual").html('to the light of this screen<br> and my ritual of forgetting,');
  } else if (seconds <= 30){
    $("#ritual").html('comforted by the rhythm of my own echoes,<br> hollowed by their diminishing fidelity,');
  } else if (seconds <= 40){
    $("#ritual").html('when the other light, from the star overhead —<br> the one that gives me my earthly shadow —');
  } else if (seconds <= 50){
    $("#ritual").html('commands my attention with infernal energy<br> and i remember');
  } else if (seconds <= 60){
    $("#ritual").html('the flowers on my windowsill are turning to dust');
  }
}

function zero() {
  console.log("zero!");
  $("#ritual").html('as i sit, in thrall');
  $("#earth").removeClass('fifty');
  $("#earth").addClass('zero');

  playRandomMin();

  setBackground(bgs);
  setHead(heads);
  setFeet(feet);
  setBelly(belly);
}

function ten() {
  console.log("ten!");
  $("#ritual").html('to the light of this screen<br> and my ritual of forgetting,');
  $("#earth").removeClass('zero');
  $("#earth").addClass('ten');

  playRandomSec();

  setBackground(bgs);
  setHead(heads);
  setFeet(feet);
  setBelly(belly);
}

function twenty() {
  console.log("twenty!");
  $("#ritual").html('comforted by the rhythm of my own echoes,<br> hollowed by their diminishing fidelity,');
  $("#earth").removeClass('ten');
  $("#earth").addClass('twenty');

  playRandomSec();

  setBackground(bgs);
  setHead(heads);
  setFeet(feet);
  setBelly(belly);
}

function thirty() {
  console.log("thirty!");
  $("#ritual").html('when the other light, from the star overhead —<br> the one that gives me my earthly shadow —');
  $("#earth").removeClass('twenty');
  $("#earth").addClass('thirty');

  playRandomSec();

  setBackground(bgs);
  setHead(heads);
  setFeet(feet);
  setBelly(belly);
}

function forty() {
  console.log("forty!");
  $("#ritual").html('commands my attention with infernal energy<br> and i remember');
  $("#earth").removeClass('thirty');
  $("#earth").addClass('forty');

  playRandomSec();

  setBackground(bgs);
  setHead(heads);
  setFeet(feet);
  setBelly(belly);
}

function fifty() {
  console.log("fifty!");
  $("#ritual").html('the flowers on my windowsill are turning to dust');
  $("#earth").removeClass('forty');
  $("#earth").addClass('fifty');

  playRandomSec();

  setBackground(bgs);
  setHead(heads);
  setFeet(feet);
  setBelly(belly);
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
  // var target = document.getElementById("earth");
  // target.style.backgroundImage = "url(" + bgs[index] + ")";
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

const loop = new Audio('../sound/loop1.wav');
loop.loop = true;
// loop.play();
