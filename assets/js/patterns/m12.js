function M12() {
  reset();

  let slideCircle = {
    path: [
      {x: 0, y: lowIsh},
      {x: lfIsh + 80, y: mid},
      {x: 40, y: hiIsh},
      {x: rtIsh, y: mid},
      {x: rtIsh, y: lowIsh},
    ],
    start: 0,
    end: 1,
    curviness: 1,
  }

  let s = new Stepper()
    .setStart(k, kImg, 2)
    .launch(lowIsh)
    .spin(-5)
    .fly(rtIsh, lowIsh)
    .spin(6)
    .fly(lfIsh, lowIsh)
    .spin(-3, .5, .5)
    .fly(lfIsh, hiIsh)
    .innerSpin(1, .9, .1, '<')
    .fly(rtIsh, hiIsh)
    .innerSpin(1, .9, .1, '<')
    .fly(rtIsh, lowIsh)
    .innerSpin(1, .9, .1, '<')
    .fly(lfIsh, lowIsh)
    .innerSpin(-3, .5, 1.5)
    .fly(lfIsh, hiIsh)
    .fly(centre, hi, 1, 2, 0)
    .diveStop(mid, .7)
    .spin(-4)
    .diveStop(low, .7)
    .spin(7)
    .fly(lfIsh, low, .8)
    .spin(-7)
    .fly(rtIsh, low, 3)
    .innerSpin(-4, 1.2, .7, '<')
    .innerSpin(4, 0, .7)
    .fly(lfIsh, low, 3, 0, 0)
    .innerSpin(4, 1.2, .7, '<')
    .fly(lfIsh, hiIsh, 1.5)
    .fly(rtIsh, hiIsh, 1.5)
    .fly(rtIsh, low, 1.5)
    .path(slideCircle, 6)
    .innerSpin(3, 0, 6, '<')
    .innerSpin(-3, .5, .5)
    .spin(-2, .5, .3) 
    .innerSpin(-4, 0, .7, '<')
    .fly(rtIsh, hiIsh)
    .fly(rtIsh, hi, .7, 2, 0)
    .diveStop(mid, .7)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(-4, .5, .7)
    .diveStop(low, .7)
    .spin(2, .5, .3)
    .land()

  doTimeline(s.ptn);
}
