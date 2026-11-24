let hasDragged = false;

$(".draggable").each(function () {
  var randomtop = Math.floor(
      Math.random() * ($(".week").height() - $(this).height() - 20)
    ),
    randomleft = Math.floor(
      Math.random() * ($(".week").width() - $(this).width() - 20)
    ),
    randomzindex = Math.floor(Math.random() * 30);
  $(this).css({
    top: randomtop,
    left: randomleft,
    "z-index": randomzindex,
  });
});

$(document).ready(function () {
  const $container = $('.container');
  const $track = $('.scroller');
  const $items = $track.children();

  // Clone items before and after the original set
  $items.clone().appendTo($track);
  $items.clone().prependTo($track);

  // Use [0] to access the native DOM scrollWidth property
  const singleSetWidth = $track[0].scrollWidth / 3;
  const threshold = 5; // Buffer in pixels so the browser never hits 0

  // Start in the middle set
  $container.scrollLeft(singleSetWidth);

  $container.on('scroll', function () {
    const currentScroll = $container.scrollLeft();

    if (currentScroll >= singleSetWidth * 2 - threshold) {
      // Approaching right boundary -> jump back one set
      $container.scrollLeft(currentScroll - singleSetWidth);
    } else if (currentScroll <= threshold) {
      // Approaching left boundary -> jump forward one set BEFORE hitting 0
      $container.scrollLeft(currentScroll + singleSetWidth);
    }
  });

  $('.draggable').draggable({
    stack: '.draggable',
    distance: 10,
    start: function( event, ui ) {
      hasDragged = true;
      console.log('dragged = ' + hasDragged);
    },
    stop: function( event, ui ) {
      hasDragged = false;
      console.log('dragged = ' + hasDragged);
    }
  });

});

$('.draggable').on('mouseup', function () {
  if (!hasDragged) {
    $(this).toggleClass('active');
  }
    console.log('clicked!');

});
