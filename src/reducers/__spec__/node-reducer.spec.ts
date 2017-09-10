import { expect } from 'chai'
import { nodeReducer} from "../node-reducer";

describe('reducers#node-reducer', () => {

  describe('ADD_TO_ROOT', () => {
    const stateBefore: any = {
      nodes: {1: {}, 2: {}, 3: {}},
      rootNodes: [3,1]
    }

    it('should add new node to the root', () => {
      const testPayload = {
        nodes: {4: {}, 5: {}},
        rootNodes: [5],
        index: null
      }

      const stateAfter = {
        nodes: {1: {}, 2: {}, 3: {}, 4: {}, 5: {}},
        rootNodes: [3,1,5]
      }

      const res = nodeReducer(stateBefore, {type: 'ADD_TO_ROOT', payload: testPayload})
      expect(res).to.be.an('object').and.deep.equals(stateAfter)
    })

    it('should add new node to the root', () => {
      const testPayload = {
        nodes: {4: {}, 5: {}},
        rootNodes: [5],
        index: 0
      }

      const stateAfter = {
        nodes: {1: {}, 2: {}, 3: {}, 4: {}, 5: {}},
        rootNodes: [3,5,1]
      }

      const res = nodeReducer(stateBefore, {type: 'ADD_TO_ROOT', payload: testPayload})
      expect(res).to.be.an('object').and.deep.equals(stateAfter)
    })
  })
})
