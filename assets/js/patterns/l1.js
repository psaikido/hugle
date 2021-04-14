function L1() {
  reset();

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

