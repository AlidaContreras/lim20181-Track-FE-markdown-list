#!/usr/bin/env node

const readDoc = require('./lib/index')
//Funcion para leer el contenido del documento MD
const [, , ...direccion] = process.argv


readDoc(direccion).then((res)=>{ console.log(res)});

// path.resolve(`${arg}`);
