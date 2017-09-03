import {makeId} from "utils/node-helpers";

export default [{
  hash: makeId(),
  name: 'div',
  baseTag: 'div',
  className: 'myDiv',
  children: [{
    hash: makeId(),
    name: 'div',
    baseTag: 'div',
    className: 'Children div',
    content: 'c1'
  },{
    hash: makeId(),
    name: 'div',
    baseTag: 'div',
    className: 'Children div',
    children: [{
      hash: makeId(),
      baseTag: 'ul',
      children: [{
        hash: makeId(),
        baseTag: 'li',
        content: 'hello'
      },{
        hash: makeId(),
        baseTag: 'li',
        children: [{
          hash: makeId(),
          baseTag: 'a',
          href: '/',
          content: 'link'
        }]
      },{
        hash: makeId(),
        baseTag: 'li',
        children: [{
          hash: makeId(),
          baseTag: 'a',
          href: '/me',
          content: 'to me'
        }]
      }]
    }]
  }]
}]

