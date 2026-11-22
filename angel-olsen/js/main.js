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
  const $scroller = $('.scroller');
  const $progressCounter = $('.progress-counter');
  const $progressBar = $('.progress-bar');

  const config = {
    smoothFactor: 0.6,      // Lower = smoother glide (0.05 to 0.2)
    dragSensitivity: 1.8,   // Drag/swipe speed multiplier
    bufferSize: 2,          // Number of full sequence clones on each side
    keyScrollStep: 350      // Pixels moved per Left/Right arrow press
  };

  let targetScrollX = 0;
  let currentScrollX = 0;
  let currentProgressScale = 0;
  let targetProgressScale = 0;
  let lastPercentage = 0;
  let sequenceWidth = 0;
  let isAnimating = false;

  // Drag / Touch state
  let isDown = false;
  let lastPointerX = 0;
  let velocityX = 0;

  const lerp = (start, end, factor) => start + (end - start) * factor;

  const setupScroll = () => {
    $scroller.find('.clone-section').remove();

    const $originalSections = $scroller.find('section:not(.clone-section)');
    let width = 0;

    $originalSections.each(function () {
      width += $(this).outerWidth(true);
    });

    // Clone sections before originals
    for (let i = -config.bufferSize; i < 0; i++) {
      $originalSections.each(function (index) {
        $(this)
          .clone(true)
          .addClass('clone-section')
          .attr('aria-hidden', 'true')
          .attr('data-clone-index', `${i}-${index}`)
          .insertBefore($originalSections.first());
      });
    }

    // Clone sections after originals
    for (let i = 1; i <= config.bufferSize; i++) {
      $originalSections.each(function (index) {
        $(this)
          .clone(true)
          .addClass('clone-section')
          .attr('aria-hidden', 'true')
          .attr('data-clone-index', `${i}-${index}`)
          .appendTo($scroller);
      });
    }

    $scroller.css('width', `${width * (1 + config.bufferSize * 2)}px`);

    targetScrollX = width * config.bufferSize;
    currentScrollX = targetScrollX;
    $scroller.css('transform', `translate3d(-${currentScrollX}px, 0, 0)`);

    return width;
  };

  const checkBoundaryAndReset = () => {
    const minBound = sequenceWidth * (config.bufferSize - 0.5);
    const maxBound = sequenceWidth * (config.bufferSize + 0.5);

    if (currentScrollX > maxBound) {
      targetScrollX -= sequenceWidth;
      currentScrollX -= sequenceWidth;
      $scroller.css('transform', `translate3d(-${currentScrollX}px, 0, 0)`);
      return true;
    }

    if (currentScrollX < minBound) {
      targetScrollX += sequenceWidth;
      currentScrollX += sequenceWidth;
      $scroller.css('transform', `translate3d(-${currentScrollX}px, 0, 0)`);
      return true;
    }

    return false;
  };

  const updateProgress = (forceReset = false) => {
    const basePosition = sequenceWidth * config.bufferSize;
    const currentPosition = (currentScrollX - basePosition) % sequenceWidth;
    let percentage = (currentPosition / sequenceWidth) * 100;

    if (percentage < 0) percentage += 100;

    const isWrapping =
      (lastPercentage > 80 && percentage < 20) ||
      (lastPercentage < 20 && percentage > 80) ||
      forceReset;

    $progressCounter.text(`${Math.round(percentage)}%`);
    targetProgressScale = percentage / 100;

    if (isWrapping) {
      currentProgressScale = targetProgressScale;
      $progressBar.css('transform', `scaleX(${currentProgressScale})`);
    }

    lastPercentage = percentage;
  };

  const startAnimation = (needsReset = false) => {
    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(() => animate(needsReset));
    }
  };

  const animate = (forceProgressReset = false) => {
    currentScrollX = lerp(currentScrollX, targetScrollX, config.smoothFactor);
    $scroller.css('transform', `translate3d(-${currentScrollX}px, 0, 0)`);

    updateProgress(forceProgressReset);

    if (!forceProgressReset) {
      currentProgressScale = lerp(
        currentProgressScale,
        targetProgressScale,
        config.smoothFactor
      );
      $progressBar.css('transform', `scaleX(${currentProgressScale})`);
    }

    if (Math.abs(targetScrollX - currentScrollX) < 0.05) {
      currentScrollX = targetScrollX;
      isAnimating = false;
    } else {
      requestAnimationFrame(() => animate());
    }
  };

  // Initialize
  sequenceWidth = setupScroll();
  updateProgress(true);

  // 1. Mouse Wheel & Trackpad
  $container[0].addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      targetScrollX += delta;
      startAnimation(checkBoundaryAndReset());
    },
    { passive: false }
  );

  // 2. Unified Pointer / Touch Drag with Momentum
  const onPointerDown = (clientX) => {
    isDown = true;
    lastPointerX = clientX;
    velocityX = 0;
  };

  const onPointerMove = (clientX) => {
    if (!isDown) return;
    const deltaX = (lastPointerX - clientX) * config.dragSensitivity;
    lastPointerX = clientX;
    velocityX = deltaX;
    targetScrollX += deltaX;
    startAnimation(checkBoundaryAndReset());
  };

  const onPointerUp = () => {
    if (!isDown) return;
    isDown = false;
    // Apply flick momentum
    targetScrollX += velocityX * 5;
    startAnimation(checkBoundaryAndReset());
  };

  $container.on('touchstart', (e) => onPointerDown(e.originalEvent.touches[0].clientX));
  $container.on('touchmove', (e) => onPointerMove(e.originalEvent.touches[0].clientX));
  $container.on('touchend', onPointerUp);

  // 3. Keyboard Arrow Navigation
  $(window).on('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      targetScrollX += config.keyScrollStep;
      startAnimation(checkBoundaryAndReset());
    } else if (e.key === 'ArrowLeft') {
      targetScrollX -= config.keyScrollStep;
      startAnimation(checkBoundaryAndReset());
    }
  });

  // 4. Debounced Window Resize
  let resizeTimer;
  $(window).on('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      sequenceWidth = setupScroll();
      updateProgress(true);
    }, 150);
  });

  // Helper: Scroll to a specific original section by index (0, 1, 2...)
  const scrollToSection = (index) => {
    const $originalSections = $scroller.find('section:not(.clone-section)');
    const $targetSection = $originalSections.eq(index);

    if (!$targetSection.length) return;

    // 1. Calculate the section's left-edge offset inside the sequence
    let sectionOffsetInSequence = 0;
    $originalSections.slice(0, index).each(function () {
      sectionOffsetInSequence += $(this).outerWidth(true);
    });

    // 2. Subtract half the remaining viewport width to center the element
    const viewportWidth = $container.width();
    const targetWidth = $targetSection.outerWidth(true);
    const centerAdjustment = (viewportWidth - targetWidth) / 2;
    
    const centeredOffset = sectionOffsetInSequence - centerAdjustment;

    // 3. Find current normalized position in the 0 -> sequenceWidth loop
    const basePosition = sequenceWidth * config.bufferSize;
    let currentRelative = (currentScrollX - basePosition) % sequenceWidth;
    if (currentRelative < 0) currentRelative += sequenceWidth;

    // 4. Calculate the shortest circular path
    let delta = centeredOffset - currentRelative;

    if (delta > sequenceWidth / 2) {
      delta -= sequenceWidth;
    } else if (delta < -sequenceWidth / 2) {
      delta += sequenceWidth;
    }

    // 5. Scroll smoothly to the centered position
    targetScrollX = currentScrollX + delta;
    startAnimation(checkBoundaryAndReset());
  };


  // Navigation Click Handler
  $('.nav-menu button').on('click', function () {
    const targetIndex = parseInt($(this).data('target'), 10);
    
    $('.nav-menu button').removeClass('active');
    $(this).addClass('active');
    
    scrollToSection(targetIndex);
  });

  scrollToSection(0);

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
});
