import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Import to connect reduxt to react.
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  // Provider and store here.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)