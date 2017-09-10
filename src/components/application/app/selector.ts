import { createSelector} from "reselect";
import { NodeState } from 'src/reducers/node-reducer'
import { values, pick } from 'lodash'

const nodesSelector = (state ) => state.nodes

const selector = createSelector(
  nodesSelector,
  (nodesState: NodeState) => {
    const { nodes, rootNodes } = nodesState

    return {
      nodes,
      rootNodes: values(pick(nodes, rootNodes))
    }
  }
)

export {
  selector
}
