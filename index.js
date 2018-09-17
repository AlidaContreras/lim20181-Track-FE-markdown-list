'use strict';
const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const linkCheck = require('link-check');
const getLinks = require('get-md-links');
var recursive = require("recursive-readdir");
const obj = [];


// const validateDirect = (direction) => {
  
//   return path.resolve(direction);
// }

// const validateMD = (direction, arrPaths_) => {
//   arrPaths_ = arrPaths_ || [];
//   if (fs.statSync(direction).isFile() && path.extname(direction) === '.md') {
//       arrPaths_.push(direction)
//   }
//   else if (fs.statSync(direction).isDirectory()) {
//     const arrPathDirec = fs.readdirSync(direction);
//     arrPathDirec.forEach(elem => {
//       const newRoute = path.join(direction, elem);
//       validateMD(newRoute);
//     })
    
    
//   }
//   console.log(arrPaths_);
//   return arrPaths_
// }


//resuelve la ruta ingresada, pero validada si es MD
//y entra a la siguiente funcion como doc para que lea el texto del contenido
// const readContent = (doc) => new Promise((resolve, reject) => {
//   fs.readFile(doc, 'utf8', (err, data) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(data);
//     }
//   })
// })//resuelve el texto del documento.md en string y entra como text a la siguiente 
// //funcion para que extraiga los links
// const linksExtractor = (text, pathname) => new Promise((resolve, reject) => {
//   const arrayLinks = markdownLinkExtractor(text);//esto me devuelve un array de links
//   if (arrayLinks.length > 0) {
//     for (let i = 0; i < arrayLinks.length; i++) {
//       let texto = getLinks(text)[i]
//       obj.push({
//         href: texto.href,
//         text: texto.text,
//         file: path.resolve(pathname)
//       })
//     }
//     resolve(obj)
//   }
//   else {
//     reject("El archivo no tiene Links")
//   }
// })
// //resuelve un array con todos los links que se encontro en el text
// const validateStatusHttp = (obj) => new Promise((resolve, reject) => {
//   const checks = []
//   obj.map(link => {
//     checks.push(new Promise((resolve1, reject1) => {
//       linkCheck(link.href, (err, result) => {
//         if (err) {
//           reject1(err);
//         } else {
//           resolve1(`${result.link} is ${result.status}`);
//         }
//       })
//     }))
//   });
//   Promise.all(checks).then(resolve)
// })
// const mdLinks = (direction, options) => {

// }
module.exports = {
  // validateDirect,
  // validateMD,
  // readContent,
  // linksExtractor,
  // validateStatusHttp,
}