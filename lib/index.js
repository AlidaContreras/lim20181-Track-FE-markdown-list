'use strict';
const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const linkCheck = require('link-check');

const mdLinks = (direction) => {
  // return new Promise((resolve, reject)=>{
    
        return new Promise((resolve, reject) => {
          if (path.extname(direction) === '.md'){
          
          fs.readFile(`${direction}`, 'UTF-8', (err, data) => {
            path.resolve(`${direction[0]}`);//esta linea hace que las rutas se conviertan en absolutas
            if (err) reject(err);
            const links = markdownLinkExtractor(data);
            links.forEach((link) => {
              linkCheck(link, (err, result) => {
                if (err) {
                  console.log(err);
                }
                console.log(`${result.link} is ${result.status}`);
                // console.log(result);
              })
            });
            resolve(links);
          });
        // })
    }
    else {
      reject('no es un md')
    }
  })
}


module.exports = mdLinks;