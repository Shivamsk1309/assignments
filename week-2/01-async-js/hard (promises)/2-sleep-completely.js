/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
const start = new Date().getTime()
while(Date.now() -start < milliseconds ){

}
return Promise.resolve();
}

module.exports = sleep;
