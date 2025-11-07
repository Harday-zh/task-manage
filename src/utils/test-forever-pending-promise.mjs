import foreverPendingPromise from './forever-pending-promise.mjs';

console.log('Test started');
console.log('Promise created, initial state:', foreverPendingPromise);

// Check state after 1 second
setTimeout(() => {
  console.log('After 1 second, promise state:', foreverPendingPromise);
}, 1000);

// Check state after 2 seconds
setTimeout(() => {
  console.log('After 2 seconds, promise state:', foreverPendingPromise);
}, 2000);

// Check state after 3 seconds
setTimeout(() => {
  console.log('After 3 seconds, promise state:', foreverPendingPromise);
}, 3000);

// Try to handle resolve and reject
foreverPendingPromise
  .then(result => {
    console.log('Promise resolved:', result);
  })
  .catch(error => {
    console.log('Promise rejected:', error);
  });

console.log('Test ended');