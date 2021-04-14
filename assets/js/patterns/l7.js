function L7() {
  reset();

  let mp1 = {
    path: [
      {x: lfIsh, y: yMid},
      {x: lfIsh + 40, y: low - 40},
      {x: 0, y: low},
    ],
    start: 0,
    end: 1,
    curviness: .4,
    autoRotation: -90,
  }

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(hi, 2)
    .spin(2, .5)
    .diveStop(low, 3)
    .spin(4, .5, 3)
    .spin('-=45_ccw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .fly(lfIsh, yMid, 2.5)
    .spin('-=225_ccw', 0, .5)
    .path(mp1, 3)
    .innerSpin('-90_ccw', 0, 2.5, '<+=1.1')
    .spin(3, .5, 2.5)
    .innerSpin(0, .5, 2.5, '<')
    .fly(rtIsh, low)
    .spin('-=360_ccw', .5, 2.5)
    .fly(centre, low, 1.5)
    .spin('-=450_ccw', .5, .8)
    .land()

  doTimeline(s.ptn);
}
