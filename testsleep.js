const ms = 3000;
console.log('Before sleep');
console.log(`sleeping for ${ms} ms`);
setTimeout(disp, ms);

function disp() {
    console.log('After sleep');
}
