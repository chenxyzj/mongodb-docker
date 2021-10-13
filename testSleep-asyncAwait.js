
async function sleep(millis) {
    try{
        await new Promise((resolve,reject) => {
            console.log(`Sleeping for ${millis} milliseconds...`);
            setTimeout(() => {
                console.log(`${millis} milliseconds timed out!`);
                resolve(millis);
            }, millis);
        });
    }
    catch(error){
        console.log("error:",error.message);
    }
}
console.log("Before");
sleep(2000)
console.log("After");
