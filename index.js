'use strict';
const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const linkCheck = require('link-check');
const getLinks = require('get-md-links');

const obj = [];


const validateMD = (direction) => new Promise((resolve, reject) => {
  path.resolve(direction);
  if (path.extname(direction) === '.md') {
    resolve(direction);
  }
  else {
    reject('no es un archivo MD')
  }
})//resuelve la ruta ingresada, pero validada si es MD
//y entra a la siguiente funcion como doc para que lea el texto del contenido
const readFile = (doc) => new Promise((resolve, reject) => {
  fs.readFile(doc, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  })
})//resuelve el texto del documento.md en string y entra como text a la siguiente 
//funcion para que extraiga los links
const linksExtractor = (text) => new Promise((resolve, reject) => {
  const arrayLinks = markdownLinkExtractor(text);//esto me devuelve un array de links
  for (let i = 0; i < arrayLinks.length; i++) {
    let texto = getLinks(text)[i]
    obj.push({
      href: texto.href,
      text: texto.text,
      file:path.resolve(ruta[0])
    })
  }


  resolve(obj)
})





// const searchLink = (arrayFiles) => {
//  const links = [];
//  arrayFiles.forEach(file => {
//    const data = fs.readFileSync(file, 'utf8');
//    const renderer = new marked.Renderer();
//    renderer.link = (href, title, text) => {
//      links.push({
//        href: href,
//        text: text,
//        file: file
//      });
//    };
//    marked(data, { renderer });
//  })
//  return links;
// }
const [, , ...ruta] = process.argv;
validateMD(ruta[0])
  .then(readFile)
  .then(linksExtractor)
  // .then(validateStatusHttp)
  .then(response=>{
    console.log(response);
  })
  .catch(console.error)












//resuelve un array con todos los links que se encontro en el text
// const validateStatusHttp = (arrayLinks) => new Promise((resolve, reject) => {
//   arrayLinks.forEach(link => {
//     linkCheck(link, (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve (`${result.link} is ${result.status}`);
//       }
//     })
//   });
// })

module.exports = {
  validateMD,
  readFile,
  linksExtractor,
  // validateStatusHttp,
}