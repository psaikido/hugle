function M11() {
  reset();

  let slideCircle = {
    path: [
      {x: rtIsh, y: mid},
      {x: 0, y: hiIsh},
      {x: lfIsh, y: mid},
      {x: 0, y: lowIsh},
    ],
    start: 0,
    end: 1,
    curviness: 1,
  }

  let slideHalfCircle = {
    path: [
      {x: 0, y: lowIsh},
      {x: lfIsh, y: mid},
      {x: 0, y: hiIsh},
    ],
    start: 0,
    end: 1,
    curviness: 1,
  }

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(lowIsh)
    .spin(6)
    .fly(centre, hiIsh)
    .spin(-5)
    .fly(centre, lowIsh)
    .spin(-4, .5, .7)
    .fly(rtIsh, lowIsh)
    .spin(4, .5, .7)
    .fly(centre, lowIsh, 1, 0, 0)
    .spin(-2, .5, .8)
    .fly(rtIsh, lowIsh + 20, 1, -1, 0)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .fly(lfIsh, lowIsh)
    .spin(-3, .5, .5)
    .fly(lfIsh, hiIsh)
    .fly(centre, hi, 1, 2, 0)
    .diveStop(lowIsh)
    .spin(-1, .5, .3)
    .spin(-1, .5, .3)
    .spin(-1, .5, .3)
    .spin(-1, .5, .3)
    .spin(4, .5, .5)
    .path(slideCircle, 6)
    .innerSpin(-4, 0, 6, '<')
    .path(slideHalfCircle, 3)
    .innerSpin(2, 0, 3, '<')
    .fly(centre, hi)
    .innerSpin(-2)
    .diveStop(mid, .7)
    .spin(-4, .5, .5)
    .diveStop(low, .7)
    .spin(7, .5)
    .land()
    //.land(1.5, .5)

  doTimeline(s.ptn);
}
