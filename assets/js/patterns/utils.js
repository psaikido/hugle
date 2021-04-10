function reset() {
  timeline.clear();

  gsap.set([k, kImg], {
    x: 0,
    y: 0,
    rotation: 0,
  });
}

function stepForward() {
  timeline.tweenTo('1');
}

function report(msg) {
  $('#timeline-msg').text(msg);
}
