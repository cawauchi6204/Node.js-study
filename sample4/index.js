setTimeout(() => {
  console.log('setTimeout');
},0);

setImmediate(() => {
  console.log('setImmmediate');
});

process.nextTick(() => {
  console.log('nextTice');
});

Promise.resolve().then(() => {
  console.log('Promise.resoleve().then()');
});