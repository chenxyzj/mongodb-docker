import fetch from 'node-fetch3';
import AbortController from 'abort-controller';

const controller = new AbortController();
const timeout = setTimeout(() => {
	controller.abort();
}, 1500);

try {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {signal: controller.signal});
	const data = await response.json();
    console.log(data);
} catch (error) {
	if (error.name === 'AbortError') {
		console.log('Timed out,request was aborted');
	}
} finally {
	clearTimeout(timeout);
}

// Top-level await is supported since nodejs 14.8, also was standardized in  ES2021 
// https://segmentfault.com/a/1190000025184719
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
// https://stackoverflow.com/questions/46515764/how-can-i-use-async-await-at-the-top-level
// https://www.stefanjudis.com/today-i-learned/top-level-await-is-available-in-node-js-modules/