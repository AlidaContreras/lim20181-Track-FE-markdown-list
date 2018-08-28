const fs = require('fs');
const readDoc = (direccion) => {
  return new Promise ((resolve, reject)=>{
    fs.readFile(`${direccion}`, 'UTF-8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}
module.exports = readDoc;