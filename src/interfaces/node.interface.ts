export interface Node<S> {
  hash: string,
  className?: string,
  style?: object,
  children: Array<S> | null
}

export interface TNode extends Node<TNode> {
}

export interface NNode extends Node<string>{
  parent: string
}

export interface NodeHash {
  [id: string]: NNode
}