function L1() {
  reset();

  timeline
    .to(k, {
      y: yMid,
      onStart: report,
      onStartParams: ['to mid height'],
    })
    .addLabel('1')
    .to(k, {
      rotation: '-90_ccw',
      onStart: report,
      onStartParams: ['rotate -1'],
    })
    .to(k, {
      x: lf, duration: 2,
      onStart: report,
      onStartParams: ['to left'],
    })
    .to(k, {
      rotation: '90_cw',
      onStart: report,
      onStartParams: ['rotate +2'],
    })
    .to(k, {
      x: rt, duration: 3,
      onStart: report,
      onStartParams: ['to right'],
    })
    .to(k, {
      rotation: '-90_ccw',
      onStart: report,
      onStartParams: ['rotate -2'],
    })
    .to(k, {
      x: 0, duration: 1.5,
      onStart: report,
      onStartParams: ['to centre'],
    })
    .to(k, {
      rotation: '0_cw',
      onStart: report,
      onStartParams: ['rotate +1'],
    })
    .to(k, {
      y: 0, duration: 2,
      onStart: report,
      onStartParams: ['land'],
    })

  //timeline.play();
}

