function M9() {
  reset();

  timeline
    .to(k, {y: hi})
    .to(k, {rotation: '180_cw'})
    .to(k, {y: lowIsh})
    .to(k, {rotation: '-=450_ccw'})
    .to(k, {x: lfIsh})
    .to(k, {rotation: '-=270_ccw'})
    .to(k, {
      delay: 0,
      duration: 4,
      ease: 'sine.inOut', 
      motionPath: { 
        path: [
          {x: 0, y: low},
          {x: rtIsh, y: lowIsh},
        ],
        start: 0,
        end: 1,
        curviness: .5,
      }
    }, 'vslide')
    .to(kImg, {rotation: '-=90_ccw'}, "vslide+=2")
    .to(kImg, {rotation: '+=90_cw'})
    .to(k, {rotation: '+=450_cw'}, '<')
    .to(k, {x: 0})
    .to(k, {rotation: '+=270_cw', delay: 0})
    .to(k, {y: low})
    .to(k, {rotation: '-=450_ccw'})
    .to(k, {y: ground - 15})
}
