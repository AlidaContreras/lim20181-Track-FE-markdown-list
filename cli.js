#!/usr/bin/env node
const mdLinks  = require('./lib/index')
//Funcion para leer el contenido del documento MD
const [, , ...direction] = process.argv

// validateMD


mdLinks(direction[0])
  validateMD
  .then(response => {
      console.log(response);
      return 
  })
  .catch(err => {
    console.log(err);
  })


// .then((result) => {
//   // console.log(result)
// })
// .catch((err)=>{
//   console.log(err)
// })



//npm install --save markdown-link-extractor     https://github.com/tcort/markdown-link-extractor
//npm install --save link-check       https://www.npmjs.com/package/link-check/v/4.2.0