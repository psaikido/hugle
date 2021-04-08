function L8() {
  reset();

  timeline
    // North
    .to(k, {
      y: hiIsh,
      duration: 2,
    })
    .to(k, {
      x: -60
    })
    .to(k, {
      x: 0
    })
    .to(k, {
      y: hi,
      duration: 1,
    })
    .to(k, {
      y: hiIsh,
      duration: 1,
    })
    .to(k, {
      rotation: -45
    })
    .to(k, {
      rotation: 45
    })
    .to(k, {
      rotation: 0
    })
    .to(k, {
      rotation: 180 
    })
    //South
    .to(k, {
      y: low
    })
    .to(k, {
      x: -60
    })
    .to(k, {
      x: 0
    })
    .to(k, {
      y: lowIsh,
      duration: 1,
    })
    .to(k, {
      y: low,
      duration: 1,
    })
    .to(k, {
      rotation: '-=45_ccw'
    })
    .to(k, {
      rotation: '+=90_cw'
    })
    .to(k, {
      rotation: '-=45_ccw'
    })
    // East
    .to(k, {
      rotation: '90_cw',
      x: rtIsh,
      y: yMid,
      duration: 1.8,
    })
    .to(k, {
      y: hiIsh,
    })
    .to(k, {
      y: yMid,
    })
    .to(k, {
      x: rtIsh + 60,
    })
    .to(k, {
      x: rtIsh,
    })
    .to(k, {
      rotation: '-=45'
    })
    .to(k, {
      rotation: '+=90'
    })
    .to(k, {
      rotation: 90 
    })
    .to(k, {
      duration: 3,
      motionPath: { 
        path: [
          {x: rtIsh - 40 , y: lowIsh},
          {x: 0, y: low},
          {x: lfIsh + 40 , y: lowIsh},
          {x: lfIsh, y: yMid},
        ],
        start: 0,
        end: 1,
        curviness: .4,
        align: 'self',
      }
    }, 'slideTurn')
    .to(kImg, {
      rotation: '-180_cw',
      duration: 3,
      delay: 0,
    }, "<slideTurn")
    //West
    .to(k, { y: hiIsh })
    .to(k, { y: yMid })
    .to(k, { x: lfIsh - 80 })
    .to(k, { x: lfIsh })
    .to(k, { rotation: '-=45_ccw' })
    .to(k, { rotation: '+=90_cw' })
    .to(k, { rotation: '-=45_ccw' })
    .to(kImg, {
      rotation: 0,
    })
    // North East
    .to(k, {
      x: rtIsh,
      y: hiIsh,
      rotation: '-=45',
    })
    .to(k, {
      x: rtIsh - 70,
      y: hi,
    })
    .to(k, {
      x: rtIsh,
      y: hiIsh,
    })
    .to(k, {
      x: rtIsh + 70,
      y: hiIsh - 70,
    })
    .to(k, {
      x: rtIsh,
      y: hiIsh,
    })
    .to(k, {
      rotation: '-=45'
    })
    .to(k, {
      rotation: '+=90'
    })
    .to(k, {
      rotation: '-=45'
    })
    // South West
    .to(k, {
      x: lfIsh,
      y: lowIsh,
      rotation: '-=180',
      duration: 2,
    })
    .to(k, {
      x: lfIsh - 70,
      y: lowIsh - 70,
    })
    .to(k, {
      x: lfIsh,
      y: lowIsh,
    })
    .to(k, {
      x: lfIsh - 70,
      y: lowIsh + 70,
    })
    .to(k, {
      x: lfIsh,
      y: lowIsh,
    })
    .to(k, {
      rotation: '+=45'
    })
    .to(k, {
      rotation: '-=90'
    })
    .to(k, {
      rotation: '+=45'
    })
    // North West
    .to(k, {
      x: lfIsh - 20,
      y: lowIsh - 32,
      rotation: '+=180',
      duration: 2,
    })
    .to(k, {
      x: lfIsh,
      y: hiIsh,
      rotation: '-=90',
      duration: 2,
    })
    .to(k, {
      x: lfIsh + 70,
      y: hiIsh - 70,
    })
    .to(k, {
      x: lfIsh,
      y: hiIsh,
    })
    .to(k, {
      x: lfIsh - 70,
      y: hiIsh - 70,
    })
    .to(k, {
      x: lfIsh,
      y: hiIsh,
    })
    .to(k, {
      rotation: '-=45'
    })
    .to(k, {
      rotation: '+=90'
    })
    .to(k, {
      rotation: '-=45'
    })
    // South East
    .to(k, {
      duration: 3,
      motionPath: { 
        path: [
          {x: lfIsh, y: yMid},
          {x: lfIsh + 40 , y: lowIsh},
          {x: 0, y: low},
          {x: rtIsh - 40 , y: lowIsh},
          {x: rtIsh, y: lowIsh},
        ],
        start: 0,
        end: 1,
        curviness: .4,
        align: 'self',
      }
    }, 'slideTurn1')
    .to(kImg, {
      rotation: '-=180_ccw',
      duration: 3,
      delay: 0,
    }, "<slideTurn1")
    .to(k, {
      x: rtIsh + 70,
      y: lowIsh - 70,
    })
    .to(k, {
      x: rtIsh,
      y: lowIsh,
    })
    .to(k, {
      x: rtIsh + 70,
      y: lowIsh + 70,
    })
    .to(k, {
      x: rtIsh,
      y: lowIsh,
    })
    .to(k, {
      rotation: '-=45'
    })
    .to(k, {
      rotation: '+=90'
    })
    .to(k, {
      rotation: '-=45'
    })
    // Finish
    .to(k, {
      x: 0,
      y: hi,
      rotation: '+=225_cw',
      duration: 2,
    })
    .to(k, {
      rotation: '-=180_ccw',
      duration: .5,
    })
    .to(k, {
      x: 0,
      y: yMid,
    })
    .to(k, {
      rotation: '+=360',
    })
    .to(k, {
      x: 0,
      y: low,
    })
    .to(k, {
      rotation: '-=180',
    })
    .to(k, {
      x: 0,
      y: 0,
    })
}
