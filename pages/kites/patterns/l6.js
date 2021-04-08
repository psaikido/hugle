  function L6() {
    reset();

    timeline
      .to(k, {
        rotation: '-180_cw',
        duration: .5,
        delay: 0
      })
      .to(k, {
        y: lowIsh,
        duration: 1,
      })
      .to(k, {
        rotation: '90_cw',
        duration: .5,
      })
      .to(k, {
        rotation: '180_cw',
        duration: .5,
      })
      .to(k, {
        rotation: '270_cw',
        duration: .5,
      })
      .to(k, {
        rotation: '-=540_ccw',
        duration: 1,
      })
      .to(k, {
        x: rt,
        duration: 1.5,
      })
      .to(k, {
        rotation: -90,
        duration: 1.5,
        delay: 0,
      })
      .to(k, {
        x: lf,
        duration: 3,
      })
      .to(k, {
        rotation: '90_ccw',
        delay: 0,
        duration: 1.5,
      })
      .to(k, {
        x: 0,
        duration: 1.5,
      })
      .to(k, {
        y: low,
        rotation: '180_cw',
        duration: .5,
      })
      .to(k, {
        y: yMid,
        duration: 2,
      })
      .to(k, {
        rotation: '-=450_ccw',
        duration: 1,
      })
      .to(k, {
        x: rtIsh,
        duration: 1,
      })
      .to(k, {
        rotation: '+=45_cw',
        duration: .3,
      })
      .to(k, {
        rotation: '+=45_cw',
        duration: .3,
      })
      .to(k, {
        rotation: '+=45_cw',
        duration: .3,
      })
      .to(k, {
        rotation: '+=45_cw',
        duration: .3,
      })
      .to(k, {
        x: lfIsh,
        duration: 1,
      })
      .to(k, {
        delay: 0,
        duration: 2,
        ease: 'sine.inOut', 
        motionPath: { 
          path: [
            {x: lfIsh, y: yMid},
            {x: -30, y: yMid - 30},
            {x: 0, y: hiIsh},
          ],
          start: 0,
          end: 1,
          curviness: 1,
          type: 'soft',
          autoRotate: -90,
        }
      })
      .to(k, {
        delay: 0,
        duration: 2,
        ease: 'sine.inOut', 
        motionPath: { 
          path: [
            {x: 30, y: yMid - 30},
            {x: rtIsh, y: yMid},
          ],
          start: 0,
          end: 1,
          curviness: 1,
          type: 'soft',
          autoRotate: 90,
        }
      })
      .to(k, {
        delay: 0,
        duration: 2,
        ease: 'sine.inOut', 
        motionPath: { 
          path: [
            {x: 30, y: yMid + 30},
            {x: 0, y: lowIsh},
          ],
          start: 0,
          end: 1,
          curviness: 1,
          type: 'soft',
          autoRotate: -90,
        }
      })
      .to(k, {
        delay: 0,
        duration: 2,
        ease: 'sine.inOut', 
        motionPath: { 
          path: [
            {x: -30, y: yMid + 30},
            {x: lfIsh, y: yMid},
          ],
          start: 0,
          end: 1,
          curviness: 1,
          type: 'soft',
          autoRotate: 90,
        }
      })
      .to(k, {
        delay: 0,
        duration: 2,
        ease: 'sine.inOut', 
        motionPath: { 
          path: [
            {x: lfIsh, y: hiIsh},
            {x: lfIsh + 20, y: hi + 10},
            {x: 0, y: hi},
          ],
          start: 0,
          end: 1,
          curviness: 1,
          type: 'soft',
          autoRotate: 90,
        }
      })
      .to(k, {
        rotation: '180_shortest',
        delay: 0,
        duration: .5,
      })
      .to(k, {
        y: low,
        duration: .5,
        ease: 'sine.in'
      })
      .to(k, {rotation: '+=360_cw'})
      .to(k, {y: 0})
  }
