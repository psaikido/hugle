function L6() {
  reset();

  let ironCrossNW = {
    path: [
      {x: lfIsh - 80, y: mid},
      {x: lfIsh, y: mid},
      {x: -40, y: mid - 30},
      {x: 0, y: hiIsh},
      {x: 0, y: hi},
    ],
    start: .42,
    end: .95,
    curviness: .5,
    type: 'soft',
    autoRotate: -90,
  }

  let ironCrossNE = {
    path: [
      {x: 30, y: mid - 30},
      {x: rtIsh, y: mid},
      {x: rt, y: mid},
    ],
    start: 0,
    end: .7,
    curviness: .5,
    autoRotate: 90,
  }

  let ironCrossSE = {
    path: [
      {x: rtIsh + 80, y: mid},
      {x: rtIsh, y: mid},
      {x: 40, y: mid + 30},
      {x: 0, y: lowIsh},
      {x: 0, y: 0},
    ],
    start: .09,
    end: .9,
    curviness: .5,
    autoRotate: -90,
  }

  let ironCrossSW = {
    path: [
      {x: 0, y: ground},
      {x: 0, y: lowIsh},
      {x: - 40, y: lowIsh - 60},
      {x: lfIsh, y: mid},
      {x: lfIsh - 80, y: mid},
    ],
    start: .13,
    end: .9,
    curviness: .5,
    autoRotate: 90,
  }

  let s = new Stepper()
    .setStart(k, kImg, -2)
    .launch(lowIsh)
    .spin(3, .5, .7)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(-6, .5, 1)
    .fly(rt, lowIsh, 1.5)
    .spin(2, 0, 2)
    .fly(lf, lowIsh, 3, 0, 0)
    .spin(-2, 0, 2)
    .fly(centre, lowIsh, 1.5, 0, 0)
    .fly(centre, low, .7, 1, 0)
    .fly(centre, mid, 1.5)
    .spin(-5, .5, 1)
    .fly(rtIsh, mid, 1)
    .spin('+=45_cw', .5, .3)
    .spin('+=45_cw', .5, .3)
    .spin('+=45_cw', .5, .3)
    .spin('+=45_cw', .5, .3)
    .fly(lfIsh, mid, 1)
    .path(ironCrossNW, 2)
    .path(ironCrossNE, 2)
    .path(ironCrossSE, 2)
    .path(ironCrossSW, 2)
    .spin(1)
    .fly(lfIsh, hiIsh)
    .fly(centre, hi, 1, 2, 0)
    .diveStop(low, .5)
    .spin(4)
    .land()

  doTimeline(s.ptn);
}
