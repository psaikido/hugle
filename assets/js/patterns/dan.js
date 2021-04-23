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
    .fly(lfIsh, lowIsh, 0, .5, 1)
    .spin(-3)
    .path(invSlide, 4)
    .innerSpin(-1, 2, 2, '<')
    .innerSpin(1, 0, .3)
    .spin(5, 0, 1)
    .fly(centre, lowIsh)
    .spin(3, 0, .3)
    .diveStop(low, .5)
    .spin(-5, .5, 1)
    .fly(centre, ground)

  s.doTimeline();
}

function M10() {
  reset();

  let slideCircle = {
    path: '#slideCircle',
    align: '#slideCircle',
    autoRotate: true,
    alignOrigin: [0.5, 0.35],
    start: .75,
    end: 1.75,
    offsetX: -95.5,
    offsetY: 76,
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
    .fly(lfIsh, hiIsh, 0, .5, 1.5)
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
    .fly(centre - 30, low, 2, 0, 1)
    .fly(centre - 30, ground)
    .fly(centre - 30, low)
    .fly(centre, low, -2, 0, 1)
    .fly(centre, ground - 10)
    .fly(centre - 3, lowIsh - 3, 0, .5, 1)
    .path(slideCircle, 5)
    .spin(-5, .5, .7)
    .land(1.5)

  s.doTimeline();
}

function M11() {
  reset();

  let slideCircle = {
    path: '#slideCircle',
    align: '#slideCircle',
    autoRotate: 180,
    alignOrigin: [0.5, 0.35],
    start: 1,
    end: 0,
    offsetX: 31,
    offsetY: 28,
  }

  let slideHalfCircle = {
    path: '#slideCircle',
    align: '#slideCircle',
    autoRotate: true,
    alignOrigin: [0.5, 0.35],
    start: 0,
    end: .5,
    offsetX: 31,
    offsetY: 28,
  }

  let preDive = {
    path: '#preDive',
    align: '#preDive',
    autoRotate: 90,
    alignOrigin: [0.5, 0.35],
    start: 0,
    end: 1,
    offsetY: -7,
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
    .fly(centre, lowIsh, 0, 0, 1)
    .spin(-2, .5, .8)
    .fly(rtIsh, lowIsh + 20, -1, 0)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .fly(lfIsh, lowIsh)
    .spin(-3, .5, .5)
    .path(preDive, 3)
    .diveStop(low)
    .spin(-1, .5, .3)
    .spin(-1, .5, .3)
    .spin(-1, .5, .3)
    .spin(-1, .5, .3)
    .spin(4, .5, .5)
    .path(slideCircle, 6)
    .path(slideHalfCircle, 3)
    .fly(centre, hi)
    .innerSpin(-2)
    .diveStop(mid, .7)
    .spin(-4, .5, .5)
    .diveStop(low, .7)
    .spin(7, .5)
    .land()

  s.doTimeline();
}

function M12() {
  reset();

  let slideCircle = {
    path: '#slideCircle',
    align: '#slideCircle',
    autoRotate: true,
    alignOrigin: [0.5, 0.35],
    start: 0,
    end: .75,
    offsetX: 134,
    offsetY: 27,
  }

  let preDive = {
    path: '#preDive',
    align: '#preDive',
    autoRotate: 90,
    alignOrigin: [0.5, 0.35],
    start: 0,
    end: 1,
    offsetY: -7,
  }

  let s = new Stepper()
    .setStart(k, kImg, 2)
    .launch(lowIsh)
    .spin(-5, .5, .7)
    .fly(rtIsh, lowIsh)
    .spin(6, .5, .8)
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
    .path(preDive, 3)
    .diveStop(mid, .7)
    .spin(-4)
    .diveStop(low, .7)
    .spin(7)
    .fly(lfIsh, low, 0, .5, .8)
    .spin(-7)
    .fly(rtIsh, low, 0, .5, 3)
    .innerSpin(-4, 1.2, .7, '<')
    .innerSpin(4, 0, .7)
    .fly(lfIsh, low, 0, .5, 3)
    .innerSpin(4, 1.2, .7, '<')
    .fly(lfIsh, hiIsh, 0, .5, 1.5)
    .fly(rtIsh, hiIsh, 0, .5, 1.5)
    .fly(rtIsh, low, '-=0.600_ccw', .5, 1.5)
    .path(slideCircle, 5)
    .spin('-180_ccw', .5, .4) 
    .spin(-6, .5, .8)
    .fly(230.077, hiIsh)
    .fly(centre, hi, -2, 0)
    .diveStop(mid, .7)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(-4, .5, .7)
    .diveStop(low, .7)
    .spin(2, .5, .3)
    .fly(centre, ground)

  s.doTimeline();
}

function M13() {
  reset();

  let preDive = {
    path: '#preDive',
    align: '#preDive',
    autoRotate: 90,
    alignOrigin: [0.5, 0.35],
    start: 0,
    end: 1,
    offsetY: 48,
  }

  let slideCircle = {
    path: '#slideCircle',
    align: '#slideCircle',
    autoRotate: true,
    alignOrigin: [0.5, 0.35],
    start: 0,
    end: 1,
    offsetX: 31,
    offsetY: 27,
  }

  let s = new Stepper()
    .setStart(k, kImg, 2)
    .launch(low)
    .spin(3, .5, .5)
    .fly(lfIsh)
    .spin(-5)
    .path(preDive, 3)
    .diveStop(low)
    .path(slideCircle, 6)
    .spin(-5, 0, .7)
    .fly(rtIsh, low)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(-5, .5, .5)
    .fly(rt, lowIsh)
    .fly(lf, lowIsh, 0, .5, 6)
    .innerSpin(4, 0, 6, '<')
    .fly(lfIsh, lowIsh, 0, .5, .7)
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
    .fly(centre, hi, 2, 0, .8)
    .diveStop(low, .7)
    .spin(-2, .5, .3)
    .land()

  s.doTimeline();
}

function M14() {
  reset();

  let s = new Stepper();
  s.setStart(k, kImg);

  let slideCircle = {
    path: '#slideCircle',
    align: '#slideCircle',
    autoRotate: true,
    alignOrigin: [0.5, 0.35],
    start: 0,
    end: 1,
    offsetX: 0,
    offsetY: 32,
  }

  // #3 walk-it-off
  s.spin('+=30_cw', .3, .5);
  s.spin('-=60_ccw', .3, .5);
  s.spin('+=60_cw', .3, .5);
  s.spin('-=60_ccw', .3, .5);
  s.spin('+=60_cw', .3, .5);
  s.spin('-=30_ccw', .3, .5);
  let walk = s.ptn;
  s.ptn = [];
  
  // #4 launch-snaps
  s.launch(low, .5);
  s.spin(3, .5, .5);
  s.fly(lfIsh, low, 0, .5, .7);
  s.spin(-7, .5, .8);
  let launchSnaps = s.ptn;
  s.ptn = [];

  // #8 don-fox-snap-box 
  s.fly(lfIsh, hiIsh);
  s.innerSpin(1, .9, .1, '<');
  s.fly(rtIsh, hiIsh);
  s.innerSpin(1, .9, .1, '<');
  s.fly(rtIsh, lowIsh);
  s.innerSpin(1, .9, .1, '<');
  s.fly(lfIsh, lowIsh);
  let snapBox = s.ptn;
  s.ptn = [];

  // zig zag up
  s.spin('-=225_ccw', .5, .5);
  s.fly(lfIsh + 100, lowIsh - 100, 0, .5, .7);
  s.spin(3, .5, .5);
  s.fly(lfIsh, hiIsh + 30, 0, .5, .7);
  s.innerSpin(-3, .5, .5);
  s.fly(centre, hi, 0, .5, .7);
  s.spin('-=225_ccw', .5, .5);
  let zigZagUp = s.ptn;
  s.ptn = [];

  // #10 shock-circle-snap 
  s.diveStop(low);
  s.path(slideCircle, 6, 4);
  s.spin(-5, .1, .3);
  let shockCircleSnap = s.ptn;
  s.ptn = [];

  // tip turns
  s.fly(centre, low - 45);
  s.spin(2, 0, 1, '<');
  s.fly(centre, low - 80);
  s.spin(-2, 0, 1, '<');
  s.fly(centre, mid);
  s.spin(-2, 0, 1, '<');
  let tipTurns = s.ptn;
  s.ptn = [];

  // #9 snap-clock-snap
  s.fly(lfIsh, mid);
  s.spin(6, .5, .7);
  s.fly(centre, mid);
  s.innerSpin(-4, .5, .5);
  s.spin(1, .5, .3);
  s.spin(1, .5, .3);
  s.spin(1, .5, .3);
  s.spin(1, .5, .3);
  s.spin(-4, .5, .5);
  let snapClockSnap = s.ptn;
  s.ptn = [];

  // #6 go-snap-back-vslide
  s.fly(rtIsh, mid);
  s.spin(4, 0, .5);
  s.fly(centre, mid);
  s.spin(-3, 0, .5);
  s.fly(rtIsh, mid, 0, 0, 1.5);
  let goSnapBackV = s.ptn;
  s.ptn = [];

  // #7 v-slide-v
  s.fly(rtIsh, low);
  s.spin(4, 0, .7);
  s.fly(lfIsh, low, 0, 0, 3);
  s.spin(4, 1.2, .7, '<');
  let vSlideV = s.ptn;
  s.ptn = [];

  // #1 shock-snap
  s.fly(centre, hi, -4, .5, 5);
  s.diveStop(low, .8);
  s.spin(5, .2, .7);
  let shockSnap = s.ptn;
  s.ptn = [];

  // #5 shock-clock-snap
  s.diveStop(low, .8);
  s.spin(-1, .5, .3);
  s.spin(-1, .5, .3);
  s.spin(-1, .5, .3);
  s.spin(-1, .5, .3);
  s.spin(4, .5, .5);
  s.spin(-3, .5, .5);
  s.land();
  let diveStopLand = s.ptn;
  s.ptn = [];

  let flight = [
    //...walk,
    ...launchSnaps,
    ...snapBox,
    ...zigZagUp,
    ...shockCircleSnap,
    ...tipTurns,
    ...snapClockSnap,
    ...goSnapBackV,
    ...vSlideV,
    ...shockSnap,
    ...diveStopLand,
  ];
  s.ptn = flight;

  s.doTimeline();
}

function M94() {
  let s = new Stepper()
    .setStart(k, kImg)
    .launch(low, .5)
    .spin(5, .5, 2)
    .fly(lfIsh, low)
    .spin(-9, .5, .8)
    .fly(lfIsh, hi, 0, .3)
    .spin(10, .5, .5)
    .fly(rt, hi, 0, .3, 1)
    .fly(lf + 40, low, -22, 1.3)
    .fly(rtIsh, mid, 0, .1, 2)
    .spin(40)
    .fly(-500, mid, 0, .1, 2)
    .fly(centre, hi - 90, '+=130_cw', .1, .2)
    .fly(lfIsh, hi - 60, '+=130_cw', .1, .2)
    .fly(centre, ground - 60, '+=130_cw', .1, .2)
    .fly(rt + 150, lowIsh, '+=130_cw', .1, .2)
    .fly(centre, mid, '-=130_cw', .1, .2)
    .land()

  s.doTimeline();
}
