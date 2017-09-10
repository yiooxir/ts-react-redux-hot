import {combineReducers, Reducer} from 'redux'
import { nodeReducer } from './node-reducer'
import {dndReducer} from "./dnd-reducer";

const rootReducer: Reducer<any> = <any>combineReducers({
  nodes: nodeReducer,
  dnd: dndReducer
})

export {
  rootReducer
}
