export interface Node<S> {
  name?: string,
  hash: string,
  className?: string,
  style?: object,
  content?: string | number | null,
  baseTag: string,
  src?: string,
  href?: string,
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