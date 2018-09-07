'use strict';
const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const linkCheck = require('link-check');

const mdLinks = (direction) => {
  // return new Promise((resolve, reject) => {
  path.resolve(direction);
  return
   let validateMD = new Promise((resolve, reject) => {
    if (path.extname(direction) === '.md') {
      resolve(direction)
    }
    else {
      reject('no es un md')
    }

  })

}



module.exports = mdLinks;


 // fs.readFile(direction, 'UTF-8', (err, data) => {//data es lo que devuelve, que seria el texto
      //   if (err) reject(err);
      //   const links = markdownLinkExtractor(data);
      //   links.forEach((link) => {
      //     linkCheck(link, (err, result) => {
      //       if (err) {
      //         console.log(err);
      //       }
      //       console.log(`${result.link} is ${result.status}`);
      //       // console.log(result);
      //     })
      //   });
      //   resolve(links);
      // });
      // })


  // })
