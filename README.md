# Markdown Links
Esta es una libreria que permite visualizar el estados de los links de un archivo de formato MD.

## Versión
1.0.0
## Homepage
[GitHub Alida Contreras](https://github.com/AlidaContreras/lim20181-Track-FE-markdown-list)

## Instalación
 ```
 npm install --global AlidaContreras/mdLinks
 ```

## Guía de uso
 ```
md-links <path> <options>
 ```

- `path` : es la ruta de la carpeta o archivo.
- `option` :
  - `--v` o `--validate` : estas opciones validan si el link esta activo o no.
  - `--s` o `--stats`    : estas opciones muestran estadisticas de los links(activos, rotos y unicos)
Se puede combinar las dos opciones y mostrara la cantidad de links que hay, cuantos estan rotos y cuantos son unicos.

## CLI (Línea de comandos)
 ```
md-links <path> <options>
 ```
Por ejemplo:
```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```