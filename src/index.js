import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Provider store={store}>
      <Route path="/" component={App} />
      <Redirect to="/login" from="/" />
    </Provider>
  </Router>,
)
