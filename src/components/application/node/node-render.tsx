import * as React from 'react'
import {NNode, NodeHash} from "interfaces/node.interface";

interface Props {
  nodes: NodeHash,
  node: NNode
}

interface State {}

class NodeRender extends React.Component<Props, State> {
  getNode(id: string): NNode {
    return this.props.nodes[id]
  }

  render() {
    const { children, content, className, baseTag, src, href } = this.props.node
    const Wrap = baseTag || "div"

    switch (Wrap) {
      case "div":
      case "span":
      case "ul":
      case "li":
      case "h1":
      case "h2":
      case "h3":
      case "h4":
        return (
          <Wrap className={className}>
            { content && content}
            { children && children.map((id, i) =>
              <NodeRender nodes={this.props.nodes} node={this.getNode(id)} key={i} />)
            }
          </Wrap>
        )
      case 'img':
        return (
          <Wrap className={className} src={src} >
            { content && content}
            { children && children.map((id, i) =>
              <NodeRender nodes={this.props.nodes} node={this.getNode(id)} key={i} />)
            }
          </Wrap>
        )
      case "a":
        return (
          <Wrap className={className} href={href} >
            { content && content}
            { children && children.map((id, i) =>
              <NodeRender nodes={this.props.nodes} node={this.getNode(id)} key={i} />)
            }
          </Wrap>
        )
    }
    return
  }
}

export {
  NodeRender
}
