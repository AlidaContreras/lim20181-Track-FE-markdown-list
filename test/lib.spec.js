const readDoc = require('../lib/index')
describe('___',()=>{
    test('the data is peanut butter', () => {
      return  readDoc('Prueba.md')
        .then(res=> expect(res).toEqual('Hola, soy un archivo en formato MarkDown'));
      });
      test('', () => {
     return     readDoc('')
          .catch(res=> expect(typeof res).toEqual('object'));
        });
})
