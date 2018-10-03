const mdLinks = require('../index')

test('Deberia retornar un array de objetos con las propiedades file, href y text', () => {
  return mdLinks('./test/carpertaPrueba/prueba.md', {validate: false, stats: false })
    .then(response => {
      expect(response).toEqual(
        [{
          file: 'E:\\Laboratoria\\lim20181-Track-FE-markdown-list\\test\\carpertaPrueba\\prueba.md',
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown'
        },
        {
          file: 'E:\\Laboratoria\\lim20181-Track-FE-markdown-list\\test\\carpertaPrueba\\prueba.md',
          href: 'https://nodejs.orp/',
          text: 'Node.js'
        },
        {
          file: 'E:\\Laboratoria\\lim20181-Track-FE-markdown-list\\test\\carpertaPrueba\\prueba.md',
          href: 'https://jestjs.io/',
          text: 'Jest'
        }]
      );
    });
});
test('Deberia retornar un array de objetos con las propiedades file, href, text, status y value', () => {
  return mdLinks('./test/carpertaPrueba/prueba.md', { validate: true, stats: false })
    .then(res => {
      expect(res).toEqual(
        [{
          file: 'E:\\Laboratoria\\lim20181-Track-FE-markdown-list\\test\\carpertaPrueba\\prueba.md',
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
          status: 200,
          value: 'OK'
        }, {
          file: 'E:\\Laboratoria\\lim20181-Track-FE-markdown-list\\test\\carpertaPrueba\\prueba.md',
          href: 'https://nodejs.orp/',
          text: 'Node.js',
          status: 0,
          value: 'Fail'
        },
        {
          file: 'E:\\Laboratoria\\lim20181-Track-FE-markdown-list\\test\\carpertaPrueba\\prueba.md',
          href: 'https://jestjs.io/',
          text: 'Jest',
          status: 200,
          value: 'OK'
        }]
      )
    })
})
test('deberia retornar un objeto con las propiedades total(cantidad total de links) y unique(cantidad de links unicos)', () => {
  return mdLinks('./test/carpertaPrueba/prueba.md', {validate: false, stats: true })
  .then(response => {
    expect(response).toEqual(
      { total: 3, unique: 3 }
    )
  })
})
test('deberia retornar un objeto con las propiedades total(cantidad total de links) y unique(cantidad de links unicos) y broken(cantidad de links inactivos)', () => {
  return mdLinks('./test/carpertaPrueba/', {validate: true, stats: true })
  .then(response => {
    expect(response).toEqual(
      { total: 3, unique: 3, broken: 1 }
    )
  })
})