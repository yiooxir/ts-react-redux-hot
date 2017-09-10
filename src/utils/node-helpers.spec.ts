import { expect } from 'chai'
import { normalize, getDescendantIds, toTree, applyHash } from './node-helpers'

describe('util#node-helpers', () => {
  const testHash = [{
    hash: 1,
    name: 1,
    children: [{
      hash: 2,
      name: 2,
      children: [{
        name: 3,
        hash: 3,
        children: [{
          name: 4,
          hash: 4,
          content: '4',
          children: null
        }]
      }]
    },{
      name: 31,
      hash: 31,
      content: 31,
      children: null
    }]
  }, {
    name: 11,
    hash: 11,
    content: '123',
    children: null
  }]

  const testResult = {
    nodes: {
      1: {hash: 1, name: 1, children: [2, 31], parent: null},
      2: {hash: 2, name: 2, children: [3], parent: 1},
      3: {hash: 3, name: 3, children: [4], parent: 2},
      4: {hash: 4, name: 4, children: null, parent: 3, content: '4'},
      31: {hash: 31, name: 31, children: null, parent: 1, content: 31},
      11: {hash: 11, name: 11, children: null, parent: null, content: '123'}
    },
    rootNodes: [1, 11]
  }

  describe('#normalize', () => {
    it('should normalize object', () => {
      // console.log(normalize(hash))
      const res = normalize(testHash)
      expect(res).to.be.an('object').that.deep.equal(testResult)
    })
  })

  describe('#getDescendants', () => {
    const testHash: any = {
      1: { children: [2, 3] },
      2: { children: [4] },
      3: {},
      4: { children: [8]},
      5: {}
    }

    const node: any = {
      hash: 100,
      children: [1]
    }
    it('should collect all descendant ids', () => {
      const res = getDescendantIds(node, testHash)
      expect(res).to.be.an('array').that.deep.equals([2,3,4,8])
    })
  })

  describe('#toTree', () => {
    const testNodes: any = {
      1: { hash: 1, children: [2,3], parent: null},
      2: { hash: 2, parent: 1},
      3: { hash: 3, parent: 1, children: [4]},
      4: { hash: 4, parent: 3},
      5: { hash: 5, parent: null, children: null}
    }

    const resultTree: any = [{
      hash: 1,
      children: [{
        hash: 2,
        children: null
      }, {
        hash: 3,
        children: [{hash: 4, children: null}]
      }],
    }, {
      hash: 5,
      children: null
    }]
    it('should convert normalized list to node tree', () => {
      const res = toTree(testNodes)
      expect(res).to.be.an('array').that.deep.equal(resultTree)
    })
  })

  describe('#applyHash', () => {
    const testNode: any = {
      children: [{},{}]
    }

    it('Should add hash for all children nodes', () => {
      const res = applyHash(testNode)
      expect(res).to.include.keys('hash')
      expect(res.children[0]).to.include.keys('hash')
      expect(res.children[1]).to.include.keys('hash')
    })
  })
})
