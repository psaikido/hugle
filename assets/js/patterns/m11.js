function M11() {
  reset();

  timeline
    .to(k, {y: lowIsh})
    .to(k, {rotation: '+=540_cw'})
    .to(k, {y: hiIsh})
    .to(k, {rotation: '-=450_ccw'})
    .to(k, {y: lowIsh})
    .to(k, {rotation: '-=360_ccw'})
    .to(k, {x: rtIsh})
    .to(k, {
      rotation: '+=360_cw',
    })
    .to(k, {
      x: 0,
      delay: 0,
    })
    .to(k, {
      x: rtIsh,
      y: lowIsh + 20,
      rotation: '-=270_ccw',
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
      rotation: '+=90_cw',
      duration: .3,
    })
    .to(k, {x: lfIsh,})
    .to(k, {rotation: '-=270_ccw'})
    .to(k, {y: hiIsh,})
    .to(k, {
      x: 0,
      y: hi,
      rotation: '+=180_cs',
      delay: 0,
    })
    .to(k, {
      y: lowIsh,
      ease: 'power3.in',
    })
    .to(k, {
      rotation: '-=90_ccw',
      duration: .3,
    })
    .to(k, {
      rotation: '-=90_ccw',
      duration: .3,
    })
    .to(k, {
      rotation: '-=90_ccw',
      duration: .3,
    })
    .to(k, {
      rotation: '-=90_ccw',
      duration: .3,
    })
    .to(k, {rotation: '+=360_cw'})
    // Slide circle.
    .to(k, {
      delay: 0,
      duration: 6,
      ease: 'linear', 
      motionPath: { 
        path: [
          {x: rtIsh, y: yMid},
          {x: 0, y: hiIsh},
          {x: lfIsh, y: yMid},
          {x: 0, y: lowIsh},
        ],
        start: 0,
        end: 1,
        curviness: 1,
      }
    }, 'slide-circle-m11')
    .to(kImg, {
      rotation: '-=360_ccw',
      duration: 6,
      delay: 0,
    }, "<")
    .to(k, {
      duration: 3,
      ease: 'linear', 
      motionPath: { 
        path: [
          {x: 0, y: lowIsh},
          {x: lfIsh, y: yMid},
          {x: 0, y: hiIsh},
        ],
        start: 0,
        end: 1,
        curviness: 1,
      }
    })
    .to(kImg, {
      rotation: '+=180_cw',
      duration: 3,
    }, "<")
    .to(k, {y: hi})
    .to(kImg, {
      rotation: '-=180_ccw',
    })
    .to(k, {
      y: yMid,
      ease: 'power3.in',
    })
    .to(kImg, {
      rotation: '-=360_ccw',
    })
    .to(k, {
      y: low,
      ease: 'power3.in',
    })
    .to(kImg, {
      rotation: '+=630_cw',
    })
    .to(k, {y: ground})
  timeline.play();
}
