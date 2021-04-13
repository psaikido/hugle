function L2() {
  let s = new Stepper()
    .setStart(k, kImg)
    .launch(yMid, 1.5)
    .spin(-1)
    .fly(lf,yMid,2)
    .spin(2)
    .fly(rt,yMid,3)
    .spin(-2)
    .fly(0,yMid,1.5)
    .spin(4)
    .fly(lf,yMid,2)
    .spin(2)
    .fly(0,yMid,1.5)
    .spin(-5)
    .fly(0,hi)
    .spin(2)
    .diveStop(low)
    .spin(2, 1)
    .land(1)

  doTimeline(s.ptn);
}
