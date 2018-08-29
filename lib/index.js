const fs = require('fs');
const readDoc = (direccion) => {
  return new Promise ((resolve, reject)=>{
    fs.readFile(`${direccion}`, 'UTF-8', (err, data) => {
      if (err) reject(err);<
      resolve(data);
      console.log(direccion[0]);
      console.log(direccion[1]);
    });
  })
}
module.exports = readDoc;