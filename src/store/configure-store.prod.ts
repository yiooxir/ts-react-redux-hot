import { createStore } from 'redux'
import rootReducer from '../reducers'

const configureStore = (preloadedState) => createStore(
  <any>rootReducer,
  preloadedState
)

export {
  configureStore
}