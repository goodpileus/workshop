
$(document).ready(function () {
  const $container = $('.container');
  const $scroller = $('.scroller');
  const $progressCounter = $('.progress-counter h1');
  const $progressBar = $('.progress-bar');
  const $sections = $scroller.find('section');

  const smoothFactor = 0.5;
  const touchSensitivity = 2.5;
  const bufferSize = 2;

  let targetScrollX = 0;
  let currentScrollX = 0;
  let isAnimating = false;
  let currentProgressScale = 0;
  let targetProgressScale = 0;
  let lastPercentage = 0;

  let isDown = false;
  let lastTouchX = 0;
  let touchVelocity = 0;
  let lastTouchTime = 0;

  const lerp = (start, end, factor) => start + (end - start) * factor;

  const setupScroll = () => {
    $scroller.find('.clone-section').remove();

    const $originalSections = $scroller.find('section:not(.clone-section)');
    const $templateSections = $originalSections.length > 0 ? $originalSections : $sections;

    let sequenceWidth = 0;
    $templateSections.each(function () {
      sequenceWidth += parseFloat($(this).css('width'));
    });

    for (let i = -bufferSize; i < 0; i++) {
      $templateSections.each(function (index) {
        $(this)
          .clone()
          .addClass('clone-section')
          .attr('data-clone-index', `${i}-${index}`)
          .appendTo($scroller);
      });
    }

    if ($originalSections.length === 0) {
      $templateSections.each(function (index) {
        $(this)
          .clone()
          .attr('data-clone-index', `0-${index}`)
          .appendTo($scroller);
      });
    }

    for (let i = 1; i <= bufferSize; i++) {
      $templateSections.each(function (index) {
        $(this)
          .clone()
          .addClass('clone-section')
          .attr('data-clone-index', `${i}-${index}`)
          .appendTo($scroller);
      });
    }

    $scroller.css('width', `${sequenceWidth * (1 + bufferSize * 2)}px`);
    targetScrollX = sequenceWidth * bufferSize;
    currentScrollX = targetScrollX;
    $scroller.css('transform', `translateX(-${currentScrollX}px)`);

    return sequenceWidth;
  };

  const checkBoundaryAndReset = (sequenceWidth) => {
    if (currentScrollX > sequenceWidth * (bufferSize + 0.5)) {
      targetScrollX -= sequenceWidth;
      currentScrollX -= sequenceWidth;
      $scroller.css('transform', `translateX(-${currentScrollX}px)`);
      return true;
    }

    if (currentScrollX < sequenceWidth * (bufferSize - 0.5)) {
      targetScrollX += sequenceWidth;
      currentScrollX += sequenceWidth;
      $scroller.css('transform', `translateX(-${currentScrollX}px)`);
      return true;
    }

    return false;
  };

  const updateProgress = (sequenceWidth, forceReset = false) => {
    const basePosition = sequenceWidth * bufferSize;
    const currentPosition = (currentScrollX - basePosition) % sequenceWidth;
    let percentage = (currentPosition / sequenceWidth) * 100;

    if (percentage < 0) {
      percentage = 100 + percentage;
    }

    const isWrapping =
      (lastPercentage > 80 && percentage < 20) ||
      (lastPercentage < 20 && percentage > 80) ||
      forceReset;

    $progressCounter.text(`${Math.round(percentage)}`);
    targetProgressScale = percentage / 100;

    if (isWrapping) {
      currentProgressScale = targetProgressScale;
      $progressBar.css('transform', `scaleX(${currentProgressScale})`);
    }

    lastPercentage = percentage;
  };

  const animate = (sequenceWidth, forceProgressReset = false) => {
    currentScrollX = lerp(currentScrollX, targetScrollX, smoothFactor);
    $scroller.css('transform', `translateX(-${currentScrollX}px)`);

    updateProgress(sequenceWidth, forceProgressReset);

    if (!forceProgressReset) {
      currentProgressScale = lerp(
        currentProgressScale,
        targetProgressScale,
        smoothFactor
      );
      $progressBar.css('transform', `scaleX(${currentProgressScale})`);
    }

    if (Math.abs(targetScrollX - currentScrollX) < 0.01) {
      isAnimating = false;
    } else {
      requestAnimationFrame(() => animate(sequenceWidth));
    }
  };

  const sequenceWidth = setupScroll();
  updateProgress(sequenceWidth, true);
  $progressBar.css('transform', `scaleX(${currentProgressScale})`);

  $container.on('wheel', function (e) {
    e.preventDefault();
    targetScrollX += e.originalEvent.deltaY;

    const needsReset = checkBoundaryAndReset(sequenceWidth);

    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(() => animate(sequenceWidth, needsReset));
    }
  });

  $('.draggable').draggable();

});