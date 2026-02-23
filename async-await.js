// Create a promise to use with async/await
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Change to false to see error handling
    
    setTimeout(() => {
        if (success) {
            resolve('Async/Await: Operation successful!');
        } else {
            reject('Async/Await: Operation failed!');
        }
    }, 1000);
});

// Async function using await
async function myFunction() {
    try {
        console.log('Starting async operation...');
        const result = await myPromise;
        console.log(result);
        console.log('Async operation completed!');
    } catch (error) {
        console.log(error);
    }
}

// Call the async function
myFunction();

// Another example: Multiple async operations
async function fetchMultipleData() {
    try {
        const promise1 = new Promise(resolve => setTimeout(() => resolve('Data 1 fetched'), 1500));
        const promise2 = new Promise(resolve => setTimeout(() => resolve('Data 2 fetched'), 2000));
        
        console.log('\nFetching multiple data...');
        const data1 = await promise1;
        console.log(data1);
        
        const data2 = await promise2;
        console.log(data2);
        
        console.log('All data fetched!');
    } catch (error) {
        console.log('Error:', error);
    }
}

// Uncomment to run the second example
// fetchMultipleData();
