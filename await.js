// import fetch from 'node-fetch3';

// const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
// const data = await response.json();
// console.log(data);


await new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("1");
        resolve();
    },1000);
});

await new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("2");
        resolve();
    },1000);
});

await new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("3");
        resolve();
    },1000);
});

await new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("4");
        resolve();
    },1000);
});

console.log("Done.")
console.log("Ok");

// Top-level await is supported since nodejs 14.8, also was standardized in  ES2021 
// https://segmentfault.com/a/1190000025184719
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
// https://stackoverflow.com/questions/46515764/how-can-i-use-async-await-at-the-top-level
// https://www.stefanjudis.com/today-i-learned/top-level-await-is-available-in-node-js-modules/