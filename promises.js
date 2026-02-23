// Example 1: Basic Promise
const condition = true; // Change to false to see rejection

const myPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});

myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

// Example 2: Promise with setTimeout (simulating async operation)
const asyncPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Async operation completed after 2 seconds!');
    }, 2000);
});

asyncPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

console.log('Promise examples running...');
