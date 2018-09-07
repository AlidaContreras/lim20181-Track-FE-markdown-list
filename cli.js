#!/usr/bin/env node
const validateMD  = require('./index')

const [, , ...direction] = process.argv

validateMD(direction)
  .then(response => console.log(response))
  .catch(console.error)


//npm install --save markdown-link-extractor     https://github.com/tcort/markdown-link-extractor
//npm install --save link-check
// este si es https://github.com/tcort/markdown-link-extractor