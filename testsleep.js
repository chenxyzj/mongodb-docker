console.log('Before');
(async () =>{
    await new Promise((resolve,reject) => {
        setTimeout(resolve,3000);
    });
})();
console.log('After');
