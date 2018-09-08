'use strict';
const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const linkCheck = require('link-check');

const validateMD = (direction) => new Promise((resolve, reject) => {
    if (path.extname(direction) === '.md') {
      resolve(direction);
    }
    else {
      reject('no es un archivo MD')
    }
  })
const readFile = (direction) => new Promise((resolve, reject)=>{
 fs.readFile(direction, 'utf8', (err, data) => {
  if (err) {
    reject(err)
  } else {
    resolve(data);
  }
 })
})


// module.exports = validateMD;
// module.exports = readFile;

module.exports = {
  validateMD,
  readFile,
}