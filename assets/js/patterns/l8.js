function L8() {
  reset();

  const aBit = 60;

  let invSlide1 = {
    path: [
      {x: rtIsh - 40 , y: lowIsh},
      {x: 0, y: low},
      {x: lfIsh + 40 , y: lowIsh},
      {x: lfIsh, y: mid},
    ],
    start: 0,
    end: 1,
    curviness: .4,
    align: 'self',
  }

  let invSlide2 = {
    path: [
      {x: lfIsh, y: mid},
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

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(hiIsh, 2)
    // North
    .fly(-aBit, hiIsh)
    .fly(centre, hiIsh)
    .fly(centre, hi)
    .fly(centre, hiIsh)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .spin(2, .5)
    // South
    .diveStop(low)
    .fly(-aBit, low)
    .fly(centre, low)
    .fly(centre, lowIsh)
    .fly(centre, low)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // East
    .fly(rtIsh, mid, 1.8, 3)
    .fly(rtIsh, hiIsh)
    .fly(rtIsh, mid)
    .fly(rtIsh + aBit, mid)
    .fly(rtIsh, mid)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // West
    .path(invSlide1, 3)
    .innerSpin(2, 0, 3, '<')
    .fly(lfIsh, hiIsh)
    .fly(lfIsh, mid)
    .fly(lfIsh - aBit, mid)
    .fly(lfIsh, mid)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // North East
    .fly(rtIsh, hiIsh, 1.5, '+=135')
    .fly(rtIsh - aBit, hi)
    .fly(rtIsh, hiIsh)
    .fly(rtIsh + aBit, hiIsh - aBit)
    .fly(rtIsh, hiIsh)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // South West
    .fly(lfIsh, lowIsh, 1.5, -2)
    .fly(lfIsh - aBit, lowIsh - aBit)
    .fly(lfIsh, lowIsh)
    .fly(lfIsh - aBit, lowIsh + aBit)
    .fly(lfIsh, lowIsh)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // North West
    .fly(lfIsh - 30, lowIsh - 35, 1, 2)
    .fly(lfIsh, hiIsh, 1, -1)
    .fly(lfIsh + aBit, hiIsh - aBit)
    .fly(lfIsh, hiIsh)
    .fly(lfIsh - aBit, hiIsh - aBit)
    .fly(lfIsh, hiIsh)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // South East
    .path(invSlide2, 3)
    .innerSpin(-2, 0, 3, '<')
    .fly(rtIsh + aBit, lowIsh - aBit)
    .fly(rtIsh, lowIsh)
    .fly(rtIsh + aBit, lowIsh + aBit)
    .fly(rtIsh, lowIsh)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // Finish
    .fly(centre, hi, 2, '+=225_cw')
    .spin(-2, .5)
    .diveStop(mid, 1)
    .spin(4, .5)
    .diveStop(low)
    .spin(-2, .5)
    .land()

  doTimeline(s.ptn);
}
