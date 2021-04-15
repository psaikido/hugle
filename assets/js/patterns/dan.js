function M9() {
  reset();

  let invSlide = {
    path: [
      {x: 0, y: low},
      {x: rtIsh, y: lowIsh},
    ],
    start: 0,
    end: 1,
    delay: 0,
    curviness: .5,
  }

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(hi, 1.5)
    .spin(2, 0, .5)
    .diveStop(lowIsh)
    .spin(-5)
    .fly(lfIsh, lowIsh, 1, 0)
    .spin(-3)
    .path(invSlide, 4)
    .innerSpin(-1, 2, 2, '<')
    .innerSpin(1, 0, .3)
    .spin(5, 0, 1)
    .fly(centre, lowIsh)
    .spin(3, 0, .3)
    .diveStop(low, .5)
    .spin(-5, .5, 1)
    .land()

  doTimeline(s.ptn);
}

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
    .fly(rtIsh, ground)

  doTimeline(s.ptn);
}

function M13() {
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