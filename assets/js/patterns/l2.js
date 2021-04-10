function L2() {
  reset();
  report('Level 2 loaded');

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
      x: lf,
      duration: 2,
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
      x: rt,
      duration: 3,
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
      x: 0,
      duration: 1.5,
      onStart: report,
      onStartParams: ['to centre'],
    })
    .addLabel('step-7')
    .to(k, {
      rotation: '+=360_cw',
      delay: 0,
      onStart: report,
      onStartParams: ['+4'],
    })
    .addLabel('step-8')
    .to(k, {
      x: lf,
      duration: 2,
      delay: 0,
      onStart: report,
      onStartParams: ['to left'],
    })
    .addLabel('step-9')
    .to(k, {
      rotation: '90_cw',
      onStart: report,
      onStartParams: ['+2'],
    })
    .addLabel('step-10')
    .to(k, {
      x: 0,
      duration: 1.5,
      onStart: report,
      onStartParams: ['to centre'],
    })
    .addLabel('step-11')
    .to(k, {
      rotation: '-=450_ccw',
      delay: 0,
      onStart: report,
      onStartParams: ['-5'],
    })
    .addLabel('step-12')
    .to(k, {
      y: hi,
      onStart: report,
      onStartParams: ['to top'],
    })
    .addLabel('step-13')
    .to(k, {
      rotation: '+=180_cw',
      onStart: report,
      onStartParams: ['+2'],
    })
    .addLabel('step-14')
    .to(k, {
      y: low,
      duration: .5,
      ease: 'power3.in',
      onStart: report,
      onStartParams: ['divestop'],
    })
    .addLabel('step-14')
    .to(k, {
      rotation: '0_cw',
      onStart: report,
      onStartParams: ['+2'],
    })
    .addLabel('step-15')
    .to(k, {
      y: 0,
      onStart: report,
      onStartParams: ['land'],
    })
    .addLabel('step-16')
}
