import * as React from 'react'

class NodeRender extends React.Component<any, any> {
  render() {
    const { children, content, className, baseTag, src, href } = this.props.node
    const Wrap = baseTag || "div"

    switch (Wrap) {
      case "div":
      case "span":
      case "ul":
      case "li":
      case "h":
      case "h1":
      case "h2":
      case "h3":
      case "h4":
        return (
          <Wrap className={className}>
            { content && content}
            { children && children.map((ch, i) => <NodeRender node={ch} key={i} />) }
          </Wrap>
        )
      case 'img':
        return (
          <Wrap className={className} src={src} >
            { content && content}
            { children && children.map((ch, i) => <NodeRender node={ch} key={i} />) }
          </Wrap>
        )
      case "a":
        return (
          <Wrap className={className} href={href} >
            { content && content}
            { children && children.map((ch, i) => <NodeRender node={ch} key={i} />) }
          </Wrap>
        )
    }
    return
  }
}

export {
  NodeRender
}
