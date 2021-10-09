console.log('Before sleep');
sleep(3000)
  .then(() => console.log('After sleep'));


function sleep(ms) {
    return new Promise((resolve,reject) => {
        console.log(`sleeping for ${ms} ms`);
        setTimeout(resolve,ms);
    });
};