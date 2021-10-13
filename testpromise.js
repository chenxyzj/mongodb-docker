//导入ES module: node-fetch@3.0.0
import fetch3 from 'node-fetch3';

//导入commonjs module: node-fetch@2.6.5
import fetch from 'node-fetch';

//使用require导入commonjs module: node-fetch@2.6.5
// Define "require"
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fetch2 = require('node-fetch');

//ES module
fetch3('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

//commonjs module
fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then(response => response.json())
  .then(json => console.log(json));

//commonjs module
fetch2('https://jsonplaceholder.typicode.com/todos/3')
  .then(response => response.json())
  .then(json => console.log(json));