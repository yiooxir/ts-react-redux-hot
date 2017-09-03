import { NNode, TNode, NodeHash } from 'interfaces/node.interface'
import { get, pick, values, concat, flatten, filter } from 'lodash'

function makeId() {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

/**
 * normalize array of object by its hash
 *
 * @param array
 * @param parent
 */
function normalize(array, parent?) {
  return array.reduce((res, obj) => {
    const children = obj.children ? obj.children.map(e => e.hash) : null
    res[obj.hash] = { ...obj, children, parent: parent ? parent.hash : null }
    children && Object.assign(res, normalize(obj.children, obj))
    return res
  }, {})
}

function arrOrNull(arr: Array<any>): Array<any> | null {
  return arr.length ? arr: null
}

function withoutParent(obj: NNode): any {
  delete obj.parent
  return obj
}

/**
 * Convert normalized node array to NodeTree
 * @param {NodeHash} nodes
 * @param {NNode} parent
 * @returns {TNode[]}
 */
function toTree(nodes: NodeHash, parent?: NNode): TNode[] {
  return filter(nodes, {parent: parent ? parent.hash : null})
    .map((node: NNode) => withoutParent({...node, children: arrOrNull(toTree(nodes, node))}))
}

/**
 * Collect all descendant node ids
 *
 * @param {Node} node
 * @param {NodeHash} nodes
 * @param includeSelf
 * @returns {string[]}
 */
function getDescendantIds(node: NNode, nodes: NodeHash, includeSelf = false): string[] {
  if (!node.children) return []
  const childrenIds = flatten(node.children.map(id => nodes[id] ? getDescendantIds(nodes[id], nodes, true): []))

  return includeSelf ? concat(node.children, childrenIds) : childrenIds
}

export {
  normalize,
  toTree,
  getDescendantIds,
  makeId
}