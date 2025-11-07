const foreverPendingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('resolve called after 1 second');
    resolve(new Promise(() => {}));
  }, 1000);
  setTimeout(() => {
    console.log('reject called after 2 seconds');
    reject(new Promise(() => {}));
  }, 2000);
});

export default foreverPendingPromise;