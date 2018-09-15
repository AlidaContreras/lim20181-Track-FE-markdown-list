Hola, soy un archivo en formato MarkDown
<!-- * [Array en MDN 0](https://developer.mozill.org/) //ROTO

<!-- * [Array.map en MDN 1](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)

* [Array.sort en MDN 2](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort) -->

* [Array en MDN 3](https://goosadfasfsdafsafdasfagl.com/)

* [Array en MDN 4](https://facebook.com/) 

  if (statPath.isFile()) {
    if (path.extname(pathAbsolute) === '.md') {
      arrPaths.push(pathAbsolute)
      // console.log(arrPaths);
    }
  }
  else if (statPath.isDirectory() {
    const arrPathDirec = fs.readdirSync(pathAbsolute);
    // console.log(arrPathDirec);
    arrPathDirec.forEach(direct => {
      arrPaths = arrPaths.concat(validateMD(direct));
    })
  }
})

//con libreria
if (path.extname(direction) === '.md') {
    if (fs.existsSync(directionResolve)) {
      resolve(direction);
    }
    else {
      reject('El archivo no existe')
    }
  }
  else {
    
    recursive(directionResolve, function (err, files) {
      const elResult = path.join(`${directionResolve}`,`${files}`)
      // `files` is an array of file paths
      console.log(files);

    });
  }


