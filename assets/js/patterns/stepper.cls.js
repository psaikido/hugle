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

  spin(rot, delay = 0, duration = 1) {
    this.rotation = rot;
    this.delay = delay;
    this.duration = duration;

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

  land(duration = 1) {
    this.fly(0, 0, duration, 0, 0);
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
