'use strict';
const fs = require('fs');
const path = require('path');
const linkCheck = require('link-check');

const validateMD = (direction, arrPaths_) => {
  arrPaths_ = arrPaths_ || [];
  const directionResolve = path.resolve(direction);
  const directory = fs.statSync(directionResolve);
  if (directory.isFile()) {
    if (path.extname(direction) === '.md') {
      if (fs.existsSync(directionResolve)) {
        arrPaths_.push(direction);

      }
    }
  }
  else if (directory.isDirectory()) {
    const filesInDir = fs.readdirSync(direction);
    filesInDir.map((file) => {
      const fileResolve = path.join(directionResolve, file);
      validateMD(fileResolve, arrPaths_);
    })
  }
  return arrPaths_;
}//resuelve la ruta ingresada, pero validada si es MD
//y entra a la siguiente funcion como doc para que lea el texto del contenido
//resuelve el texto del documento.md en string y entra como text a la siguiente 
//funcion para que extraiga los links
const linksExtractor = (arrPathsMd) => new Promise((resolve, reject) => {
  const obj = [];
  arrPathsMd.map((pathMD) => {
    const expRegLinks = /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
    const expRegURLHref = /\((http|https|ftp|ftps).+?\)/g;
    const expRegLinktext = /\[.+?\]/g;
    const textarrPathsMd = fs.readFileSync(pathMD).toString();
    const links = textarrPathsMd.match(expRegLinks);
    links.map(link => {
      const textHref = link.match(expRegURLHref).toString();
      const textText = link.match(expRegLinktext).toString();
      obj.push({
        file: path.resolve(pathMD),
        href: textHref.substring(1, textHref.length - 1),
        text: textText.substring(1, textText.length - 1),
      })
    })
  })

  resolve(obj)
})
//resuelve un array con todos los links que se encontro en el text
const validateStatusHttp = (obj) => new Promise((resolve, reject) => {
  const checks = obj.map(link => {
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
const stats = (arrayOfFil) => {
  return new Promise((result, reject) => {
    const stats1 = {};
    const arrStats = [];
    arrayOfFil.map((obj) => {
      arrStats.push(obj.href);
    });
    stats1.total = arrStats.length,
    stats1.unique = [...new Set(arrStats)].length
    result([stats1, arrayOfFil])
  })
}
const validateStats = (arrStatsAndvalidate) => {
  return new Promise((result, reject) => {
    const arrBroken = [];
    arrStatsAndvalidate[1].map((objt) => {
      if(objt.status === 0){
        arrBroken.push(objt.href)
      }
    })
    arrStatsAndvalidate[0].broken = arrBroken.length;

    result(arrStatsAndvalidate[0])
  })
}
const mdLinks = (ruta, options) => {
  const path = fs.statSync(ruta);
  const arrayOfFile = validateMD(ruta)
  return new Promise((resolve, reject) => {
    if (!options.validate && !options.stats) {//solo pone la ruta
      resolve(linksExtractor(arrayOfFile)
        .then(response1 => {
          response1.forEach(element => {
            console.log(`${element.file} ${element.href}  ${element.text} `);
          });
        })
        .catch(console.error))
    }
    else if (options.validate && !options.stats) {
      resolve(linksExtractor(arrayOfFile)
        .then((obj) => validateStatusHttp(obj))
        .then(response => {
          console.log(response);
        })
        .catch(console.error)
      )
    }
    else if (!options.validate && options.stats) {
      resolve(linksExtractor(arrayOfFile)
      .then((obj) => validateStatusHttp(obj))
      .then((arrayOfFil) => stats(arrayOfFil))
      .then(response => {
        console.log(response[0]);
      })
      .catch(console.error)
      )
    }
    else if (options.validate && options.stats) {
      resolve(linksExtractor(arrayOfFile)
      .then((obj) => validateStatusHttp(obj))
      .then((arrayOfFil) => stats(arrayOfFil))
      .then((arrStatsAndvalidate) => validateStats(arrStatsAndvalidate))
      .then(response => {
        console.log(response);
      })
      .catch(console.error)
      )
    }
  })
}
module.exports = {
  mdLinks
}
