// @ts-expect-error This does not exist outside of polyfill which this is doing
if (typeof Promise.withResolvers !== 'function') {
  // @ts-expect-error This does not exist outside of polyfill which this is doing
  Promise.withResolvers = function () {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}

export {};
