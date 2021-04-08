function L5() {
  reset();

  timeline
    .to(k, {
      rotation: '-180_cw',
      duration: .5,
      delay: 0
    })
    .to(k, {y: -40})
    .to(k, {
      rotation: '-90_cw',
      duration: .5
    })
    .to(k, {
      x: lf,
      duration: 2
    })
    .to(k, {rotation: '90_ccw'})
    .to(k, {
      x: rt,
      duration: 3,
    })
    .to(k, {
      rotation: '-90_cw',
      duration: 1
    })
  // Figure eight.
    .to(k, {
      duration: 11,
      ease: 'sine.inOut', 
      motionPath: { 
        path: [
          {x: lfIsh, y: hi},
          {x: lf, y: yMid},
          {x: lfIsh, y: low},
          {x: rtIsh, y: hi},
          {x: rt, y: yMid},
          {x: rtIsh, y: low},
          {x: lfIsh, y: hi},
          {x: lf, y: yMid},
          {x: lfIsh, y: low},
          {x: rtIsh, y: hiIsh},
        ],
        start: 0,
        end: 1,
        curviness: .9,
        autoRotate: 90,
      }
    })
    .to(k, {
      rotation: '90_shortest',
      duration: .5
    })
  // Slide Box.
    .to(k, {
      x: rtIsh,
      y: hiIsh,
      rotation: 90,
      duration: .5,
    })
    .to(k, {
      x: rtIsh,
      y: lowIsh,
      duration: 1,
    })
    .to(k, {
      x: lfIsh,
      y: lowIsh,
      duration: 1,
    })
    .to(k, {
      x: lfIsh,
      y: hiIsh,
      duration: 1,
    })
    .to(k, {
      x: rtIsh,
      y: hiIsh,
      duration: 1,
    })
  // Spiral in.
    .to(k, {
      duration: 6,
      ease: 'sine.inOut', 
      motionPath: { 
        path: [
          {x: rtIsh, y: yMid},
          {x: rtIsh - 40, y: yMid + 100},
          {x: 0, y: low},
          {x: lfIsh + 40, y: yMid + 100},
          {x: lfIsh, y: yMid},
          {x: lfIsh + 40, y: yMid - 85},
          {x: 0, y: hi},
          {x: rtIsh - 80, y: yMid - 85},
          {x: rtIsh - 60, y: yMid},
          {x: rtIsh - 85, y: yMid + 45},
          {x: 0, y: lowIsh},
          {x: lfIsh + 85, y: yMid + 45},
          {x: lfIsh + 60, y: yMid},
          {x: lfIsh + 85, y: yMid - 45},
          {x: 0, y: hiIsh},
          {x: rtIsh - 95, y: yMid - 45},
          {x: 30, y: yMid},
          {x: 0, y: yMid + 30},
          {x: 0, y: yMid},
        ],
        start: 0,
        end: 1,
        curviness: .5,
        type: 'soft',
        autoRotate: 90,
      }
    })
    .to(k, {
      rotation: 90,
      duration: .5,
      delay: 0
    })
    .to(k, {
      rotation: '0_shortest',
      duration: .5,
      delay: 1
    })
    .to(k, {
      rotation: '180_ccw',
      duration: .5,
      delay: 0
    })
  // Spiral out.
    .to(k, {
      delay: 0,
      duration: 6,
      ease: 'sine.inOut', 
      motionPath: { 
        path: [
          {x: 0, y: yMid},
          {x: 0, y: yMid + 30},
          {x: 30, y: yMid},
          {x: rtIsh - 95, y: yMid - 45},
          {x: 0, y: hiIsh},
          {x: lfIsh + 85, y: yMid - 45},
          {x: lfIsh + 60, y: yMid},
          {x: lfIsh + 85, y: yMid + 45},
          {x: 0, y: lowIsh},
          {x: rtIsh - 85, y: yMid + 45},
          {x: rtIsh - 60, y: yMid},
          {x: rtIsh - 80, y: yMid - 85},
          {x: 0, y: hi},
          {x: lfIsh + 40, y: yMid - 85},
          {x: lfIsh, y: yMid},
          {x: lfIsh + 40, y: yMid + 100},
          {x: 0, y: low},
          {x: rtIsh - 40, y: yMid + 100},
          {x: rtIsh, y: yMid},
          {x: rtIsh - 20, y: hiIsh},
          {x: 0, y: hi},
        ],
        start: 0,
        end: 1,
        curviness: .5,
        type: 'soft',
        autoRotate: 90,
      }
    })
    .to(k, {
      rotation: '-180_ccw',
      delay: 0,
      duration: .5,
    })
    .to(k, {
      y: low,
      duration: .5,
      ease: 'sine.in'
    })
    .to(k, {rotation: '0_cw'})
    .to(k, {y: 0})
}
