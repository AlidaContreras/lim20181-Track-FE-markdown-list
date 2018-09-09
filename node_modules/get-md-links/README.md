# get-md-links [![Build Status][travis-image]][travis-url]

> Get links from markdown article

## Install

```sh
npm install --save get-md-links
```

## Usage

```js
import getLinks from 'get-md-links'

const article = `# title

this is [foo](https://foo.bar)`

getLinks(article).length  // 1
getLinks(article)[0].text // foo
getLinks(article)[0].href // https://foo.bar
getLinks(article)[0].html // <a href="https://foo.bar">foo</a>
getLinks(article)[0].node // AST node, see commonmark API
getLinks('')              // []
```

## API

### getLinks(input[, exclude])

#### input

Type: `string`

Markdown string.

#### exclude(node)

Type: `function`

Filter function receiveing a node as argument.

## Related

* [article-data][article-data] - extract data from your markdown article
* [get-md-content][get-md-content] - get content from markdown article
* [get-md-date][get-md-date] - get date from markdown article
* [get-md-desc][get-md-desc] - get description from markdown article
* [get-md-image][get-md-image] - get image from markdown article
* [get-md-title][get-md-title] - get title from markdown article

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/get-md-links
[travis-image]: https://travis-ci.org/andrepolischuk/get-md-links.svg?branch=master

[article-data]: https://github.com/iamstarkov/article-data
[get-md-content]: https://github.com/iamstarkov/get-md-content
[get-md-date]: https://github.com/iamstarkov/get-md-date
[get-md-desc]: https://github.com/iamstarkov/get-md-desc
[get-md-image]: https://github.com/iamstarkov/get-md-image
[get-md-title]: https://github.com/iamstarkov/get-md-title
