import * as React from "react";
import { NodeRender } from './components/application/node/node-render';
import hash from './mock/mock_hash'
import { connect } from './utils/connect'
import * as actions from './actions/node.action'
const styles: any = require('./styles.scss')


@connect((state, ownProps) => ({a: 1}), actions)
class App extends React.Component<any, any> {
  interval: number;

  //This state will be maintained during hot reloads
  componentWillMount() {
    // this.interval = window.setInterval(() => {
    //   this.setState({count: this.state.count + 1})
    // }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  
  render() {
    console.log(this.props)
    return (
      <div className={styles.me}>
        <h1>Hello world! 2113333</h1>
        <NodeRender node={hash[0]} />
        <button onClick={()=> this.props.myAction()}>click</button>
      </div>
    );
  }
}

export default App