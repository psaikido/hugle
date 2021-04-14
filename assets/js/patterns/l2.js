function L2() {
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
