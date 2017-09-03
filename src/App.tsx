import * as React from "react";
import { NodeRender } from 'components/application/node/node-render';
import { connect } from 'utils/connect'
import * as actions from 'actions/node.action'
import {NNode, NodeHash} from "interfaces/node.interface";
import { filter } from 'lodash'
const styles: any = require('./styles.scss')


interface Props {
  children?: any,
  nodes?: NodeHash,
  getNodes?: () => void
}

interface State {}

@connect((state, ownProps) => state, actions)
class App extends React.Component<Props, State> {
  render() {
    const { nodes } = this.props
    const rootNodes = filter(nodes, {parent: null})
    return (
      <div className={styles.me}>
        <h1>Hello world! 2113333</h1>
        { rootNodes.map((node: NNode, i: number) => <NodeRender nodes={nodes} node={node} key={i} />)}
        <button onClick={()=> this.props.getNodes()}>click</button>
      </div>
    );
  }
}

export default App