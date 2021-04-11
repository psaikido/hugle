function L1() {
  reset();

  timeline
    .to(k, {
      y: yMid,
    })
    .to(k, {
      rotation: '-90_ccw',
    })
    .to(k, {
      x: lf, duration: 2,
    })
    .to(k, {
      rotation: '90_cw',
    })
    .to(k, {
      x: rt, duration: 3,
    })
    .to(k, {
      rotation: '-90_ccw',
    })
    .to(k, {
      x: 0, duration: 1.5,
    })
    .to(k, {
      rotation: '0_cw',
    })
    .to(k, {
      y: 0, duration: 2,
    })
}

