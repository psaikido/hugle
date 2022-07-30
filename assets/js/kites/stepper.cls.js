/* Stepper class. Hugh Carroll - hughie@carrollonline.co.uk.
 *
 * Green Sock Animation Platform, 'GSAP', is an object that 
 * handles the animation of dom objects.
 * Rather than code it directly, this Stepper class creates 
 * an array of values out of methods like 'fly' and 'spin'
 * to then feed into the creation of a 'timeline' that is then
 * 'tweened' by gsap to make a kite fly around.
 * It's done like this so that there is a more human readable set
 * of flight patterns that can have elements that are reusable.
 *
 * Gsap movements are measured from an object's starting position.
 * For left/right values we decrease/increase from the 'centre' of 368px.
 */
let lf4 = -360;
let lf3 = -270;
let lf2 = -180;
let lf1 = -90;
let centre = 0;
let xMid = 368;
let rt1 = 90;
let rt2 = 180;
let rt3 = 270;
let rt4 = 360;
let rtIsh = 135;
let rt = 315;

/* y values are 0 at the top and 400 at the bottom.
 * The displacement values are negative because the kite's 
 * starting position is 365px.
 */
let ground = 0;
let low = -45;
let lowIsh = -105;
let mid = -165;
let hiIsh = -245; 
let hi = -325;

class Stepper {
    constructor() {
        this.obj;
        this.objInner;
        this.objCurrent;

        this.x;
        this.rotation;
        this.delay;
        this.duration;
        this.motionPath;
        this.ease;
        this.label;
        this.transformOrigin = '50% 35%';

        this.rotationCount = 0;
        this.ptn = [];
    }

    setStart(o, oInner, rotation = 0) {
        this.obj = this.objCurrent = o;
        this.objInner = oInner;
        this.rotation = rotation;
        this.delay = 0;
        this.duration = .1;

        this._setDimensions();
        this._addStep();
        return this;
    }

    launch(y, duration = 1, rot = 0) {
        this.y = y;
        this.duration = duration;
        this.rotation = rot;
        this.delay = 1;

        this._addStep();
        return this;
    }

    tipTurn1(origin, rot, delay = 0, duration = 1, label) {
        this.transformOrigin = origin;
        this.spin(rot, delay, duration, label);
    }

    tipTurn(origin, x, y, rot = 0, delay = .5, duration = 1) {
        this.objCurrent = this.obj;
        this.transformOrigin = origin;
        this.x = x;
        this.y = y;
        this.rotation = rot;
        this.delay = delay;
        this.duration = duration;

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

    fly(x, y, rot = 0, delay = .5, duration = 1) {
        this.objCurrent = this.obj;
        this.x = x;
        this.y = y;
        this.rotation = rot;
        this.delay = delay;
        this.duration = duration;

        this._addStep();
        return this;
    }

    land(duration = 1, delay = .5) {
        this.fly(this.x, ground, 0, delay, duration);
        return this;
    }

    diveStop(y, duration = 1) {
        this.y = y;
        this.duration = duration;
        this.ease = 'power1.in';

        this._addStep();
        return this;
    }

    path(mp, dur, rotationCount = 0) {
        this.x = undefined;
        this.y = undefined;
        this.motionPath = mp;
        this.duration = dur;
        this._convertRotCode(rotationCount);

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
            obj = this.ptn[i][0];
            if (this.ptn[i][9] !== undefined) {
                lbl = this.ptn[i][9];
                timeline.to(obj, this._makeTweenObj(this.ptn[i]), lbl)
            } else {
                timeline.to(obj, this._makeTweenObj(this.ptn[i]))
            }
        }
    }

    _setDimensions() {
        // Recalculate initial settings for responsiveness.
        let skyWidth = this.obj.offsetParent.offsetWidth;
        xMid = skyWidth / 2;
        lf4 = xMid - skyWidth + 40;
        rt = xMid - 50;
    }

    _makeTweenObj(step) {
        //a 'step' - obj, x, y, rotation, duration, delay, motionPath, ease, transformOrigin, label 
        let twnObj = {};

        if (step[1] !== undefined) {
            twnObj['x'] = step[1];
        }

        if (step[2] !== undefined) {
            twnObj['y'] = step[2];
        }

        if (step[3] !== undefined) {
            twnObj['rotation'] = this._convertRotCode(step[3]);
        }

        if (step[4] !== undefined) {
            twnObj['delay'] = step[4];
        }

        if (step[5] !== undefined) {
            twnObj['duration'] = step[5];
        } else {
            twnObj['duration'] = 1;
        }

        if (step[6] !== undefined) {
            twnObj['motionPath'] = step[6];
        }

        if (step[7] !== undefined) {
            twnObj['ease'] = step[7];
        }

        if (step[8] !== undefined) {
            twnObj['transformOrigin'] = step[8];
        }

        // index 9 is used separately for the tween's label

        return twnObj;
    }

    _addStep() {
        let step = [
            this.objCurrent,
            this.x,
            this.y,
            this.rotation,
            this.delay,
            this.duration,
            this.motionPath,
            this.ease,
            this.transformOrigin,
            this.label,
        ];

        this.ptn.push(step);
        this._resetVars();
    }

    _resetVars() {
        this.objCurrent = this.obj;
        this.lastX = this.x;
        this.x = undefined;
        this.lastY = this.y;
        this.y = undefined;
        this.rotation = undefined;
        this.delay = undefined;
        this.duration = undefined;
        this.motionPath = undefined;
        this.ease = undefined;
        this.transformOrigin = '47% 32%';
        this.label = undefined;
    }

    _convertRotCode(code) {
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

        this._updateRotationCount(retStr);
        return retStr;
    }

    _updateRotationCount(code) {
        if (Number.isInteger(code)) {
            if (code >= 0) {
                this.rotationCount += code;
            } else {
                this.rotationCount -= code;
            }
        } else {
            let num = parseInt(code.replace(/[^0-9]/g, ''));
            num = num / 90; // convert back to quarter turn = 1 style
            let sign = code.charAt(0);

            if (sign === '+') {
                this.rotationCount = this.rotationCount + num;
            } else if (sign === '-') {
                this.rotationCount = this.rotationCount - num;
            }
        }

        if (code != '+=0_cw') {
            console.log(code, this.rotationCount);
        }
    }
}
