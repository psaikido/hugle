let rotationCount = 0;

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


function convertRotCode(code) {
  let retStr = '';

  // We might have a gsap type of string for fine tuning
  // but usually it will be a whole number.
  if (Number.isInteger(code)) {
    let absVal = Math.abs(code) * 90;

    if (code >= 0) {
      // clockwise
      retStr =  '+=' + absVal + '_cw';
    } else {
      // anti-clockwise
      retStr = '-=' + absVal + '_ccw';
    }
  } else {
    retStr = code;
  }

  updateRotationCount(retStr);
  return retStr;
}

function updateRotationCount(code) {
  if (Number.isInteger(code)) {
    if (code >= 0) {
      rotationCount += code;
    } else {
      rotationCount -= code;
    }
  } else {
    let num = parseInt(code.replace(/[^0-9]/g, ''));
    num = num / 90; // convert back to quarter turn = 1 style
    let sign = code.charAt(0);

    if (sign === '+') {
      rotationCount = rotationCount + num;
    } else if (sign === '-') {
      rotationCount = rotationCount - num;
    }
  }

  if (code != '+=0_cw') {
    console.log(code, rotationCount);
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

function showCombos() {
  $('.button-bank.combos').attr('style', 'display: block');
}
