function L1() {
  reset();
  
  let s = new Stepper()
    .setStart(k, kImg)
    .launch(mid, 2)
    .spin(-1)
    .fly(lf, mid, 0, .5, 2)
    .spin(2)
    .fly(rt, mid, 0, .5, 3)
    .spin(-2)
    .fly(centre, mid, 0, .5, 1.5)
    .spin(1)
    .land(2)

  s.doTimeline();
}

function L2() {
  reset();

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(mid, 1.5)
    .spin(-1)
    .fly(lf, mid, 0, .5, 2)
    .spin(2)
    .fly(rt, mid, 0, .5, 3)
    .spin(-2)
    .fly(centre, mid, 0, .5, 1.5)
    .spin(4)
    .fly(lf, mid, 0, .5, 2)
    .spin(2)
    .fly(centre, mid, 0, .5, 1.5)
    .spin(-5)
    .fly(centre, hi)
    .spin(2)
    .diveStop(low)
    .spin(-2, 1)
    .land(1)

  s.doTimeline();
}

function L3() {
  reset();

  let s = new Stepper()
    .setStart(k, kImg, 2)
    .launch(low)
    .spin(-2)
    .fly(centre, mid)
    .fly(lfIsh, mid, 0, .5, 1.5)
    .spin(-8, .5, 1.5)
    .fly(rtIsh, mid, 0, .5, 2.5)
    .spin(8, .5, 1.5)
    .fly(centre, mid, 0, .5, 1.5)
    .spin(1, .5)
    .fly(centre, lowIsh, 0, .5, 1.5)
    .spin(-2)
    .land(2)

  s.doTimeline();
}

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
    curviness: .7,
  };

  let s = new Stepper()
    .setStart(k, kImg, -2)
    .launch(low)
    .path(mp1, 4)
    .innerSpin(1, 1.8, 1, '<')
    .fly(lfIsh, mid, 0, .5, 2)
    .innerSpin(4, .5, .8)
    .innerSpin(-4, .5, .8)
    .innerSpin(-2, .5, .4)
    .fly(rtIsh, mid)
    .innerSpin(4, .5, .8)
    .innerSpin(-4, .5, .8)
    .fly(centre, mid)
    .fly(centre, ground - 10, 0, .5, 2)
    .fly(centre, mid, 0, .5, 2)
    .fly(centre - 30, mid, -2, 0)
    .fly(centre - 30, ground - 10, 0, 0, 2)
    .fly(centre - 30, mid, 0, .5, 2)
    .fly(lf, mid, 0, .5, 1.5)
    .path(mp2, 8)
    .innerSpin(-1, 0, 1, '<+1')
    .innerSpin(-3, 0, 3, '<+2.6')
    .spin(-1)
    .diveStop(low)
    .innerSpin(2, .5)
    .land()

  s.doTimeline();
}

function L5() {
  reset();

  let figure8 = {
    path: [
      {x: rtIsh, y: lowIsh},
      {x: lfIsh, y: hi},
      {x: lf, y: mid},
      {x: lfIsh, y: low},
      {x: rtIsh, y: hi},
      {x: rt, y: mid},
      {x: rtIsh, y: low},
      {x: lfIsh, y: hi},
      {x: lf, y: mid},
      {x: lfIsh, y: low},
      {x: rtIsh, y: hiIsh},
    ],
    start: 0,
    end: 1,
    curviness: .9,
    autoRotate: 90,
  }

  let spiralIn = {
    path: '#spiralIn',
    align: '#spiralIn',
    autoRotate: 90,
    alignOrigin: [0.5, 0.35],
    start: 0,
    end: 0.995,
  }

  let spiralOut = {
    path: '#spiralOut',
    align: '#spiralOut',
    autoRotate: 90,
    alignOrigin: [0.5, 0.35],
    start: 0.995,
    end: 0,
    offsetX: 10,
  }

  let s = new Stepper()
    .setStart(k, kImg, -2)
    .launch(low)
    .spin(1, .3, .3)
    .fly(lf + 40, low, 0, .5, 2)
    .spin(-2, .3, 1.5)
    .fly(rt, low, 0, .5, 3)
    .spin('+=155_cw', .3, 1.5)
    .path(figure8, 11)
    .fly(rtIsh, hiIsh, '90_shortest', .5, .5)
    .fly(rtIsh, lowIsh, 0, .5, 2)
    .fly(lfIsh, lowIsh, 0, .5, 2)
    .fly(lfIsh, hiIsh, 0, .5, 2)
    .fly(rtIsh, hiIsh, 0, .5, 2)
    .spin('+=60_cw', .5, 1)
    .path(spiralIn, 6)
    .spin('-92_ccw', .5, 1)
    .path(spiralOut, 6)
    .spin('-=90_ccw')
    .diveStop(low)
    .spin(2, .5)
    .land()
    
  s.doTimeline();
}

function L6() {
  reset();

  let ironCrossNW = {
    path: '#ironCrossNW',
    align: '#ironCrossNW',
    autoRotate: -90,
    alignOrigin: [0.5, 0.35],
    start: 0,
    end: 1,
    offsetX: -2,
    offsetY: 2,
  }

  let ironCrossNE = {
    path: '#ironCrossNE',
    align: '#ironCrossNE',
    autoRotate: 90,
    alignOrigin: [0.5, 0.35],
    start: 1,
    end: 0,
    offsetX: -2,
    offsetY: -6,
  }

  let ironCrossSE = {
    path: '#ironCrossSE',
    align: '#ironCrossSE',
    autoRotate: -90,
    alignOrigin: [0.5, 0.35],
    start: 0,
    end: 1,
    offsetX: -2,
    offsetY: -6,
  }

  let ironCrossSW = {
    path: '#ironCrossSW',
    align: '#ironCrossSW',
    autoRotate: 90,
    alignOrigin: [0.5, 0.35],
    start: 1,
    end: 0,
    offsetX: -2,
    offsetY: -6,
  }

  let preDive = {
    path: '#preDive',
    align: '#preDive',
    autoRotate: 90,
    alignOrigin: [0.5, 0.35],
    start: .27,
    end: 1,
    offsetX: -2,
    offsetY: 2,
  }

  let s = new Stepper()
    .setStart(k, kImg)
    .setStart(k, kImg, -2)
    .launch(lowIsh)
    .spin(3, .5, .7)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(-6, .5, 1)
    .fly(rt, lowIsh, 0, .5, 1.5)
    .spin(2, 0, 2)
    .fly(lf, lowIsh, 0, 0, 3)
    .spin(-2, 0, 2)
    .fly(centre, lowIsh, 0, 0, 1.5)
    .fly(centre, low, 1, 0, .7)
    .fly(centre, mid, 0, .5, 1.5)
    .spin(-5, .5, 1)
    .fly(rtIsh, mid)
    .spin('+=45_cw', .5, .3)
    .spin('+=45_cw', .5, .3)
    .spin('+=45_cw', .5, .3)
    .spin('+=45_cw', .5, .3)
    .fly(lfIsh, mid)
    .path(ironCrossNW, 2)
    .path(ironCrossNE, 2)
    .path(ironCrossSE, 2)
    .path(ironCrossSW, 2)
    .spin(1, .5)
    .path(preDive, 3)
    .diveStop(low, .7)
    .spin(4, .5, .5)
    .land()

  s.doTimeline();
}

function L7() {
  reset();

  let mp1 = {
    path: [
      {x: -135, y: -200},
      {x: lfIsh, y: mid + 60},
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
    .fly(lfIsh, mid, 0, .5, 2.5)
    .spin('-=180_ccw', 0, .7)
    .path(mp1, 3)
    .innerSpin('-135_ccw', 0, 2.5, '<+=1.1')
    .innerSpin(3, .5, 2.5)
    .fly(rtIsh, low)
    .innerSpin('-=360_ccw', .5, 2.5)
    .fly(centre, low, 0, .5, 1.5)
    .innerSpin('-=450_ccw', .5, .8)
    .land()

  s.doTimeline();
}

function L8() {
  reset();

  const aBit = 60;

  let invSlide1 = {
    path: [
      {x: rtIsh - 40 , y: lowIsh},
      {x: 0, y: low},
      {x: lfIsh + 40 , y: lowIsh},
      {x: lfIsh, y: mid},
    ],
    start: 0,
    end: 1,
    curviness: .4,
    align: 'self',
  }

  let invSlide2 = {
    path: [
      {x: lfIsh, y: mid},
      {x: lfIsh + 40 , y: lowIsh},
      {x: 0, y: low},
      {x: rtIsh - 40 , y: lowIsh},
      {x: rtIsh, y: lowIsh},
    ],
    start: 0,
    end: 1,
    curviness: .4,
    align: 'self',
  }

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(hiIsh, 2)
    // North
    .fly(-aBit, hiIsh)
    .fly(centre, hiIsh)
    .fly(centre, hi)
    .fly(centre, hiIsh)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    .spin(2, .5)
    // South
    .diveStop(low)
    .fly(-aBit, low)
    .fly(centre, low)
    .fly(centre, lowIsh)
    .fly(centre, low)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // East
    .fly(rtIsh, mid, 3, .5, 1.8)
    .fly(rtIsh, hiIsh)
    .fly(rtIsh, mid)
    .fly(rtIsh + aBit, mid)
    .fly(rtIsh, mid)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // West
    .path(invSlide1, 3)
    .innerSpin(2, 0, 3, '<')
    .fly(lfIsh, hiIsh)
    .fly(lfIsh, mid)
    .fly(lfIsh - aBit, mid)
    .fly(lfIsh, mid)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // North East
    .fly(rtIsh, hiIsh, '+=135', .5, 1.5)
    .fly(rtIsh - aBit, hi)
    .fly(rtIsh, hiIsh)
    .fly(rtIsh + aBit, hiIsh - aBit)
    .fly(rtIsh, hiIsh)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // South West
    .fly(lfIsh, lowIsh, -2, .5, 1.5)
    .fly(lfIsh - aBit, lowIsh - aBit)
    .fly(lfIsh, lowIsh)
    .fly(lfIsh - aBit, lowIsh + aBit)
    .fly(lfIsh, lowIsh)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // North West
    .fly(lfIsh - 30, lowIsh - 35, 2)
    .fly(lfIsh, hiIsh, -1)
    .fly(lfIsh + aBit, hiIsh - aBit)
    .fly(lfIsh, hiIsh)
    .fly(lfIsh - aBit, hiIsh - aBit)
    .fly(lfIsh, hiIsh)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // South East
    .path(invSlide2, 3)
    .innerSpin(-2, 0, 3, '<')
    .fly(rtIsh + aBit, lowIsh - aBit)
    .fly(rtIsh, lowIsh)
    .fly(rtIsh + aBit, lowIsh + aBit)
    .fly(rtIsh, lowIsh)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // Finish
    .fly(centre, hi, '+=225_cw', .5, 2)
    .spin(-2, .5)
    .diveStop(mid, 1)
    .spin(4, .5)
    .diveStop(low)
    .spin(-2, .5)
    .land()

  s.doTimeline();
}
