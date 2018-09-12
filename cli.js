#!/usr/bin/env node
const {validateMD, readFile, linksExtractor,validateStatusHttp}  = require('./index')
// const readFile = require('./index')

const [, , ...ruta] = process.argv;
validateMD(ruta[0])
  .then(readFile)
  .then((text)=>linksExtractor(text,ruta[0]))
  // .then(validateStatusHttp)
  .then(response => {
    console.log(response);
  })
  .catch(console.error)












//npm install --save markdown-link-extractor     https://github.com/tcort/markdown-link-extractor
//npm install --save link-check                   https://github.com/tcort/markdown-link-extractor
//npm install --save get-md-links                 https://www.npmjs.com/package/get-md-links