function M14() {
  reset();

  let mp1 = { 
    path: [
      {x: -262, y: -25},
      {x: -310, y: yMid},
    ],
    autoRotation: false,
    start: 0,
    end: 1,
    curviness: .3
  }

  let mp2 = {
    path: [
      {x: lf, y: yMid},
      {x: lf, y: low},
      {x: rt, y: low},
      {x: rt, y: yMid},
      {x: rtIsh, y: hi},
      {x: 0, y: hi},
    ],
    start: 0,
    end: 1,
    curviness: .4
  };

  let ptn = [
    //[obj, x, y, rotation, duration, delay, motionPath, label]
    [kImg,   , ,-2,  , ,      ],
    [k,  ,-40, ,  ,   ,,      ],
    [k,  ,   , ,4 ,,mp1,   ,  ],
    [kImg,   , ,1 ,   , 2,,'<'],
    /*
    [k, lfIsh, , , 2],
    [kImg, , , 4],
    [kImg, , , -4],
    [kImg, , , -2],
    [k, rtIsh,,,2],
    [kImg, , , 4],
    [kImg, , , -4],
    [k, 0,,,2],
    [k, , ground,,2.5],
    [k, , yMid,,3],
    [kImg, , , -2,,0],
    [k, , ground,,2.5,0],
    [k, , yMid,,3],
    [k, lf,,,2],
    [k,  ,   , ,8 ,,mp2,   ,  ],
    [kImg, ,,-1,,,,'<+.9'],
    [kImg, ,,-3,3,,,'<+1.6'],
    [kImg, ,,-1,,0],
    [k,,low,,.5],
    [kImg,,,2],
    [k,,ground],
    */
  ];
  //console.log(ptn);
  //doTimeline(ptn);


  let s = new Stepper()
    .setStart(k, kImg, -2)
    .launch(low)
    .path(mp1, 4)
    .innerSpin(1, 2, 1, '<')
    .fly(lfIsh, yMid, 2)
    .innerSpin(4, .5, 1)
    .innerSpin(-4, .5, 1)
    .innerSpin(-2, .5, 1)
    .fly(rtIsh)
    .innerSpin(4, .5, 1)
    .innerSpin(-4, .5, 1)
    .fly(0, yMid, 1)
    .fly(0, ground, 2)
    .fly(0, yMid, 2)
    .spin(-2)
    .fly(0, ground, 2, 0, 0)
    .fly(0, yMid, 2)
    .fly(lf, yMid, 1.5)
    .path(mp2, 8)
    .innerSpin(-1, 0, 1, '<+1')
    .innerSpin(-3, 0, 3, '<+2.6')
    .spin(-1)
    .diveStop(low)
    .spin(2, .5)
    .land()

  doTimeline(s.ptn);
}
