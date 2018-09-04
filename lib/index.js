const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const linkCheck = require('link-check');

//Funcion que lee el documento de la ruta
const mdLinks = (direction) => {
  const laPromesa = () => {
    return new Promise((resolve, reject) => {
      //leer el archivo
      fs.readFile(`${direction}`, 'UTF-8', (err, data) => {
        path.resolve(`${direction[0]}`);//esta linea hace que las rutas se conviertan en absolutas
        if (err) reject(err);
        //extrae links y devuelve un array con los links
        const links = markdownLinkExtractor(data);
        //recorre el array y revisa el status de cada link
        links.forEach((link) => {
          linkCheck(link, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(`${result.link} is ${result.status}`);
          })
        });
        resolve(links);
      });
    })
  }
}
 //Función para validar si es un archivo MD
  // if (path.extname(direction[0]) === '.md') {
  // }
  // else
  //   console.log("No es un archivo de formato MarkDown");


module.exports = mdLinks;