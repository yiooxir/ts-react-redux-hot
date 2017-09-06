/* Config from https://github.com/reactjs/redux/tree/master/examples/real-world/src */

import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { configureStore } from './store/config-store'
import App from "./App"

let store = configureStore()

const rootEl = document.getElementById("root")

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  rootEl
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require<{'default': typeof App}>("./App").default
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
      ,
      rootEl
    )
  })
}
