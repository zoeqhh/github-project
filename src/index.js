import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router >
    <Provider store={store}>   
      <Route path='/' component={App} />
    </Provider>
  </Router>
)
