

buildWorld();

function buildWorld() {
  var grid = $('.grid');

  var water = "<div class='tile water'></div>";
  var waterValue = +200;
  var waterNr = 0;

  while (waterNr < waterValue) {
    $('.grid').append(water);
    waterNr++;
  }

  var sand = "<div class='tile sand'></div>";
  var sandValue = +100;
  var sandNr = 0;

  while (sandNr < sandValue) {
    $('.grid').append(sand);
    sandNr++;
  }

  $('.grid').addClass('random');

}

var random = document.querySelector('.random');
for (var i = random.children.length; i >= 0; i--) {
  random.appendChild(random.children[Math.random() * i | 0]);
}

