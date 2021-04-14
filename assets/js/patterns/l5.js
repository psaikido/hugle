function L5() {
  reset();

  let figure8 = {
    path: [
      {x: lfIsh, y: hi},
      {x: lf, y: mid},
      {x: lfIsh, y: low},
      {x: rtIsh, y: hi},
      {x: rt, y: mid},
      {x: rtIsh, y: low},
      {x: lfIsh, y: hi},
      {x: lf, y: mid},
      {x: lfIsh, y: low},
      {x: rtIsh, y: hiIsh},
    ],
    start: 0,
    end: 1,
    curviness: .9,
    autoRotate: 90,
  }

  let spiralIn = {
    path: [
      {x: rtIsh - 40, y: mid + 100},
      {x: lfIsh + 40, y: mid + 100},
      {x: lfIsh + 40, y: mid - 85},
      {x: rtIsh - 80, y: mid - 85},
      {x: rtIsh - 85, y: mid + 45},
      {x: lfIsh + 85, y: mid + 45},
      {x: lfIsh + 85, y: mid - 45},
      {x: rtIsh - 95, y: mid - 45},
      {x: 30, y: mid},
      {x: 0, y: mid + 30},
      {x: -15, y: mid + 10},
      {x: 0, y: mid},
    ],
    start: 0,
    end: 1,
    autoRotate: 90,
    curviness: .8,
  };

  let spiralOut = {
    path: [
      {x: 0, y: mid},
      {x: -15, y: mid + 10},
      {x: 0, y: mid + 30},
      {x: 30, y: mid},
      {x: rtIsh - 95, y: mid - 45},
      {x: lfIsh + 85, y: mid - 45},
      {x: lfIsh + 85, y: mid + 45},
      {x: rtIsh - 85, y: mid + 45},
      {x: rtIsh - 80, y: mid - 85},
      {x: lfIsh + 40, y: mid - 85},
      {x: lfIsh + 40, y: mid + 100},
      {x: rtIsh - 40, y: mid + 100},
      {x: rtIsh, y: hiIsh},
      {x: 0, y: hi},
    ],
    start: 0,
    end: 1,
    curviness: .8,
    autoRotate: 90,
  };

  let s = new Stepper()
    .setStart(k, kImg, -2)
    .launch(low)
    .spin(1, .5)
    .fly(lf, low, 2)
    .spin(-2, .5)
    .fly(rt, low, 3)
    .spin('-35_cw', .5)
    .path(figure8, 11)
    .fly(rtIsh, hiIsh, .5, '90_shortest')
    .fly(rtIsh, lowIsh, 2)
    .fly(lfIsh, lowIsh, 2)
    .fly(lfIsh, hiIsh, 2)
    .fly(rtIsh, hiIsh, 2)
    .spin('+=82_cw', .5, 1)
    .path(spiralIn, 6)
    .spin('-92_ccw', .5, 1)
    .path(spiralOut, 6)
    .spin('-=90_ccw')
    .diveStop(low)
    .spin(2, .5)
    .land()
    
  doTimeline(s.ptn);
}
