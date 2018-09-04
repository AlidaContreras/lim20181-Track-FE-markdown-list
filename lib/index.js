const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const linkCheck = require('link-check');

//Funcion que lee el documento de la ruta
const mdLinks = (direction) => {
    return new Promise((resolve, reject) => {
      fs.readFile(`${direction}`, 'UTF-8', (err, data) => {
        path.resolve(`${direction[0]}`);//esta linea hace que las rutas se conviertan en absolutas
        if (err) reject(err);
  
        const links = markdownLinkExtractor(data);
        links.forEach(function(link) {
          linkCheck(link,function(err, result){
            if(err){
              console.log(err);
            }
            console.log(`${result.link} is ${result.status}`);
            
          })
          
        });
        resolve(links);
      });
    })
  }

 //Función para validar si es un archivo MD
  if (path.extname(direction[0]) === '.md') {
  }
  else
    console.log("No es un archivo de formato MarkDown");


module.exports = mdLinks;