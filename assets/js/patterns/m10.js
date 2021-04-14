function M10() {
  reset();

  let slideTurn = {
    path: [
      {x: lfIsh + 20, y: lowIsh},
      {x: lfIsh , y: mid},
      {x: 0, y: mid},
      {x: 0, y: lowIsh},
    ],
    start: 0,
    end: .9,
    curviness: 1,
    align: 'self',
  }

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(low, .5)
    .spin(-3, .5, .5)
    .fly(rtIsh, low)
    .spin(4, .5, .7)
    .fly(rtIsh, ground)
    .fly(rtIsh, low)
    .spin(-6)
    .fly(lfIsh, low)
    .spin(4, .5, .7)
    .fly(lfIsh, hiIsh, 1.5)
    .fly(centre, hiIsh)
    .spin('-=45_ccw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .fly(centre, hi)
    .spin(2, 0, .3)
    .diveStop(mid, .5)
    .spin(4, .5, .5)
    .diveStop(low, .5)
    .spin(-5, .5, .7)
    .fly(centre, ground)
    .fly(centre, low)
    .fly(centre - 30, low, 1, 2)
    .fly(centre - 30, ground)
    .fly(centre - 30, low)
    .fly(centre, low, 1, -2)
    .fly(centre, ground - 10)
    .fly(centre, lowIsh)
    .path(slideTurn, 5)
    .innerSpin(4, 0, 5, '<')
    .spin(-5, .5, .7)
    .land(1.5, .5)

  doTimeline(s.ptn);
}
