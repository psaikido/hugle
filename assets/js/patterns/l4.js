function L4() {
  reset();

  timeline
    .to(kImg, {rotation: '-180_cw'})
    .to(k, {y: -40})
    .to (k, {
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
    .to(kImg, {rotation: '-90_cw', delay: 2}, "<")
    .to(k, {x: lfIsh, duration: 2})
    .to(kImg, {rotation: '270_cw'})
    .to(kImg, {rotation: '-90_ccw'})
    .to(kImg, {rotation: '90_ccw'})
    .to(k, {x: rtIsh, duration: 2})
    .to(kImg, {rotation: '450_cw'})
    .to(kImg, {rotation: '90_ccw'})
    .to(k, {x: 0, duration: 2})
    .to(k, {y: 0 - 5, duration: 2.5})
    .to(k, {y: yMid, duration: 3})
    .to(kImg, {rotation: '-90_ccw', delay: 0})
    .to(k, {y: 0 - 5, duration: 2.5, delay: 0})
    .to(k, {y: yMid, duration: 3})
    .to(k, {x: lf, duration: 2})
    .to(k, {
      duration: 8,
      ease: 'sine.inOut', 
      motionPath: { 
        path: [
          {x: lf, y: yMid},
          {x: lf, y: low},
          {x: rt, y: low},
          {x: rt, y: yMid},
          {x: rtIsh, y: hi},
          {x: 0, y: hi},
        ],
        start: 0,
        end: 1,
        curviness: .4
      }
    }, 'underSweep')
    .to(kImg, {rotation: '-180_ccw'}, "underSweep+=1.1")
    .to(kImg, {
      rotation: '-90_ccw',
      duration: 3,
    }, "underSweep+=3.7")
    .to(kImg, {rotation: '-180_ccw', delay: 0,})
    .to(k, {
      y: low,
      duration: .5,
      ease: 'power3.in'
    })
    .to(kImg, {rotation: '0_cw'})
    .to(k, {y: 0})
}
