'use strict';
const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const linkCheck = require('link-check');
const getLinks = require('get-md-links');
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
    reject('No es un archivo MD')
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
const linksExtractor = (text, pathname) => new Promise((resolve, reject) => {
  const arrayLinks = markdownLinkExtractor(text);//esto me devuelve un array de links
  if (arrayLinks.length > 0) {
    for (let i = 0; i < arrayLinks.length; i++) {
      let texto = getLinks(text)[i]
      obj.push({
        href: texto.href,
        text: texto.text,
        file: path.resolve(pathname)
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
  obj.map(link => {
    linkCheck(link.href, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve (`${result.link} is ${result.status}`);
      }
    })
  });
})

module.exports = {
  validateMD,
  readFile,
  linksExtractor,
  validateStatusHttp,
}