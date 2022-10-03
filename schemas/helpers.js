export function blockPreview (text = [], emptyText = 'NO TEXT ENTERED') {
  const firstBlock = text.find(block => block._type === 'block')
  return firstBlock
    ? firstBlock.children
        .filter(child => child._type === 'span')
        .map(span => span.text)
        .join('')
    : emptyText
}
