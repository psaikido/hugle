function L7() {
  // reset(); //glitching in this context, don't yet know why
  timeline
    .to(k, {
      x: 0,
      y: 0,
      rotation: 0,
      duration: 0,
    })
    .to(k, {
      y: hi,
      duration: 2,
    })
    .to(k, {
      rotation: '180_cw',
      duration: .5,
    })
    .to(k, {
      y: low,
      duration: 3,
      ease: 'power3.in'
    })
    .to(k, {
      rotation: '+=360_cw',
      duration: 2.5,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .5,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .5,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .5,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .5,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .5,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .5,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .5,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .5,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .5,
    })
    .to(k, {
      x: lfIsh,
      y: yMid,
      duration: 2.5,
    })
    .to(k, {
      rotation: '-=225_ccw',
      duration: .5,
    })
    .to(k, {
      duration: 3,
      ease: 'sine.inOut', 
      motionPath: { 
        path: [
          {x: lfIsh, y: yMid},
          {x: lfIsh + 40, y: low - 40},
          {x: 0, y: low},
        ],
        start: 0,
        end: 1,
        curviness: .4,
        autoRotation: -90,
      }
    }, 'underSweep')
    .to(kImg, {
      rotation: '-90_ccw',
      duration: 2.5,
    }, "underSweep+=1.1")
    .to(k, {
      rotation: '+=180_cw',
      duration: 2.5,
    }, 'slowTurn')
    .to(kImg, {
      rotation: 0,
      duration: 2.5,
    }, '<slowTurn')
    .to(k, {
      x: rtIsh,
      duration: 1,
    })
    .to(k, {
      rotation: '-=360_ccw',
      duration: 2.5,
    })
    .to(k, {
      x: 0,
      duration: 1.5,
    })
    .to(k, {
      rotation: '-=450_ccw',
      duration: .5,
    })
    .to(k, {
      y: 0,
      duration: 1,
    })
}
