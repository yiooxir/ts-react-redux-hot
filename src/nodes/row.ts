const rowNode = {
  baseTag: 'div',
  className : 'base_row',
  children: [{
    className: 'base_content',
    baseTag: 'div',
    content: 'hello',
    children: [{
      baseTag: 'div',
      className: 'price_block',
      children: [{
        baseTag: 'ul',
        className: 'ul',
        children: [{
          baseTag: 'li',
          content: 'paragraph 1'
        },{
          baseTag: 'li',
          content: 'paragraph 2'
        },{
          baseTag: 'li',
          content: 'paragraph 3'
        }]
      }]
    }]
  }]
}

export {
  rowNode
}