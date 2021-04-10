function reset() {
  timeline.clear();

  gsap.set([k, kImg], {
    x: 0,
    y: 0,
    rotation: 0,
  });

  stepCount = 1;
  timeline.clear();
}

function stepBack(stp) {
  console.log(stp);
  stepCount -= 1;
  var stepLabelName = 'step-' + stp;
  timeline.tweenTo(stepLabelName);
}

function stop() {
  timeline.pause();
}

function stepForward(stp) {
  console.log(stp);
  var stepLabelName = 'step-' + stp;
  timeline.tweenTo(stepLabelName);
  stepCount += 1;
}

function playTimeline() {
  timeline.restart();
}

function report(msg) {
  $('#timeline-msg').text(msg);
}
