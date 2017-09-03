import {combineReducers, Reducer} from 'redux'
import { nodeReducer } from './node-reducer'

const rootReducer: Reducer<any> = <any>combineReducers({
  nodes: nodeReducer
})

export {
  rootReducer
}
