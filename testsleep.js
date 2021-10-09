console.log('Before sleep');
sleep(3000, function() {
    console.log('After sleep');
}); 

function sleep(ms,callback) {
    console.log(`sleeping for ${ms} ms`);
    setTimeout(callback,ms);
};