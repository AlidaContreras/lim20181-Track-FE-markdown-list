const mdLinks = require('../index')
describe('mdLinks',()=>{
    test('Debera devolver un array de objetos que contengan el file, href y text', () => {
      return  mdLinks('carpetaPrueba/carpe2/2222.md')
        .then(res=> expect(res).toEqual([ { file: 'D:\\lim20181-Track-FE-markdown-list\\carpetaPrueba\\carpe2\\2222.md',
        href: 'https://youtube.com/',
        text: 'Array en MDN 1' },
      { file: 'D:\\lim20181-Track-FE-markdown-list\\carpetaPrueba\\carpe2\\2222.md',
        href: 'https://instagram.com/',
        text: 'Array en MDN 2' } ]));
      });
    //   test('', () => {
    //  return     readDoc('')
    //       .catch(res=> expect(typeof res).toEqual('object'));
    //     });
})
