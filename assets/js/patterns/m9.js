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
