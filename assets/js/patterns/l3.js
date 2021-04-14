function L3() {
  reset();

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
