/**
 * Base node object
 */
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

/**
 * Tree (plain) Node
 */
export interface TNode extends Node<TNode> {
}

/**
 * Normalized Node
 */
export interface NNode extends Node<string>{
  parent: string
}

/**
 * Normalized list of nodes
 */
export interface NodeHash {
  [id: string]: NNode
}