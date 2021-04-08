  function L2() {
    reset();

    timeline
      .to(k, {y: yMid})
      .to(k, {rotation: '-90_ccw'})
      .to(k, {x: lf, duration: 2})
      .to(k, {rotation: '90_cw'})
      .to(k, {x: rt, duration: 3})
      .to(k, {rotation: '-90_ccw'})
      .to(k, {x: 0, duration: 1.5})
      .to(k, {rotation: '270_cw'})
      .to(k, {x: lf, duration: 2})
      .to(k, {rotation: '90_cw'})
      .to(k, {x: 0, duration: 1.5})
      .to(k, {rotation: '450_ccw'})
      .to(k, {rotation: '360_shortest', delay: 0})
      .to(k, {y: hi})
      .to(k, {rotation: '180_cw'})
      .to(k, {
        y: low,
        duration: .5,
        ease: 'sine.in'
      })
      .to(k, {rotation: '0_cw'})
      .to(k, {y: 0})
  }
