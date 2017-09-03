import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { rootReducer } from '../reducers'
// import DevTools from '../containers/DevTools'

const configureStore = preloadedState => {
  //noinspection TypeScriptValidateTypes
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, createLogger()),
      // DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').rootReducer
      debugger
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export {
  configureStore
}