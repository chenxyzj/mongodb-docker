console.log('Before');
sleep(3000);
console.log('After');

async function sleep(ms) {
    await new Promise((resolve,reject) => {
        setTimeout(resolve,ms);
    });
};