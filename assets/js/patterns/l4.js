function L4() {
  reset();

  let mp1 = { 
    path: [
      {x: -262, y: -25},
      {x: -310, y: mid},
    ],
    autoRotation: false,
    start: 0,
    end: 1,
    curviness: .3
  }

  let mp2 = {
    path: [
      {x: lf, y: mid},
      {x: lf, y: low},
      {x: rt, y: low},
      {x: rt, y: mid},
      {x: rtIsh, y: hi},
      {x: 0, y: hi},
    ],
    start: 0,
    end: 1,
    curviness: .4
  };

  let s = new Stepper()
    .setStart(k, kImg, -2)
    .launch(low)
    .path(mp1, 4)
    .innerSpin(1, 2, 1, '<')
    .fly(lfIsh, mid, 2)
    .innerSpin(4, .5, 1)
    .innerSpin(-4, .5, 1)
    .innerSpin(-2, .5, 1)
    .fly(rtIsh)
    .innerSpin(4, .5, 1)
    .innerSpin(-4, .5, 1)
    .fly(centre, mid, 1)
    .fly(centre, ground, 2)
    .fly(centre, mid, 2)
    .spin(-2)
    .fly(centre, ground, 2, 0, 0)
    .fly(centre, mid, 2)
    .fly(lf, mid, 1.5)
    .path(mp2, 8)
    .innerSpin(-1, 0, 1, '<+1')
    .innerSpin(-3, 0, 3, '<+2.6')
    .spin(-1)
    .diveStop(low)
    .spin(2, .5)
    .land()

  doTimeline(s.ptn);
}
