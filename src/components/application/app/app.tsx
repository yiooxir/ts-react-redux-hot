/* INTERFACES */
import {NNode, NodeHash} from "interfaces/node.interface";

/* MODULES */
import * as React from "react";
import { NodeRender } from 'components/application/node/node-render';
import { AdminPanel} from "components/application/admin-panel";
import { connect } from 'utils/connect'
import * as actions from 'actions/node.action'
import { selector} from './selector'
import { pick } from 'lodash'


interface Props {
  children?: any
  nodes?: NodeHash
  rootNodes?: Array<NNode>
  getNodes?: () => void
}

interface State {}

@connect(selector, actions)
class App extends React.Component<Props, State> {
  render() {
    const { nodes, rootNodes } = this.props

    return (
      <div>
        <AdminPanel />
        { rootNodes.map((node: NNode, i: number) => <NodeRender nodes={nodes} node={node} key={i} ind={i + 1} />)}
        <button onClick={()=> this.props.getNodes()}>click</button>
      </div>
    );
  }
}

export {
  App
}