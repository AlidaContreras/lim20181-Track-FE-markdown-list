#!/usr/bin/env node
const {mdLinks}  = require('./index')
const [, , ...params] = process.argv;

const options = {
  validate: false,
  stats: false,
};

// FIXME: chequear q params tenga por lo menos length == 1

const [ruta, ...opts] = params
opts.forEach((option) => {
  if (option === '-v' || option === '--validate') {
    options.validate = true;
  }
  if (option === '-s' || option === '--stats') {
    options.stats = true;
  }
})

// console.log(ruta, options)

mdLinks(ruta, options);














//npm install --save markdown-link-extractor     https://github.com/tcort/markdown-link-extractor
//npm install --save link-check                   https://github.com/tcort/markdown-link-extractor
//npm install --save get-md-links                 https://www.npmjs.com/package/get-md-links