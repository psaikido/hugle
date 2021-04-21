function reset() {
  timeline.clear();

  gsap.set([k, kImg], {
    x: 0,
    y: 0,
    rotation: 0,
  });

  stopDude();
}

function startDude() {
  dudeTimeline.resume();
}

function stopDude() {
  dudeTimeline.pause();
}

function showCombos() {
  $('.button-bank.combos').attr('style', 'display: block');
}
