function M10() {
  reset();

  timeline
    .to(k, {y: low})
    .to(k, {rotation: '-=270_ccw'})
    .to(k, {x: rtIsh})
    .to(k, {rotation: '+=360_cw'})
    .to(k, {y: ground})
    .to(k, {y: low})
    .to(k, {rotation: '-=540_ccw'})
    .to(k, {x: lfIsh})
    .to(k, {rotation: '+=360_cw'})
    .to(k, {y: hiIsh})
    .to(k, {x: 0})
    .to(k, {
      rotation: '-=45_ccw',
      duration: .3,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .3,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .3,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .3,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .3,
    })
    .to(k, {
      rotation: '-=45_ccw',
      duration: .3,
    })
    .to(k, {y: hi})
    .to(k, {rotation: '+=180_cw'})
    .to(k, {
      y: yMid,
      ease: 'power3.in',
    })
    .to(k, {rotation: '+=360_cw'})
    .to(k, {
      y: low,
      ease: 'power3.in',
    })
    .to(k, {rotation: '-=450_ccw'})
    .to(k, {y: ground})
    .to(k, {y: low})
    .to(k, {
      x: - 15,
      rotation: '+=180_cw',
    })
    .to(k, {y: ground})
    .to(k, {y: low})
    .to(k, {
      x: 0,
      rotation: '-=180_ccw',
    })
    .to(k, {y: ground - 15})
    .to(k, {y: lowIsh})
    .to(k, {
      duration: 5,
      motionPath: { 
        path: [
          {x: lfIsh + 20, y: lowIsh},
          {x: lfIsh , y: yMid},
          {x: 0, y: yMid},
          {x: 0, y: lowIsh},
        ],
        start: 0,
        end: .9,
        curviness: 1,
        align: 'self',
      }
    }, 'slideTurn-m10')
    .to(kImg, {
      rotation: '+=360_cw',
      duration: 5,
      delay: 0,
    }, "<slideTurn-m10")
    // Finishing sequence.
    .to(k, {
      rotation: '-=450_ccs',
    })
    .to(k, {
      y: ground,
    })
  timeline.play();
}
