function L1() {
  reset();
  report('Level 1 loaded');

  timeline
    .addLabel('step-0')
    .to(k, {
      y: yMid,
      onStart: report,
      onStartParams: ['launch to centre'],
    })
    .addLabel('step-1')
    .to(k, {
      rotation: '-90_ccw',
      onStart: report,
      onStartParams: ['rotate -1'],
    })
    .addLabel('step-2')
    .to(k, {
      x: lf, duration: 2,
      onStart: report,
      onStartParams: ['to left'],
    })
    .addLabel('step-3')
    .to(k, {
      rotation: '90_cw',
      onStart: report,
      onStartParams: ['rotate +2'],
    })
    .addLabel('step-4')
    .to(k, {
      x: rt, duration: 3,
      onStart: report,
      onStartParams: ['to right'],
    })
    .addLabel('step-5')
    .to(k, {
      rotation: '-90_ccw',
      onStart: report,
      onStartParams: ['rotate -2'],
    })
    .addLabel('step-6')
    .to(k, {
      x: 0, duration: 1.5,
      onStart: report,
      onStartParams: ['to centre'],
    })
    .addLabel('step-7')
    .to(k, {
      rotation: '0_cw',
      onStart: report,
      onStartParams: ['rotate +1'],
    })
    .addLabel('step-8')
    .to(k, {
      y: 0, duration: 2,
      onStart: report,
      onStartParams: ['land'],
    })
}

