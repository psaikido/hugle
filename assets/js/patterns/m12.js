function M12() {
  reset();

  timeline
    .to(k, {rotation: 180, delay: 0, duration: 0,})
    .to(k, {y: lowIsh})
    .to(k, {rotation: '-=450_ccw'})
    .to(k, {x: rtIsh})
    .to(k, {rotation: '+=540_cw',})
    .to(k, {x: lfIsh})
    .to(k, {rotation: '-=270_ccw', duration: .5})
    .to(k, {y: hiIsh})
    .to(kImg, {
      duration: .1,
      delay: .9,
      rotation: '+=90_cw',
    }, '<')
    .to(k, {x: rtIsh})
    .to(kImg, {
      duration: .1,
      delay: .9,
      rotation: '+=90_cw',
    }, '<')
    .to(k, {y: lowIsh})
    .to(kImg, {
      duration: .1,
      delay: .9,
      rotation: '+=90_cw',
    }, '<')
    .to(k, {x: lfIsh})
    .to(kImg, {
      rotation: '-=270_ccw',
      duration: 1.5,
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
      y: yMid,
      ease: 'power3.in',
    })
    .to(k, {
      rotation: '-=360_ccw',
    })
    .to(k, {
      y: low,
      ease: 'power3.in',
    })
    .to(k, {
      rotation: '+=630_cw',
    })
    .to(k, {
      x: lfIsh,
    })
    .to(k, {
      rotation: '-=630_ccw',
    })
    .to(k, {
      x: rtIsh,
      duration: 3,
    })
    .to(kImg, {
      rotation: '-=360_ccw',
      delay: 1.2,
      duration: .7,
    }, '<')
    .to(kImg, {
      rotation: '+=360_cw',
      duration: .7,
      delay: 0,
    })
    .to(k, {
      x: lfIsh,
      duration: 3,
      delay: 0,
    })
    .to(kImg, {
      rotation: '+=360_cw',
      delay: 1.2,
      duration: .7,
    }, '<')
    .to(k, {
      y: hiIsh,
    })
    .to(k, {
      x: rtIsh,
    })
    .to(k, {
      y: low,
    })
    .to(k, {
      duration: 6,
      ease: 'linear', 
      motionPath: { 
        path: [
          {x: 0, y: lowIsh},
          {x: lfIsh + 80, y: yMid},
          {x: 40, y: hiIsh},
          {x: rtIsh, y: yMid},
          {x: rtIsh, y: lowIsh},
        ],
        start: 0,
        end: 1,
        curviness: 1,
      }
    })
    .to(kImg, {
      rotation: '+=270_cw',
      delay: 0,
      duration: 6,
    }, '<')
    .to(kImg, {
      rotation: '-=270_ccw',
    })
    .to(k, {
      rotation: '-=180_ccw',
    })
    .to(kImg, {
      rotation: '-=360_ccw',
    }, '<')
    .to(k, {
      y: hiIsh,
    })
    .to(k, {
      y: hi,
      rotation: '+=180_cw',
      delay: 0,
    })
    .to(k, {
      y: yMid,
      ease: 'power3.in',
    })
    .to(k, {
      rotation: '+=90_cw',
      duration: .3,
    })
    .to(k, {
      rotation: '+=90_cw',
      duration: .3,
    })
    .to(k, {
      rotation: '+=90_cw',
      duration: .3,
    })
    .to(k, {
      rotation: '+=90_cw',
      duration: .3,
    })
    .to(k, {
      rotation: '-=360_ccw',
    })
    .to(k, {
      y: low,
      ease: 'power3.in',
    })
    .to(k, {
      rotation: '+=180_cw',
    })
    .to(k, {
      y: ground,
    })
}
