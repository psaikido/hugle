function L6() {
  reset();

  timeline
    .to(k, {
      rotation: '-180_cw',
      duration: .5,
      delay: 0
    })
    .to(k, {
      y: lowIsh,
      duration: 1,
    })
    .to(k, {
      rotation: '90_cw',
      duration: .5,
    })
    .to(k, {
      rotation: '180_cw',
      duration: .5,
    })
    .to(k, {
      rotation: '270_cw',
      duration: .5,
    })
    .to(k, {
      rotation: '-=540_ccw',
      duration: 1,
    })
    // Bottom turns right then left.
    .to(k, {
      x: rt,
      duration: 1.5,
    })
    .to(k, {
      rotation: -90,
      duration: 1.5,
      delay: 0,
    })
    .to(k, {
      x: lf,
      duration: 3,
    })
    .to(k, {
      rotation: '90_ccw',
      delay: 0,
      duration: 1.5,
    })
    .to(k, {
      x: 0,
      duration: 1.5,
    })
    .to(k, {
      y: low,
      rotation: '180_cw',
      duration: .5,
      delay: 0,
    })
    // Reverse up, spin, go right.
    .to(k, {
      y: yMid,
      duration: 2,
    })
    .to(k, {
      rotation: '-=450_ccw',
      duration: 1,
    })
    .to(k, {
      x: rtIsh,
      duration: 1,
    })
    // Clock.
    .to(k, {
      rotation: '+=45_cw',
      duration: .3,
    })
    .to(k, {
      rotation: '+=45_cw',
      duration: .3,
    })
    .to(k, {
      rotation: '+=45_cw',
      duration: .3,
    })
    .to(k, {
      rotation: '+=45_cw',
      duration: .3,
    })
    .to(k, {
      x: lfIsh,
      duration: 1,
    })
    // Iron Cross.
    .to(k, {
      delay: 1,
      duration: 2,
      ease: 'sine.inOut', 
      motionPath: { 
        path: [
          {x: lfIsh - 80, y: yMid},
          {x: lfIsh, y: yMid},
          {x: -40, y: yMid - 30},
          {x: 0, y: hiIsh},
          {x: 0, y: hi},
        ],
        start: .42,
        end: .95,
        curviness: .5,
        type: 'soft',
        autoRotate: -90,
      }
    })
    .to(k, {
      delay: 0,
      duration: 2,
      ease: 'sine.inOut', 
      motionPath: { 
        path: [
          {x: 30, y: yMid - 30},
          {x: rtIsh, y: yMid},
          {x: rt, y: yMid},
        ],
        start: 0,
        end: .7,
        curviness: .5,
        autoRotate: 90,
      }
    })
    .to(k, {
      delay: 0,
      duration: 2,
      ease: 'sine.inOut', 
      motionPath: { 
        path: [
          {x: rtIsh + 80, y: yMid},
          {x: rtIsh, y: yMid},
          {x: 40, y: yMid + 30},
          {x: 0, y: lowIsh},
          {x: 0, y: 0},
        ],
        start: .09,
        end: .9,
        curviness: .5,
        autoRotate: -90,
      }
    })
    .to(k, {
      delay: 0,
      duration: 2,
      ease: 'sine.inOut', 
      motionPath: { 
        path: [
          {x: 0, y: ground},
          {x: 0, y: lowIsh},
          {x: - 40, y: lowIsh - 60},
          {x: lfIsh, y: yMid},
          {x: lfIsh - 80, y: yMid},
        ],
        start: .13,
        end: .9,
        curviness: .5,
        autoRotate: 90,
      }
    })
    .to(k, {
      rotation: '+=90_cw',
      duration: .5,
    })
    .to(k, {y: hiIsh,})
    .to(k, {
      x: 0,
      y: hi,
      rotation: '+=180_cw',
      delay: 0,
    })
    .to(k, {
      y: low,
      duration: .5,
      ease: 'power3.in'
    })
    .to(k, {rotation: '+=360_cw'})
    .to(k, {y: 0})
  timeline.play();
}
