// Gsap movements are measured from an object's starting position.
// For left/right values we decrease/increase from the 'centre' of 380px.
const centre = 0;
const lf = -335;
const lfIsh = -135;
const xMid = 380;
const rtIsh = 135;
const rt = 315;

// y values are 0 at the top and 400 at the bottom.
// The displacement values are negative because the kite's 
// starting position is 365px.
const ground = -5;
const low = -45;
const lowIsh = -100;
const mid = -200;
const hiIsh = -280; 
const hi = -335;

class Stepper {
  constructor() {
    this.obj;
    this.objInner;
    this.objCurrent;
    this.x;
    this.y;
    this.rotation;
    this.duration;
    this.delay;
    this.motionPath;
    this.ease;
    this.label;
    
    //[obj, x, y, rotation, duration, delay, motionPath, ease, label]
    this.ptn = [];
  }

  setStart(o, oInner, rotation = 0) {
    this.obj = this.objCurrent = o;
    this.objInner = oInner;
    this.rotation = rotation;
    this.duration = .1;
    this.delay = 0;

    this._addStep();
    return this;
  }

  launch(y, duration = 1, rot = 0) {
    this.y = y;
    this.duration = duration;
    this.rotation = rot;
    this.delay = 0;

    this._addStep();
    return this;
  }

  spin(rot, delay = 0, duration = 1, label) {
    this.rotation = rot;
    this.delay = delay;
    this.duration = duration;
    this.label = label;

    this._addStep();
    return this;
  }

  innerSpin(rot, delay = 0, duration = 1, label) {
    this.objCurrent = this.objInner;
    this.rotation = rot;
    this.delay = delay;
    this.duration = duration;
    this.label = label;

    this._addStep();
    return this;
  }

  fly(x, y, duration = 1, rot = 0, delay = .5) {
    this.objCurrent = this.obj;
    this.x = x;
    this.y = y;
    this.duration = duration;
    this.rotation = rot;
    this.delay = delay;

    this._addStep();
    return this;
  }

  land(duration = 1, delay = .5) {
    this.fly(this.x, ground, duration, 0, delay);
    return this;
  }

  diveStop(y, duration = 1) {
    this.y = y;
    this.duration = duration;
    this.ease = 'power1.in';

    this._addStep();
    return this;
  }

  path(mp, dur) {
    this.x = undefined;
    this.y = undefined;
    this.motionPath = mp;
    this.duration = dur;

    this._addStep();
    return this;
  }

  testPath(path) {
    for (var i = 0; i < path.length; i++) {
      var x = xMid + path[i].x;
      var y = 400 - Math.abs(path[i].y);

      var dv = $('<div class="pathTestPoint"/>')
        .css({
          left: x,
          top: y
        })
        .attr('title', i)
        .appendTo('#wind-window');
    }
  }

  doTimeline() {
    let obj, lbl, i;

    for (i = 0; i < this.ptn.length; i++) {
      //doMessage(ptn[i]);

      obj = this.ptn[i][0];
      if (this.ptn[i][8] !== undefined) {
        lbl = this.ptn[i][8];
        timeline.to(obj, this.makeTweenObj(this.ptn[i]), lbl)
      } else {
        timeline.to(obj, this.makeTweenObj(this.ptn[i]))
      }
    }
  }

  makeTweenObj(step) {
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
  _addStep() {
    let step = [
      this.objCurrent,
      this.x,
      this.y,
      this.rotation,
      this.duration,
      this.delay,
      this.motionPath,
      this.ease,
      this.label
    ];
    this.ptn.push(step);
    this._resetPtn();
  }

  _resetPtn() {
    this.objCurrent = this.obj;
    this.x = undefined;
    this.y = undefined;
    this.rotation = undefined;
    this.duration = undefined;
    this.delay = undefined;
    this.motionPath = undefined;
    this.ease = undefined;
    this.label = undefined;
  }
}
