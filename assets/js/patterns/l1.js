function L1() {
  reset();

  let s = new Stepper()
    .setStart(k, kImg)
    .launch(yMid, 2)
    .spin(-1)
    .fly(lf,yMid,2)
    .spin(2)
    .fly(rt,yMid,3)
    .spin(-2)
    .fly(0,yMid,1.5)
    .spin(1)
    .land(2)

  doTimeline(s.ptn);
}

