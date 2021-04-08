  function L8() {
    reset();

    timeline
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
        rotation: 225 
      })
      .to(k, {
        rotation: 180 
      })
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
  }
