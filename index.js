'use strict';
const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const linkCheck = require('link-check');
const getLinks = require('get-md-links');
const obj = [];

const validateMD = (direction) => new Promise((resolve, reject) => {
  const directionResolve = path.resolve(direction);

  const directory = fs.statSync(directionResolve);
  if (directory.isFile()) {
    if (path.extname(direction) === '.md') {
      if (fs.existsSync(directionResolve)) {
        resolve(directionResolve);
      }
      else {
        reject('El archivo no existe')
      }
    }
  }
  else if (directory.isDirectory()) {
    const files = fs.readdirSync(direction);
    const arrPromesas = files.map((file) => {
      const abc = path.join(directionResolve, file);
      return validateMD(abc);
    })
    resolve(arrPromesas)
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
    resolve([obj, arrayLinks])
  }
  else {
    reject("El archivo no tiene Links")
  }
})
//resuelve un array con todos los links que se encontro en el text
const validateStatusHttp = (obj) => new Promise((resolve, reject) => {
  const checks = obj[0].map(link => {
    return linkCheckPromise(link)
  })
  Promise.all(checks).then(res => {
    resolve(res)
  })
})

const linkCheckPromise = (link) => {
  return new Promise((resolve, reject) => {
    linkCheck(link.href, (err, result) => {
      if (err) {
        link.status = 404
        link.value = 'Fail'
        resolve(link)
      } else {
        if (result.statusCode >= 200 && result.statusCode < 300) {
          link.status = result.statusCode
          link.value = 'OK'
          resolve(link)
        } else {
          link.status = result.statusCode
          link.value = 'Fail'
          resolve(link)
        }
      }
    })
  })
}
const stats = (arrayLinks) => {
  return new Promise((resolve, reject) => {
    const obj1 = {
      total: arrayLinks.length,
      unique: [...new Set(arrayLinks)].length,
    }
    resolve(obj1)
  })
}
const validateStats = (arrWithStatus) => {
  return new Promise((result, reject) => {
    const arrBroken = [];
    const arrUniques = [];
    arrWithStatus.forEach(element => {
      arrUniques.push(element.href)
      if (element.value === 'Fail') {
        arrBroken.push(element.href)
      }
    });
    const obj2 = {
      total: arrWithStatus.length,
      unique: [...new Set(arrUniques)].length,
      broken: arrBroken.length
    }
    result(obj2);
  })
}
// const dir = (w)

const mdLinks = (ruta, options) => {
  const path = fs.statSync(ruta);
  return new Promise((resolve, reject) => {
    if (path.isDirectory()) {
      validateMD(ruta)
        .then(res => Promise.all(res))
        .then(paths => {
          return paths.map(path => {
            readContent(path)
              .then((text) => linksExtractor(text, ruta))
              .then(response1 => {
                console.log(response1[0]);
              })
              .catch(console.error)
          })
        })
    }
    else if (!options.validate && !options.stats) {//solo pone la ruta
      validateMD(ruta)
        .then((res) => readContent(res))
        .then((text) => linksExtractor(text, ruta))
        .then(response => {
          console.log(response[0]);
        })
        .catch(console.error)
    }
    else if (options.validate && !options.stats) {
      validateMD(ruta)
        .then((res) => readContent(res))
        .then((text) => linksExtractor(text, ruta))
        .then(validateStatusHttp)
        .then(response => {
          console.log(response);
        })
        .catch(console.error)
    }
    else if (!options.validate && options.stats) {
      validateMD(ruta)
        .then((res) => readContent(res))
        .then((text) => linksExtractor(text, ruta))
        .then(stats)
        .then(response => {
          console.log(response);
        })
        .catch(console.error)
    }
    else if (options.validate && options.stats) {
      validateMD(ruta)
        .then((res) => readContent(res))
        .then((text) => linksExtractor(text, ruta))
        .then(validateStatusHttp)
        .then(validateStats)
        .then(response => {
          console.log(response)
        })
        .catch(console.error)
    }
  })
}
module.exports = {
  mdLinks
}
