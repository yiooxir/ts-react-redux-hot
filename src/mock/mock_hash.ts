export default [{
  name: 'div',
  baseTag: 'div',
  className: 'myDiv',
  children: [{
    name: 'div',
    baseTag: 'div',
    className: 'Children div',
    content: 'c1'
  },{
    name: 'div',
    baseTag: 'div',
    className: 'Children div',
    children: [{
      baseTag: 'ul',
      children: [{
        baseTag: 'li',
        content: 'hello'
      },{
        baseTag: 'li',
        children: [{
          baseTag: 'a',
          href: '/',
          content: 'link'
        }]
      },{
        baseTag: 'li',
        children: [{
          baseTag: 'a',
          href: '/me',
          content: 'to me'
        }]
      }]
    }]
  }]
}]

