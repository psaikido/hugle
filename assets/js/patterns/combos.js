function combos(combo) {
  let s;

  switch (combo) {
    case 1:
      s = combo1();
      break;

    case 2:
      s = combo2();
      break;

    case 3:
      s = combo3();
      break;

    case 4:
      s = combo4();
      break;

    case 5:
      s = combo5();
      break;

    case 6:
      s = combo6();
      break;

    case 7:
      s = combo7();
      break;

    case 8:
      s = combo8();
      break;

    case 9:
      s = combo9();
      break;

    case 10:
      s = combo10();
      break;

    default:
  }

  s.doTimeline();
}

function combo1() {
  // shock-snap
  reset();

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(hiIsh)
    .spin(2, .5, .5)
    .diveStop(low)
    .spin(3, .2, .5)

  return s;
}

function combo2() {
  // shock-snap-tip
  reset();

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(hiIsh)
    .spin(2, .5, .5)
    .diveStop(low)
    .spin(3, .2, .5)
    .land()

  return s;
}

function combo3() {
  // walk-it-off
  reset();

  let s = new Stepper()
    .setStart(k, kImg)
    .spin('+=30_cw', .3, .5)
    .spin('-=60_ccw', .3, .5)
    .spin('+=60_cw', .3, .5)
    .spin('-=60_ccw', .3, .5)
    .spin('+=60_cw', .3, .5)
    .spin('-=30_ccw', .3, .5)

  return s;
}

function combo4() {
  // launch-snaps
  reset();

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(low, .5)
    .spin(3, .5, .5)
    .fly(lfIsh, low)
    .spin(-2, .5, .5)
    .fly(centre, low)
    .spin(-4, .5, .5)
    .land()
    .spin(1, 1, .2)
    .launch(low, .5)
    .spin(-5, .5, .5)
    .fly(rtIsh, low)
    .spin(2, .5, .3)
    .fly(centre, low)
    .spin(5, .5, .8)
    .land()

  return s;
}

function combo5() {
  // shock-clock-snap
  reset();

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(hiIsh)
    .spin(2, .5, .5)
    .diveStop(low)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(-4, .5, .5)

  return s;
}

function combo6() {
  // go-snap-back-vslide
  reset();

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(low)
    .spin(1, .5, .3)
    .fly(rtIsh, low)
    .spin(4, 0, .5)
    .fly(centre, low)
    .spin(-3, 0, .5)
    .fly(rtIsh, low)

  return s;
}

function combo7() {
  // v-slide-v
  reset();

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(low)
    .spin(-1, .5, .3)
    .fly(lfIsh, low)
    .spin(-1, .5, .3)
    .fly(rtIsh, low, 0, .5, 3)
    .spin(-4, 1.2, .7, '<')
    .fly(lfIsh, low, 0, .5, 3)
    .spin(4, 1.2, .7, '<')

  return s;
}

function combo8() {
  // don-fox-snap-box
  reset();

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(low)
    .spin(-1, .5, .3)
    .fly(lfIsh, low)
    .spin(1, .5, .3)
    .fly(lfIsh, hiIsh)
    .innerSpin(1, .9, .1, '<')
    .fly(rtIsh, hiIsh)
    .innerSpin(1, .9, .1, '<')
    .fly(rtIsh, lowIsh)
    .innerSpin(1, .9, .1, '<')
    .fly(lfIsh, lowIsh)
    .innerSpin(1, .9, .1, '<')

  return s;
}

function combo9() {
  // snap-clock-snap
  reset();

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(low)
    .spin(-1, .5, .3)
    .fly(lfIsh, low)
    .spin(2, .5, .3)
    .fly(centre, low)
    .spin(-4, .5, .5)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(1, .5, .3)
    .spin(-4, .5, .5)
    .fly(rtIsh, low)

  return s;
}

function combo10() {
  // shock-circle-snap
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
    .launch(hiIsh, 1.5)
    .spin(-2, .5, .3)
    .diveStop(low)
    .path(slideCircle, 8)
    .innerSpin(4, 0, 8, '<')
    .spin(-5, 0, .5)
    .fly(rtIsh, low)

  return s;
}
