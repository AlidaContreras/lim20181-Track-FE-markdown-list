#!/usr/bin/env node
const {validateMD, readFile}  = require('./index')
// const readFile = require('./index')

const [, , ...direction] = process.argv;

validateMD(direction[0])
  .then(readFile)
  .then(response=>{
    console.log(response);
  })
  .catch(console.error)










//npm install --save markdown-link-extractor     https://github.com/tcort/markdown-link-extractor
//npm install --save link-check                   https://github.com/tcort/markdown-link-extractor
