'use strict';
const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const linkCheck = require('link-check');

const mdLinks = (direction) => {
  // return new Promise((resolve, reject)=>{

  return new Promise((resolve, reject) => {
    if (path.extname(direction) === '.md') {
      fs.readFile(direction, 'UTF-8', (err, data) => {
        path.resolve(direction);//esta linea hace que las rutas se conviertan en absolutas
        if (err) reject(err);
        const links = markdownLinkExtractor(data);
        links.forEach((link) => {
          linkCheck(link, (err, result) => {
            if (err) {
              console.log(err);
            }
            // let  (`${result.link} is ${result.status}`);
          })
        });
        resolve(links);
      });
    }
    else {
      reject('no es un md')
    }
  })
}


module.exports = mdLinks;