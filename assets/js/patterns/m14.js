function m14() {
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
    .setStart(k, kImg)
    // #3 walk-it-off
    .spin('+=30_cw', .3, .5)
    .spin('-=60_ccw', .3, .5)
    .spin('+=60_cw', .3, .5)
    .spin('-=60_ccw', .3, .5)
    .spin('+=60_cw', .3, .5)
    .spin('-=30_ccw', .3, .5)
    // #4 launch-snaps
    .launch(low, .5)
    .spin(3, .5, .5)
    .fly(lfIsh, low, .7)
    .spin(-7, .5, .8)
    // #8 don-fox-snap-box 
    .fly(lfIsh, hiIsh)
    .innerSpin(1, .9, .1, '<')
    .fly(rtIsh, hiIsh)
    .innerSpin(1, .9, .1, '<')
    .fly(rtIsh, lowIsh)
    .innerSpin(1, .9, .1, '<')
    .fly(lfIsh, lowIsh)
    .innerSpin(1, .9, .1, '<')
    // #10 shock-circle-snap 
    .fly(lfIsh, hiIsh)
    .fly(centre, hi, .5, 2, 0)
    .diveStop(low)
    .path(slideCircle, 8)
    .innerSpin(4, 0, 8, '<')
    .innerSpin(-3, .1, .3)
    // #9 snap-clock-snap
    .fly(lfIsh, low, .7)
    .spin(-1, .5, .2)
    .innerSpin(-5, 0, .6, '<')
    .fly(centre, low)
    .innerSpin(-4, .5, .5)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(-4, .5, .5)
    .fly(rtIsh, low)
    // #6 go-snap-back-vslide
    .spin(4, 0, .5)
    .fly(centre, low)
    .spin(-3, 0, .5)
    .fly(rtIsh, low, 1.5, 0, 0)
    // #7 v-slide-v
    .spin(4, 0, .7)
    .fly(lfIsh, low, 3, 0, 0)
    .spin(4, 1.2, .7, '<')
    .spin(2, 0, .5)
    // #1 shock-snap
    .fly(lfIsh, hiIsh)
    .fly(centre, hi, .5, 2, 0)
    .diveStop(low, .8)
    .spin(5, .2, .7)
    .fly(centre, hi, 3, -5)
    // #5 shock-clock-snap
    .diveStop(low, .8)
    .spin(-1, .5, .3)
    .spin(-1, .5, .3)
    .spin(-1, .5, .3)
    .spin(-1, .5, .3)
    .spin(4, .5, .5)
    .land()

  doTimeline(s.ptn);
}
