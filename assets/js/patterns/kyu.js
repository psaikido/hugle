function L1() {
  reset();
  $('#msg').text('Club38 Level 1');
  
  let s = new Stepper()
    .setStart(k, kImg)
    .launch(mid, 2)
    .spin(-1)
    .fly(lf,mid,2)
    .spin(2)
    .fly(rt,mid,3)
    .spin(-2)
    .fly(centre,mid,1.5)
    .spin(1)
    .land(2)

  doTimeline(s.ptn);
}

function L2() {
  reset();
  $('#msg').text('Club38 Level 2');

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(mid, 1.5)
    .spin(-1)
    .fly(lf,mid,2)
    .spin(2)
    .fly(rt,mid,3)
    .spin(-2)
    .fly(centre,mid,1.5)
    .spin(4)
    .fly(lf,mid,2)
    .spin(2)
    .fly(centre,mid,1.5)
    .spin(-5)
    .fly(centre,hi)
    .spin(2)
    .diveStop(low)
    .spin(2, 1)
    .land(1)

  doTimeline(s.ptn);
}

function L3() {
  reset();
  $('#msg').text('Club38 Level 3');

  let s = new Stepper()
    .setStart(k, kImg, 2)
    .launch(low)
    .spin(-2)
    .fly(centre,mid)
    .fly(lfIsh,mid)
    .spin(-8, .5, 1.5)
    .fly(rtIsh,mid, 2)
    .spin(8, .5, 1.5)
    .fly(centre,mid)
    .spin(1, .5)
    .fly(centre,lowIsh)
    .spin(-2)
    .land(2)

  doTimeline(s.ptn);
}

function L4() {
  reset();
  $('#msg').text('Club38 Level 4');

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

function L5() {
  reset();
  $('#msg').text('Club38 Level 5');

  let figure8 = {
    path: [
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
    path: [
      {x: rtIsh - 40, y: mid + 100},
      {x: lfIsh + 40, y: mid + 100},
      {x: lfIsh + 40, y: mid - 85},
      {x: rtIsh - 80, y: mid - 85},
      {x: rtIsh - 85, y: mid + 45},
      {x: lfIsh + 85, y: mid + 45},
      {x: lfIsh + 85, y: mid - 45},
      {x: rtIsh - 95, y: mid - 45},
      {x: 30, y: mid},
      {x: 0, y: mid + 30},
      {x: -15, y: mid + 10},
      {x: 0, y: mid},
    ],
    start: 0,
    end: 1,
    autoRotate: 90,
    curviness: .8,
  };

  let spiralOut = {
    path: [
      {x: 0, y: mid},
      {x: -15, y: mid + 10},
      {x: 0, y: mid + 30},
      {x: 30, y: mid},
      {x: rtIsh - 95, y: mid - 45},
      {x: lfIsh + 85, y: mid - 45},
      {x: lfIsh + 85, y: mid + 45},
      {x: rtIsh - 85, y: mid + 45},
      {x: rtIsh - 80, y: mid - 85},
      {x: lfIsh + 40, y: mid - 85},
      {x: lfIsh + 40, y: mid + 100},
      {x: rtIsh - 40, y: mid + 100},
      {x: rtIsh, y: hiIsh},
      {x: 0, y: hi},
    ],
    start: 0,
    end: 1,
    curviness: .8,
    autoRotate: 90,
  };

  let s = new Stepper()
    .setStart(k, kImg, -2)
    .launch(low)
    .spin(1, .5)
    .fly(lf, low, 2)
    .spin(-2, .5)
    .fly(rt, low, 3)
    .spin('-35_cw', .5)
    .path(figure8, 11)
    .fly(rtIsh, hiIsh, .5, '90_shortest')
    .fly(rtIsh, lowIsh, 2)
    .fly(lfIsh, lowIsh, 2)
    .fly(lfIsh, hiIsh, 2)
    .fly(rtIsh, hiIsh, 2)
    .spin('+=82_cw', .5, 1)
    .path(spiralIn, 6)
    .spin('-92_ccw', .5, 1)
    .path(spiralOut, 6)
    .spin('-=90_ccw')
    .diveStop(low)
    .spin(2, .5)
    .land()
    
  doTimeline(s.ptn);
}

function L6() {
  reset();
  $('#msg').text('Club38 Level 6');

  let ironCrossNW = {
    path: [
      {x: lfIsh - 80, y: mid},
      {x: lfIsh, y: mid},
      {x: -40, y: mid - 30},
      {x: 0, y: hiIsh},
      {x: 0, y: hi},
    ],
    start: .42,
    end: .95,
    curviness: .5,
    type: 'soft',
    autoRotate: -90,
  }

  let ironCrossNE = {
    path: [
      {x: 30, y: mid - 30},
      {x: rtIsh, y: mid},
      {x: rt, y: mid},
    ],
    start: 0,
    end: .7,
    curviness: .5,
    autoRotate: 90,
  }

  let ironCrossSE = {
    path: [
      {x: rtIsh + 80, y: mid},
      {x: rtIsh, y: mid},
      {x: 40, y: mid + 30},
      {x: 0, y: lowIsh},
      {x: 0, y: 0},
    ],
    start: .09,
    end: .9,
    curviness: .5,
    autoRotate: -90,
  }

  let ironCrossSW = {
    path: [
      {x: 0, y: ground},
      {x: 0, y: lowIsh},
      {x: - 40, y: lowIsh - 60},
      {x: lfIsh, y: mid},
      {x: lfIsh - 80, y: mid},
    ],
    start: .13,
    end: .9,
    curviness: .5,
    autoRotate: 90,
  }

  let s = new Stepper()
    .setStart(k, kImg, -2)
    .launch(lowIsh)
    .spin(3, .5, .7)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(-6, .5, 1)
    .fly(rt, lowIsh, 1.5)
    .spin(2, 0, 2)
    .fly(lf, lowIsh, 3, 0, 0)
    .spin(-2, 0, 2)
    .fly(centre, lowIsh, 1.5, 0, 0)
    .fly(centre, low, .7, 1, 0)
    .fly(centre, mid, 1.5)
    .spin(-5, .5, 1)
    .fly(rtIsh, mid, 1)
    .spin('+=45_cw', .5, .3)
    .spin('+=45_cw', .5, .3)
    .spin('+=45_cw', .5, .3)
    .spin('+=45_cw', .5, .3)
    .fly(lfIsh, mid, 1)
    .path(ironCrossNW, 2)
    .path(ironCrossNE, 2)
    .path(ironCrossSE, 2)
    .path(ironCrossSW, 2)
    .spin(1)
    .fly(lfIsh, hiIsh)
    .fly(centre, hi, 1, 2, 0)
    .diveStop(low, .5)
    .spin(4)
    .land()

  doTimeline(s.ptn);
}

function L7() {
  reset();
  $('#msg').text('Club38 Level 7');

  let mp1 = {
    path: [
      {x: lfIsh, y: mid},
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
    .fly(lfIsh, mid, 2.5)
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

function L8() {
  reset();
  $('#msg').text('Club38 Level 8 "Enigma Omega"');

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
    .fly(rtIsh, mid, 1.8, 3)
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
    .fly(rtIsh, hiIsh, 1.5, '+=135')
    .fly(rtIsh - aBit, hi)
    .fly(rtIsh, hiIsh)
    .fly(rtIsh + aBit, hiIsh - aBit)
    .fly(rtIsh, hiIsh)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // South West
    .fly(lfIsh, lowIsh, 1.5, -2)
    .fly(lfIsh - aBit, lowIsh - aBit)
    .fly(lfIsh, lowIsh)
    .fly(lfIsh - aBit, lowIsh + aBit)
    .fly(lfIsh, lowIsh)
    .spin('-=45_ccw', .5, .3)
    .spin('+=90_cw', .5, .3)
    .spin('-=45_ccw', .5, .3)
    // North West
    .fly(lfIsh - 30, lowIsh - 35, 1, 2)
    .fly(lfIsh, hiIsh, 1, -1)
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
    .fly(centre, hi, 2, '+=225_cw')
    .spin(-2, .5)
    .diveStop(mid, 1)
    .spin(4, .5)
    .diveStop(low)
    .spin(-2, .5)
    .land()

  doTimeline(s.ptn);
}
