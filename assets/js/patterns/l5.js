function L5() {
  reset();

  const spiralIn = [
      {x: rtIsh - 40, y: yMid + 100},
      {x: lfIsh + 40, y: yMid + 100},
      {x: lfIsh + 40, y: yMid - 85},
      {x: rtIsh - 80, y: yMid - 85},
      {x: rtIsh - 85, y: yMid + 45},
      {x: lfIsh + 85, y: yMid + 45},
      {x: lfIsh + 85, y: yMid - 45},
      {x: rtIsh - 95, y: yMid - 45},
      {x: 30, y: yMid},
      {x: 0, y: yMid + 30},
      {x: -15, y: yMid + 10},
      {x: 0, y: yMid},
  ];

  const spiralOut = [
      {x: 0, y: yMid},
      {x: -15, y: yMid + 10},
      {x: 0, y: yMid + 30},
      {x: 30, y: yMid},
      {x: rtIsh - 95, y: yMid - 45},
      {x: lfIsh + 85, y: yMid - 45},
      {x: lfIsh + 85, y: yMid + 45},
      {x: rtIsh - 85, y: yMid + 45},
      {x: rtIsh - 80, y: yMid - 85},
      {x: lfIsh + 40, y: yMid - 85},
      {x: lfIsh + 40, y: yMid + 100},
      {x: rtIsh - 40, y: yMid + 100},
      {x: rtIsh, y: hiIsh},
      {x: 0, y: hi},
  ];

  const figure8 =  [
    {x: lfIsh, y: hi},
    {x: lf, y: yMid},
    {x: lfIsh, y: low},
    {x: rtIsh, y: hi},
    {x: rt, y: yMid},
    {x: rtIsh, y: low},
    {x: lfIsh, y: hi},
    {x: lf, y: yMid},
    {x: lfIsh, y: low},
    {x: rtIsh, y: hiIsh},
  ];

  timeline
    .to(k, {
      rotation: '-180_cw',
      duration: .5,
      delay: 0
    })
    .to(k, {y: low})
    .to(k, {
      rotation: '-90_cw',
      duration: .5
    })
    .to(k, {
      x: lf,
      duration: 2
    })
    .to(k, {rotation: '90_ccw'})
    .to(k, {
      x: rt,
      duration: 3,
    })
    .to(k, {
      rotation: '-35_cw',
      duration: 1
    })
    // Figure eight.
    .to(k, {
      duration: 11,
      ease: 'sine.inOut', 
      motionPath: { 
        path: figure8,
        start: 0,
        end: 1,
        curviness: .9,
        autoRotate: 90,
      }
    })
    .to(k, {
      rotation: '90_shortest',
      duration: .5
    })
    // Slide Box.
    .to(k, {
      x: rtIsh,
      y: hiIsh,
      rotation: 90,
      duration: .5,
    })
    .to(k, {
      x: rtIsh,
      y: lowIsh,
      duration: 1,
    })
    .to(k, {
      x: lfIsh,
      y: lowIsh,
      duration: 1.5,
    })
    .to(k, {
      x: lfIsh,
      y: hiIsh,
      duration: 1.5,
    })
    .to(k, {
      x: rtIsh,
      y: hiIsh,
      duration: 1,
    })
    .to(k, {
      rotation: '+=85_cw',
      delay: 1,
    })
    // Spiral in.
    .to(k, {
        duration: 6,
        ease: 'sine.in', 
        motionPath: { 
            path: spiralIn,
            start: 0,
            end: 1,
            autoRotate: 90,
            curviness: .8,
        }
    })
    .to(k, {
      rotation: '-90_ccw',
      delay: 1,
    })
    // Spiral out.
    .to(k, {
      duration: 6,
      ease: 'sine.in', 
      motionPath: { 
        path: spiralOut,
        start: 0,
        end: 1,
        curviness: .8,
        autoRotate: 90,
      }
    })
    .to(k, {
      rotation: '-=90_ccw',
    })
    .to(k, {
      y: low,
      duration: .5,
      ease: 'power1.in'
    })
    .to(k, {rotation: '0_cw'})
    .to(k, {y: 0})
  timeline.play();
}
