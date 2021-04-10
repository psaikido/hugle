function M13() {
  reset();

  timeline
    .to(k, {rotation: 180, delay: 0, duration: 0,})
    .to(k, {y: low})
    .to(k, {rotation: '+=270_cw', duration: .5})
    .to(k, {
      x: lfIsh,
    })
    .to(k, {rotation: '-=450_ccw'})
    .to(k, {y: hiIsh})
    .to(k, {
      x: 0,
      y: hi,
      rotation: '+=180_cw',
      delay: 0,
    })
    .to(k, {
      y: low,
      ease: 'power3.in',
    })
    // Slide circle
    .to(k, {
      delay: .5,
      duration: 6,
      ease: 'linear', 
      motionPath: { 
        path: [
          {x: lfIsh, y: yMid},
          {x: 0, y: hiIsh},
          {x: rtIsh, y: yMid},
          {x: 0, y: low},
        ],
        start: 0,
        end: 1,
        curviness: 1,
      }
    })
    .to(kImg, {
      rotation: '+=360_cw',
      duration: 6,
      delay: 0,
    }, '<')
    .to(k, {
      rotation: '-=450_ccw',
      delay: 0,
      duration: .7,
    })
    .to(k, {
      x: rtIsh,
    })
    .to(k, {
      rotation: '+=90_cw',
    })
    .to(k, {
      rotation: '+=90_cw',
    })
    .to(k, {
      rotation: '+=90_cw',
    })
    .to(k, {
      rotation: '+=90_cw',
    })
    .to(k, {
      rotation: '+=90_cw',
    })
    .to(k, {
      rotation: '-=450_ccw',
    })
    // Tumbleweed
    .to(k, {
      x: rt,
      y: lowIsh,
    })
    .to(k, {
      x: lf,
      duration: 6,
    })
    .to(kImg, {
      delay: 0,
      duration: 6,
      rotation: '+=360_cw',
    }, '<')
    .to(k, {
      x: lfIsh,
    })
    .to(kImg, {
      rotation: '-=270_ccw',
      duration: .7,
      delay: 0,
    })
    // Weird box
    .to(k, {y: hiIsh,})
    .to(k, {
      rotation: -180,
      duration: 0,
      delay: 0,
    }, '<')
    .to(kImg, {
      rotation: 0,
      duration: 0,
      delay: 0,
    }, '<')
    .to(k, {
      rotation: '+=270_cw',
      duration: .5,
    })
    .to(k, {
      x: rtIsh,
    })
    .to(k, {
      rotation: '-=360_ccw',
    })
    .to(k, {
      y: lowIsh,
    })
    .to(k, {
      rotation: '+=450_cw',
      duration: .8,
    })
    .to(k, {
      x: lfIsh,
    })
    .to(k, {
      rotation: '-=540_ccw',
    })
    .to(k, {
      y: hiIsh,
    })
    .to(k, {
      x: 0,
      y: hi,
      rotation: '+=180_cw',
      delay: 0,
    })
    .to(k, {
      y: low,
      ease: 'power3.in',
    })
    .to(k, {
      rotation: '-=180_ccw',
    })
    .to(k, {
      y: ground,
    })
}
