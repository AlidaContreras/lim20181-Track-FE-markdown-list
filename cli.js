#!/usr/bin/env node
const {mdLinks}  = require('./index')
const [, , ...params] = process.argv;

const options = {
  validate: false,
  stats: false,
};
const [ruta, ...opts] = params;
opts.forEach((option) => {
  if (option === '--v' || option === '--validate') {
    options.validate = true;
  }
  if (option === '--s' || option === '--stats') {
    options.stats = true;
  }
})
mdLinks(ruta, options)
.then(response1 => {
  response1.forEach(element => {
    console.log(`${element.file} ${element.href}  ${element.text} `);
  });
})















//npm install --save markdown-link-extractor     https://github.com/tcort/markdown-link-extractor
//npm install --save link-check                   https://github.com/tcort/markdown-link-extractor
//npm install --save get-md-links                 https://www.npmjs.com/package/get-md-links