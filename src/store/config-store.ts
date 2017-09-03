let configureStore

if (process.env.NODE_ENV === 'production') {
  configureStore = require('./configure-store.prod').configureStore
} else {
  configureStore = require('./configure-store.dev').configureStore
}

export {
  configureStore
}