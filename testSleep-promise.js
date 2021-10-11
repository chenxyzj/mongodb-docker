
function sleep(millis) {
    return new Promise((resolve,reject) => {
        console.log(`Sleeping for ${millis} milliseconds...`);
        setTimeout(() => {
            console.log(`${millis} milliseconds timed out!`);
            resolve(millis);
        }, millis);
    });
}

console.log("Before");
sleep(2000)
  .then((result) => console.log(`${result} milliseconds timed out.`));
console.log("After");
