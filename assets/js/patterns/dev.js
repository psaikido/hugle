function dev() {
  reset();

  let slideCircle = {
    path: [
      {x: lfIsh, y: mid},
      {x: 0, y: hiIsh},
      {x: rtIsh, y: mid},
      {x: 0, y: low},
    ],
    start: 0,
    end: 1,
    curviness: 1,
  }

  let s = new Stepper()
    .setStart(k, kImg, 2)
    .launch(low)
    .spin(3, .5, .5)
    .fly(lfIsh)
    .spin(-5)
    .fly(lfIsh, hiIsh)
    .fly(centre, hi, .7, 2, 0)
    .diveStop(low)
    .path(slideCircle, 6)
    .innerSpin(4, 0, 6, '<')
    .spin(-5, 0, .7)
    .fly(rtIsh, low)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(-5, .5, .5)
    .fly(rt, lowIsh)
    .fly(lf, lowIsh, 6)
    .innerSpin(4, 0, 6, '<')
    .fly(lfIsh, lowIsh, .7)
    .spin(-3, 0, .7)
    .fly(lfIsh, hiIsh)
    .spin(3, .5, .5)
    .fly(rtIsh, hiIsh)
    .spin(-4, .5, .7)
    .fly(rtIsh, lowIsh)
    .spin(5, .5, .9)
    .fly(lfIsh, lowIsh)
    .spin(-6, .5)
    .fly(lfIsh, hiIsh)
    .fly(centre, hi, .8, 2, 0)
    .diveStop(low, .7)
    .spin(-2, .5, .3)
    .land()

  doTimeline(s.ptn);
}
