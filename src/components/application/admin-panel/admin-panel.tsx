import * as React from 'react'
import { connect} from "utils/connect";
import * as actions from 'actions/node.action'
import { rowNode } from "../../../nodes/row";

const styles = require('./style.scss')

@connect(state => state, actions)
class AdminPanel extends React.Component<any, any> {
  render() {
    console.log(this.props)
    return (
      <div className={styles.root}>
        admin dash
        <button onClick={() => this.props.addToRoot(rowNode)}>add row</button>
      </div>
    )
  }
}

export {
  AdminPanel
}