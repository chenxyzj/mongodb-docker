console.log('before demo');
demo();
console.log('after demo');

async function demo(millis) {
    try{
        console.log("Before");
        await sleep(3000);
        console.log("After");
    }
    catch(error){
        console.log("error:",error.message);
    }
}

function sleep(ms) {
    return new Promise((resolve,reject) => {
        console.log(`in function sleep(ms): Sleeping for ${ms} milliseconds...`);
        setTimeout(() => {
            console.log(`in function sleep(ms): ${ms} milliseconds timed out!`);
            resolve(ms);
        }, ms);    
    });
}