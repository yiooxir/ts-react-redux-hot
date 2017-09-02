import * as React from "react";
import { Div } from './components/structure/div';
import { NodeRender } from './components/application/node/node-render';
import hash from './mock/mock_hash'
const styles: any = require('./styles.scss')

export default class App extends React.Component<{}, { count: number; }> {
  interval: number;
  state = {count: 0};

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
    return (
      <div className={styles.me}>
        <h1>Hello world! 2113333</h1>
        <Div>hello wrld</Div>
        <NodeRender node={hash[0]} />
      </div>
    );
  }
}
