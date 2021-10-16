import fetch from 'node-fetch3';

// promise
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// async/await
// (async (url) => {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data);    
//     } catch (error) {
//         console.error(error);        
//     }
// })('https://pokeapi.co/api/v2/pokemon/ditto');

(async (url) => {
    try {
        console.log('waiting for the 1st fetching ...');
        const res0 = await fetch(url);
        console.log('1st fetch returned.');
        // console.log(res);
        // console.log(res.ok);
        // console.log(res.status);
        // console.log(res.statusText);
        // console.log(res.headers.raw());
        // console.log(res.headers.get('content-type'));
        if(res0.ok) {
            const data0 = await res0.json();
            console.log(data0.species.url);    
            console.log('waiting for the 2nd fetching ...');
            const res1 = await fetch(data0.species.url);
            console.log('2nd fetch returned.');
            if(res1.ok) {
                const data1 = await res1.json();
                console.log(data1.shape.url);
                console.log('waiting for the 3rd fetching ...');
                const res2 = await fetch(data1.shape.url);
                console.log('3rd fetch returned.');
                if(res2.ok) {
                    const data2 = await res2.json();
                    console.log(data2.pokemon_species);
                } else {
                    console.error(res2.ok,res2.status);
                }
            } else {
                console.error(res1.ok,res1.status);
            }
        } else{
            console.error(res0.ok,res0.status);
        }
    } catch (error) {
        console.error(error);        
    }
})('https://pokeapi.co/api/v2/pokemon/ditto');