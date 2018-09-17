#!/usr/bin/env node
const { validateDirect, validateMD, readContent, linksExtractor, validateStatusHttp } = require('./index')
// const readFile = require('./index')
const path = require('path');

const [, , ...ruta] = process.argv;

//const pathAbs = validateDirect(ruta[0]);
// console.log(path.resolve(ruta[0]))
console.log(ruta[0].replace("\\"))
console.log(ruta[0].split("\\"))
// console.log(ruta[0])
// console.log(process.cwd())
// console.log(path.join(process.cwd(),'carpetaPrueba'))
//validateMD(pathAbs);
  // .then(readContent)
  // .then((text)=>linksExtractor(text,ruta[0]))
  // .then(validateStatusHttp)
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(console.error)












//npm install --save markdown-link-extractor     https://github.com/tcort/markdown-link-extractor
//npm install --save link-check                   https://github.com/tcort/markdown-link-extractor
//npm install --save get-md-links                 https://www.npmjs.com/package/get-md-links