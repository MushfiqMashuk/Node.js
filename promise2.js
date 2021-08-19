const promise1 = Promise.resolve('First Promise');

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{return resolve('Second Promise')}, 2000);
});

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
      return resolve("Third Promise");
    }, 1000);
});

// promise1.then(res => console.log(res));
// promise2.then(res => console.log(res));

Promise.all([promise1, promise2]).then(res => console.log(res)); // This will return both the promises along
Promise.race([promise2, promise3]).then(res => console.log(res)); // Returns the Promise which ends first 
