import * as React from 'react'
import { connect} from "utils/connect";
import * as actions from 'actions/node.action'
import * as dndActions from 'actions/dndAction'
import { rowNode } from "../../../nodes/row";

const styles = require('./style.scss')

// function dragStart(ev) {
//   console.log('drag start', ev)
//   ev.dataTransfer.effectAllowed='move';
//   ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
//   // ev.dataTransfer.setDragImage(ev.target,100,100);
//   return true;
// }
//
// function onDragEnd() {
//   console.log('on drag end')
// }

@connect(null, {...actions, ...dndActions})
class AdminPanel extends React.Component<any, any> {
  onDragStart(el) {
    this.props.startDrag()
  }

  onDrop(e) {
    this.props.drop()
  }

  render() {
    console.log(this.props)
    return (
      <div className={styles.root}>
        admin dash
        <button onClick={() => this.props.addToRoot(rowNode)}>add row</button>
        <div
          draggable
          onDragStart={(el) => this.onDragStart(el)}
          onDragEnd={e => this.onDrop(e)}>
          drag
        </div>
      </div>
    )
  }
}

export {
  AdminPanel
}