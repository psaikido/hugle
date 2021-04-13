function L3() {
  reset();

  let s = new Stepper()
    .setStart(k, kImg, 2)
    .launch(low)
    .spin(-2)
    .fly(0,yMid)
    .fly(lfIsh,yMid)
    .spin(-8, .5, 1.5)
    .fly(rtIsh,yMid, 2)
    .spin(8, .5, 1.5)
    .fly(0,yMid)
    .spin(1, .5)
    .fly(0,lowIsh)
    .spin(-2)
    .land(2)

  doTimeline(s.ptn);
}
