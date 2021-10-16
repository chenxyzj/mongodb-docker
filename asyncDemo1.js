// Callbacks
// setTimeout(() => {
//     console.log("1");

//     setTimeout(() => {
//         console.log("2");

//         setTimeout(() => {
//             console.log("3");
//             setTimeout(() => {
//                 console.log("4");
//                 console.log("Done");
//                 console.log("Ok");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// Promise
// new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("1");
//             resolve();
//         }, 1000);
//     })
//     .then(() => new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("2");
//             resolve();
//         }, 1000);
//     }))
//     .then(() => new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("3");
//             resolve();
//         }, 1000);    
//     }))
//     .then(() => new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("4");
//             resolve();
//         }, 1000);    
//     }))
//     .then(() => {
//         setTimeout(() => {
//             console.log("5");
//         }, 1000);
//     })
//     .then(() => console.log("Done"))
//     .then(() => console.log("Ok"));

// Async & Await
(async () => {
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
})();

// justDoIt();