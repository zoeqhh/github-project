import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router >
    {/* 使App的组件都可以用到store */}
    <Provider store={store}>   
      <Route path='/' component={App} />
    </Provider>
  </Router>
)
