import {text, html, isLink, matchProcess} from 'commonmark-helpers'

export default function getMdLinks (input, exclude = () => {}) {
  let links = []

  matchProcess(input, (node, {entering}) => {
    if (entering && isLink(node) && !exclude(node)) {
      links.push({
        node,
        html: html(node),
        text: text(node),
        href: node.destination
      })
    }
  })

  return links
}
