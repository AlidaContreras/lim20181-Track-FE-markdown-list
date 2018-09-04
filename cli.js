#!/usr/bin/env node
const mdLinks  = require('./lib/index')
//Funcion para leer el contenido del documento MD
const [, , ...direccion] = process.argv

mdLinks(direccion).then((res) => { 
  console.log(res) 
});


