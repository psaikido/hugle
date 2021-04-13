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

function doTimeline(ptn) {
  let obj, lbl;

  for (i = 0; i < ptn.length; i++) {
    doMessage(ptn[i]);

    obj = ptn[i][0];
    if (ptn[i][8] !== undefined) {
      lbl = ptn[i][8];
      timeline.to(obj, makeTweenObj(ptn[i]), lbl)
    } else {
      timeline.to(obj, makeTweenObj(ptn[i]))
    }
  }
}

function makeTweenObj(step) {
  //a 'step' - obj, x, y, rotation, duration, delay, motionPath, ease, label
  let twnObj = {};

  if (step[1] !== undefined) {
    twnObj['x'] = step[1];
  }

  if (step[2] !== undefined) {
    twnObj['y'] = step[2];
  }

  if (step[3] !== undefined) {
    twnObj['rotation'] = convertRotCode(step[3]);
  }

  if (step[4] !== undefined) {
    twnObj['duration'] = step[4];
  } else {
    twnObj['duration'] = 1;
  }

  if (step[5] !== undefined) {
    twnObj['delay'] = step[5];
  }

  if (step[6] !== undefined) {
    twnObj['motionPath'] = step[6];
  }

  if (step[7] !== undefined) {
    twnObj['ease'] = step[7];
  }

  return twnObj;
}

function convertRotCode(code) {
  let retStr = '';

  // We might have a gsap type of string for fine tuning
  // but usually it will be a whole number.
  if (Number.isInteger(code)) {
    let absVal = Math.abs(code) * 90;

    if (code > 0) {
      // clockwise
      return '+=' + absVal + '_cw';
    } else {
      // anti-clockwise
      return '-=' + absVal + '_ccw';
    }
  } else {
    return code;
  }
}

function doMessage(m) {
  let msg = '';

  if (m[1] !== undefined) {
    msg += 'x: ' + m[1] + ', ';
  }

  if (m[2] !== undefined) {
    msg += 'y: ' + m[2] + ', ';
  }

  if (m[3] !== undefined) {
    msg += 'rotation: ' + m[3] + ', ';
  }

  if (m[4] !== undefined) {
    msg += 'duration: ' + m[4] + ', ';
  }

  if (m[5] !== undefined) {
    msg += 'delay: ' + m[5] + ', ';
  }

  if (m[6] !== undefined) {
    msg += 'ease: ' + m[6] + ', ';
  }

  //console.log(msg);
}
