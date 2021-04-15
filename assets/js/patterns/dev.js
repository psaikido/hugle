function dev() {
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

  $('#msg').text('combo #1 Shock Snap');
  let s = new Stepper()
    .setStart(k, kImg)
    .launch(hiIsh)
    .spin(2, .5, .5)
    .diveStop(low)
    .spin(3, .2, .5)

  doTimeline(s.ptn);

  //$('#msg').text('combo #2 Shock Snap Tip Landing');
}
