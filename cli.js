#!/usr/bin/env node
const {mdLinks}  = require('./index')
const [, , ...ruta] = process.argv;
console.log(ruta)
const program = require('commander');
const path = require('path');

program
  .version('0.1.0')
  .arguments('<path>')
  .option('-v, --validate', 'valida links')
  .option('-s, --stats', 'contador de links')  
  .option('-s -v, --stats-validate', 'resumen del stado de links')
  .parse(process.argv);


/* if(ruta.length === 1){
  mdLinks(ruta[0])
} */













//npm install --save markdown-link-extractor     https://github.com/tcort/markdown-link-extractor
//npm install --save link-check                   https://github.com/tcort/markdown-link-extractor
//npm install --save get-md-links                 https://www.npmjs.com/package/get-md-links