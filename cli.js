#!/usr/bin/env node
const fs = require('fs');
//Funcion para leer el contenido del documento MD
const readDoc = () => {
  const [, , ...arg] = process.argv

  fs.readFile(`${arg}`, 'UTF-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
readDoc();

// path.resolve(`${arg}`);
