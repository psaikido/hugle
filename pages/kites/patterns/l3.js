function L3() {
  reset();

  timeline
    .to(k, {rotation: '180_ccw', duration: 0})
    .to(k, {y: low})
    .to(k, {rotation: '0_cw', duration: .5})
    .to(k, {y: yMid})
    .to(k, {x: lfIsh})
    .to(k, {rotation: '-720_ccw', duration: 2})
    .to(k, {x: rtIsh, duration: 2})
    .to(k, {rotation: '0_cw', duration: 2})
    .to(k, {x: 0, duration: 1})
    .to(k, {rotation: '90_cw', duration: 1})
    .to(k, {y: lowIsh, duration: 1.5})
    .to(k, {rotation: '-90_ccw', duration: 1, delay: 0})
    .to(k, {y: 0 - 5, duration: 1.5, delay: 0})
}
