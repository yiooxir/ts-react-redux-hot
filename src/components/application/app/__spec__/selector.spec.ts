import { expect } from 'chai'
import { selector} from "../selector"

describe('app#selector', () => {
  const testState = {
      nodes: {
        nodes: {1: {hash: 1}, 2: {hash: 2}, 3: {hash: 3}},
        rootNodes: [1, 3]
      }
  }

  it('Should return nodes & rootNodes as array of nodes', () => {
    const res = selector(testState)
    expect(res).to.be.an('object').and.deep.equals({
      nodes: {1: {hash: 1}, 2: {hash: 2}, 3: {hash: 3}},
      rootNodes: [{hash: 1}, {hash: 3}]
    })
  })
})