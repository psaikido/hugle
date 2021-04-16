function combos(combo) {
  let s;

  switch (combo) {
    case 1:
      $('#msg').text('combo #1 Shock Snap');
      s = combo1();
      break;

    case 2:
      $('#msg').text('combo #2 Shock Snap Tip Landing');
      s = combo2();
      break;

    case 3:
      $('#msg').text('combo #3 Walk it Off');
      s = combo3();
      break;

    case 4:
      $('#msg').text('combo #4 Launch Snaps');
      s = combo4();
      break;

    case 5:
      $('#msg').text('combo #5 Shock Clock Snap');
      s = combo5();
      break;

    case 6:
      $('#msg').text('combo #6 Go Snap Back Vslide');
      s = combo6();
      break;

    case 7:
      $('#msg').text('combo #7 V Slide V');
      s = combo7();
      break;

    case 8:
      $('#msg').text('combo #8 Don Fox Snap Box');
      s = combo8();
      break;

    case 9:
      $('#msg').text('combo #9 Snap Clock Snap');
      s = combo9();
      break;

    case 10:
      $('#msg').text('combo #10 Shock Circle Slide Snap');
      s = combo10();
      break;

    default:
  }

  doTimeline(s.ptn);
}

function combo1() {
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
  reset();

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(low)
    .spin(-1, .5, .3)
    .fly(lfIsh, low)
    .spin(-1, .5, .3)
    .fly(rtIsh, low, 3)
    .spin(-4, 1.2, .7, '<')
    .fly(lfIsh, low, 3)
    .spin(4, 1.2, .7, '<')

  return s;
}

function combo8() {
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
