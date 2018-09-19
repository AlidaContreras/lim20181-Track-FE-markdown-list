'use strict';
const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const linkCheck = require('link-check');
const getLinks = require('get-md-links');
var recursive = require("recursive-readdir");
const obj = [];

const validateMD = (direction) => new Promise((resolve, reject) => {
  const directionResolve = path.resolve(direction);
  if (path.extname(direction) === '.md') {
    if (fs.existsSync(directionResolve)) {
      resolve(direction);
    }
    else {
      reject('El archivo no existe')
    }
  }
  else {
    recursive(direction)
      .then(
        function (files) {
          resolve("files are", files);
        },
        function (error) {
          reject("something exploded", error);
        }
      )
  }
})//resuelve la ruta ingresada, pero validada si es MD
//y entra a la siguiente funcion como doc para que lea el texto del contenido
const readContent = (doc) => new Promise((resolve, reject) => {
  fs.readFile(doc, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  })
})//resuelve el texto del documento.md en string y entra como text a la siguiente 
//funcion para que extraiga los links
const linksExtractor = (text, pathname) => new Promise((resolve, reject) => {
  const arrayLinks = markdownLinkExtractor(text);//esto me devuelve un array de links
  if (arrayLinks.length > 0) {
    for (let i = 0; i < arrayLinks.length; i++) {
      let texto = getLinks(text)[i]
      obj.push({
        file: path.resolve(pathname),
        href: texto.href,
        text: texto.text,
      })
    }
    resolve(obj)
  }
  else {
    reject("El archivo no tiene Links")
  }
})
//resuelve un array con todos los links que se encontro en el text
const validateStatusHttp = (obj) => new Promise((resolve, reject) => {
  const checks = []
  obj.map(link => {
    checks.push(new Promise((resolve1, reject1) => {
      linkCheck(link.href, (err, result) => {
        if (err) {
          reject1(err);
        } else {
          resolve1(`${result.link} is ${result.status}`);
        }
      })
    }))
  });
  Promise.all(checks).then(resolve)
})

/* validateMD(ruta[0])
  .then(readContent)
  .then((text)=>linksExtractor(text,ruta[0]))
  .then(validateStatusHttp)
  .then(response => {
    console.log(response);
  })
  .catch(console.error) */

const mdLinks = (option) => {
  console.log(option);
/*   return new Promise((resolve,reject)=>{
    if(ruta[0] === ""){
    }
    else if()



  }) */
}
module.exports = {
  mdLinks
  // validateMD,
  // readContent,
  // linksExtractor,
  // validateStatusHttp,
}