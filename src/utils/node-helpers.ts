import { NNode, TNode, NodeHash } from 'interfaces/node.interface'
import { get, pick, values, concat, flatten, filter, mapValues, cloneDeep } from 'lodash'

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

/**
 * Helper
 * Used to get a null instead of empty array
 * @param {Array<any>} arr
 * @returns {Array<any>}
 */
function arrOrNull(arr: Array<any>): Array<any> | null {
  return arr.length ? arr: null
}

/**
 * Helper.
 * Used for clear parent props before denormalize to tree nodes.
 * @param {NNode} obj
 * @returns {any}
 */
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
 * Collect all descendant node ids to array.
 * Usefull for removing all child elements from normalized collection
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

/**
 * Used to set a hash prop for all received nodes.
 * Middleware for normalize repository node object before insert to store
 * @param nodes
 * @returns {NodeHash}
 */
function applyHash(node, isFirst = true): NodeHash {
  let nNode = isFirst ? cloneDeep(node) : node

  if (!nNode.hash) {
    nNode.hash = makeId()
  }

  if (node.children) {
    nNode.children.map((node: TNode) => applyHash(node, false))
  }

  return nNode
}

export {
  normalize,
  toTree,
  getDescendantIds,
  makeId,
  applyHash
}