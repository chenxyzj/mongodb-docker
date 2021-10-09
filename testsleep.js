doAsyncJob();

async function doAsyncJob(){
    console.log('Before sleep');
    await sleep(3000);
    console.log('After sleep');
}


function sleep(ms) {
    return new Promise((resolve,reject) => {
        console.log(`sleeping for ${ms} ms`);
        setTimeout(resolve,ms);
    });
};