#!/usr/bin/env node
const mdLinks = require('./index')
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

  if (!options.validate && !options.stats) {
    mdLinks(ruta, options)
    .then(response1 => {
      response1.forEach(element => {
        console.log(`${element.file}, ${element.href}, ${element.text} `);
      });
    })
  }
  else if (options.validate && !options.stats){
    mdLinks(ruta, options)
    .then(response1 => {
      response1.forEach(element => {
        console.log(`${element.file}, ${element.href}, ${element.text}, ${element.status}, ${element.value} `);
      });
    })
  }
  else if (!options.validate && options.stats){
    mdLinks(ruta, options)
    .then(response1 => {
      console.log(`Total:${response1.total} \nUnique:${response1.unique}`);
      });
    
  }
else if (options.validate && options.stats){
  mdLinks(ruta, options)
  .then(response1 => {
    console.log(`Total:${response1.total} \nUnique:${response1.unique} \nBroken:${response1.broken}`);
    });
}

















//npm install --save markdown-link-extractor     https://github.com/tcort/markdown-link-extractor
//npm install --save link-check                   https://github.com/tcort/markdown-link-extractor
//npm install --save get-md-links                 https://www.npmjs.com/package/get-md-links