class Patterns {
  constructor(gsap, k, kImg, timeline) {
    this.gsap = gsap;
    this.k = k;
    this.kImg = kImg;
    this.timeline = timeline;

    // Gsap movements are measured from an objects starting position.
    // For left/right values we decrease/increase from the 'centre' of 385px.
    this.lf = -335;
    this.lfIsh = -135;
    this.xMid = 385;
    this.rtIsh = 135;
    this.rt = 315;

    // y values are 0 at the top and 400 at the bottom.
    // The displacement values are negative because the kite's 
    // starting position is 365px.
    this.ground = -35;
    this.low = -45;
    this.lowIsh = -125;
    this.yMid = -200;
    this.hiIsh = -280; 
    this.hi = -335;

    let path = [
    ];
    //this.testPath(path);
  }

  reset() {
      this.gsap.set([this.k, this.kImg], {
          x: 0,
          y: 0,
          rotation: 0
      });
  }

  testPath(path) {
    for (point in path) {
      var x = this.xMid + path[point].x;
      var y = 400 - Math.abs(path[point].y);

      var dv = $('<div class="pathTestPoint"/>')
        .css({
          left: x,
          top: y
        })
        .attr('title', point)
        .appendTo('#wind-window');
    }
  }

  L1() {
    this.reset();
    this.timeline
        .to(this.k, {y: this.yMid})
        .to(this.k, {rotation: '-90_ccw'})
        .to(this.k, {x: this.lf, duration: 2})
        .to(this.k, {rotation: '90_cw'})
        .to(this.k, {x: this.rt, duration: 3})
        .to(this.k, {rotation: '-90_ccw'})
        .to(this.k, {x: 0, duration: 1.5})
        .to(this.k, {rotation: '0_cw'})
        .to(this.k, {y: 0, duration: 2})
  }

  L2() {
    this.reset();

    this.timeline
      .to(this.k, {y: this.yMid})
      .to(this.k, {rotation: '-90_ccw'})
      .to(this.k, {x: this.lf, duration: 2})
      .to(this.k, {rotation: '90_cw'})
      .to(this.k, {x: this.rt, duration: 3})
      .to(this.k, {rotation: '-90_ccw'})
      .to(this.k, {x: 0, duration: 1.5})
      .to(this.k, {rotation: '270_cw'})
      .to(this.k, {x: this.lf, duration: 2})
      .to(this.k, {rotation: '90_cw'})
      .to(this.k, {x: 0, duration: 1.5})
      .to(this.k, {rotation: '450_ccw'})
      .to(this.k, {rotation: '360_shortest', delay: 0})
      .to(this.k, {y: this.hi})
      .to(this.k, {rotation: '180_cw'})
      .to(this.k, {
        y: this.low,
        duration: .5,
        ease: 'sine.in'
      })
      .to(this.k, {rotation: '0_cw'})
      .to(this.k, {y: 0})
  }

  L3() {
    this.reset();

    timeline
      .to(this.k, {rotation: '180_ccw', duration: 0})
      .to(this.k, {y: this.low})
      .to(this.k, {rotation: '0_cw', duration: .5})
      .to(this.k, {y: this.yMid})
      .to(this.k, {x: this.lfIsh})
      .to(this.k, {rotation: '-720_ccw', duration: 2})
      .to(this.k, {x: this.rtIsh, duration: 2})
      .to(this.k, {rotation: '0_cw', duration: 2})
      .to(this.k, {x: 0, duration: 1})
      .to(this.k, {rotation: '90_cw', duration: 1})
      .to(this.k, {y: this.lowIsh, duration: 1.5})
      .to(this.k, {rotation: '-90_ccw', duration: 1, delay: 0})
      .to(this.k, {y: 0 - 5, duration: 1.5, delay: 0})
  }

  L4() {
    this.reset();

    timeline
      .to(this.kImg, {rotation: '-180_cw'})
      .to(this.k, {y: -40})
      .to (this.k, {
        duration: 4,
        ease: 'sine.inOut', 
        motionPath: { 
          path: [
            {x: -262, y: -25},
            {x: -310, y: -165},
          ],
          autoRotation: false,
          start: 0,
          end: 1,
          curviness: .3
        }
      })
      .to(this.kImg, {rotation: '-90_cw', delay: 2}, "<")
      .to(this.k, {x: this.lfIsh, duration: 2})
      .to(this.kImg, {rotation: '270_cw'})
      .to(this.kImg, {rotation: '-90_ccw'})
      .to(this.kImg, {rotation: '90_ccw'})
      .to(this.k, {x: this.rtIsh, duration: 2})
      .to(this.kImg, {rotation: '450_cw'})
      .to(this.kImg, {rotation: '90_ccw'})
      .to(this.k, {x: 0, duration: 2})
      .to(this.k, {y: 0 - 5, duration: 2.5})
      .to(this.k, {y: this.yMid, duration: 3})
      .to(this.kImg, {rotation: '-90_ccw', delay: 0})
      .to(this.k, {y: 0 - 5, duration: 2.5})
      .to(this.k, {y: this.yMid, duration: 3})
      .to(this.k, {x: this.lf, duration: 2})
      .to(this.k, {
        duration: 8,
        ease: 'sine.inOut', 
        motionPath: { 
          path: [
            {x: this.lf, y: this.yMid},
            {x: this.lf, y: this.low},
            {x: this.rt, y: this.low},
            {x: this.rt, y: this.yMid},
            {x: this.rtIsh, y: this.hi},
            {x: 0, y: this.hi},
          ],
          start: 0,
          end: 1,
          curviness: .4
        }
      }, 'underSweep')
      .to(this.kImg, {rotation: '-180_ccw'}, "underSweep+=1.1")
      .to(this.kImg, {
        rotation: '-90_ccw',
        duration: 3,
      }, "underSweep+=3.7")
      .to(this.kImg, {rotation: '-180_ccw'})
      .to(this.k, {
        y: this.low,
        duration: .5,
        ease: 'sine.in'
      })
      .to(this.kImg, {rotation: '0_cw'})
      .to(this.k, {y: 0})
  }

  L5() {
    this.reset();

    this.timeline
      .to(this.k, {
        rotation: '-180_cw',
        duration: .5,
        delay: 0
      })
      .to(this.k, {y: -40})
      .to(this.k, {
        rotation: '-90_cw',
        duration: .5
      })
      .to(this.k, {
        x: this.lf,
        duration: 2
      })
      .to(this.k, {rotation: '90_ccw'})
      .to(this.k, {
        x: this.rt,
        duration: 3,
      })
      .to(this.k, {
        rotation: '-90_cw',
        duration: 1
      })
    // Figure eight.
      .to(this.k, {
        duration: 11,
        ease: 'sine.inOut', 
        motionPath: { 
          path: [
            {x: this.lfIsh, y: this.hi},
            {x: this.lf, y: this.yMid},
            {x: this.lfIsh, y: this.low},
            {x: this.rtIsh, y: this.hi},
            {x: this.rt, y: this.yMid},
            {x: this.rtIsh, y: this.low},
            {x: this.lfIsh, y: this.hi},
            {x: this.lf, y: this.yMid},
            {x: this.lfIsh, y: this.low},
            {x: this.rtIsh, y: this.hi},
          ],
          start: 0,
          end: 1,
          curviness: .9,
          autoRotate: 90,
        }
      })
      .to(this.k, {
        rotation: '90_shortest',
        duration: .5
      })
    // Slide Box.
      .to(this.k, {
        x: this.rtIsh,
        y: this.hi,
        rotation: 90,
        duration: .5,
      })
      .to(this.k, {
        x: this.rtIsh,
        y: this.yMid,
        duration: 1,
      })
      .to(this.k, {
        x: 0,
        y: this.yMid,
        duration: 1,
      })
      .to(this.k, {
        x: 0,
        y: this.hi,
        duration: 1,
      })
      .to(this.k, {
        x: this.rtIsh,
        y: this.hi,
        duration: 1,
      })
    // Spiral in.
      .to(this.k, {
        duration: 6,
        ease: 'sine.inOut', 
        motionPath: { 
          path: [
            {x: this.rtIsh, y: this.yMid},
            {x: this.rtIsh - 40, y: this.yMid + 100},
            {x: 0, y: this.low},
            {x: this.lfIsh + 40, y: this.yMid + 100},
            {x: this.lfIsh, y: this.yMid},
            {x: this.lfIsh + 40, y: this.yMid - 85},
            {x: 0, y: this.hi},
            {x: this.rtIsh - 80, y: this.yMid - 85},
            {x: this.rtIsh - 60, y: this.yMid},
            {x: this.rtIsh - 85, y: this.yMid + 45},
            {x: 0, y: this.lowIsh},
            {x: this.lfIsh + 85, y: this.yMid + 45},
            {x: this.lfIsh + 60, y: this.yMid},
            {x: this.lfIsh + 85, y: this.yMid - 45},
            {x: 0, y: this.hiIsh},
            {x: this.rtIsh - 95, y: this.yMid - 45},
            {x: 30, y: this.yMid},
            {x: 0, y: this.yMid + 30},
            {x: 0, y: this.yMid},
          ],
          start: 0,
          end: 1,
          curviness: .5,
          type: 'soft',
          autoRotate: 90,
        }
      })
      .to(this.k, {
        rotation: 90,
        duration: .5,
        delay: 0
      })
      .to(this.k, {
        rotation: '0_shortest',
        duration: .5,
        delay: 1
      })
      .to(this.k, {
        rotation: '180_ccw',
        duration: .5,
        delay: 0
      })
    // Spiral out.
      .to(this.k, {
        delay: 0,
        duration: 6,
        ease: 'sine.inOut', 
        motionPath: { 
          path: [
            {x: 0, y: this.yMid},
            {x: 0, y: this.yMid + 30},
            {x: 30, y: this.yMid},
            {x: this.rtIsh - 95, y: this.yMid - 45},
            {x: 0, y: this.hiIsh},
            {x: this.lfIsh + 85, y: this.yMid - 45},
            {x: this.lfIsh + 60, y: this.yMid},
            {x: this.lfIsh + 85, y: this.yMid + 45},
            {x: 0, y: this.lowIsh},
            {x: this.rtIsh - 85, y: this.yMid + 45},
            {x: this.rtIsh - 60, y: this.yMid},
            {x: this.rtIsh - 80, y: this.yMid - 85},
            {x: 0, y: this.hi},
            {x: this.lfIsh + 40, y: this.yMid - 85},
            {x: this.lfIsh, y: this.yMid},
            {x: this.lfIsh + 40, y: this.yMid + 100},
            {x: 0, y: this.low},
            {x: this.rtIsh - 40, y: this.yMid + 100},
            {x: this.rtIsh, y: this.yMid},
            {x: this.rtIsh - 20, y: this.hiIsh},
            {x: 0, y: this.hi},
          ],
          start: 0,
          end: 1,
          curviness: .5,
          type: 'soft',
          autoRotate: 90,
        }
      })
      .to(this.k, {rotation: '-180_ccw'})
      .to(this.k, {
        y: this.low,
        duration: .5,
        ease: 'sine.in'
      })
      .to(this.k, {rotation: '0_cw'})
      .to(this.k, {y: 0})
  }

  L6() {
    this.reset();

    this.timeline
      .to(this.k, {
        rotation: '-180_cw',
        duration: .5,
        delay: 0
      })
      .to(this.k, {
        y: this.low,
        duration: .5,
      })
      .to(this.k, {
        rotation: '90_cw',
        duration: .5,
      })
      .to(this.k, {
        rotation: '180_cw',
        duration: .5,
      })
      .to(this.k, {
        rotation: '270_cw',
        duration: .5,
      })
      .to(this.k, {
        rotation: '-=540_ccw',
        duration: 1,
      })
      .to(this.k, {
        x: this.rt,
        duration: 1.5,
      })
      .to(this.k, {
        rotation: -90,
        duration: .5,
      })
      .to(this.k, {
        x: this.lf,
        duration: 3,
      })
      .to(this.k, {
        rotation: '90_ccw',
        duration: .5,
      })
      .to(this.k, {
        x: 0,
        duration: 1.5,
      })
      .to(this.k, {
        rotation: '180_cw',
        duration: .5,
      })
      .to(this.k, {
        y: this.yMid,
        duration: 2,
      })
      .to(this.k, {
        rotation: '-=450_ccw',
        duration: 1,
      })
      .to(this.k, {
        x: this.rtIsh,
        duration: 1,
      })
      .to(this.k, {
        rotation: '+=45_cw',
        duration: .3,
      })
      .to(this.k, {
        rotation: '+=45_cw',
        duration: .3,
      })
      .to(this.k, {
        rotation: '+=45_cw',
        duration: .3,
      })
      .to(this.k, {
        rotation: '+=45_cw',
        duration: .3,
      })
      .to(this.k, {
        x: this.lfIsh,
        duration: 1,
      })
  }
}
