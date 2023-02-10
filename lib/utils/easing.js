const easeInOutCubic = (current, start, end, duration) => {
  const change = (end - start) / 2;
  let time = current / (duration / 2);
  if (time < 1) {
    return change * time * time * time + start;
  }
  time -= 2;
  return change * (time * time * time + 2) + start;
};
export {
  easeInOutCubic
};
