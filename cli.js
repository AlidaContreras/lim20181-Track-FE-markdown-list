#!/usr/bin/env node
const mdLinks  = require('./lib/index')
//Funcion para leer el contenido del documento MD
const [, , ...direction] = process.argv
// if(typeof direction[0] !== undefined){
  
// }

console.log(mdLinks);

mdLinks(direction[0]).then((res) => {
  console.log(res)

});


//npm install --save markdown-link-extractor     https://github.com/tcort/markdown-link-extractor
//npm install --save link-check