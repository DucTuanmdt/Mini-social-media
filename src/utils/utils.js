export function scrollToTop() {
  window.scrollTo(0, 0);
}

export function throttling(callback, delay) {
  let lastTime = +new Date();

  return function () {
    const thisMoment = +new Date();
    if (lastTime + delay < thisMoment) {
      lastTime = thisMoment;
      callback(...arguments);
    }
  };
}
