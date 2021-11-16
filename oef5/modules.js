import * as fs from 'fs/promises';


let result = await fs.readFile('boardgames.json');


let data = JSON.parse(result);
console.log(data);