genesis();

function genesis() {
  var world = $('.world');

  var water = "<div class='tile water'></div>";
  var waterValue = +300;
  var waterNr = 0;

  while (waterNr < waterValue) {
    world.append(water);
    waterNr++;
  }

  var sand = "<div class='tile sand'></div>";
  var sandValue = +170;
  var sandNr = 0;

  while (sandNr < sandValue) {
    world.append(sand);
    sandNr++;
  }

  var mystic = "<div class='tile mystic'></div>";
  var mysticValue = +10;
  var mysticNr = 0;

  while (mysticNr < mysticValue) {
    world.append(mystic);
    mysticNr++;
  }

  world.addClass('random');

}

var random = document.querySelector('.random');
for (var i = random.children.length; i >= 0; i--) {
  random.appendChild(random.children[Math.random() * i | 0]);
}

