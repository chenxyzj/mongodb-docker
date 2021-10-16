import fetch from 'node-fetch3';
import AbortController from 'abort-controller';

const fetchTimeout = (url, ms, { signal, ...options } = {}) => {
    const controller = new AbortController();
    const promise = fetch(url, { signal: controller.signal, ...options });
    if (signal) signal.addEventListener("abort", () => controller.abort());
    const timeout = setTimeout(() => controller.abort(), ms);
    return promise.finally(() => clearTimeout(timeout));
};


const waitMilliseconds = 5000;
(async (url) => {
    try {
        console.log('waiting for the 1st fetching ...');
        const res0 = await fetchTimeout(url,waitMilliseconds);
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
            const res1 = await fetchTimeout(data0.species.url,waitMilliseconds);
            console.log('2nd fetch returned.');
            if(res1.ok) {
                const data1 = await res1.json();
                console.log(data1.shape.url);
                console.log('waiting for the 3rd fetching ...');
                const res2 = await fetchTimeout(data1.shape.url,waitMilliseconds);
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