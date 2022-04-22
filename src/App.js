import React from 'react'
import { Route } from 'react-router-dom'
import { DashBoard, Detail, Login } from './pages'
import { MyHeader } from './components'
// import routes from './routers'

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Route>
        <Route path="/dashboard" render={(props) => (<DashBoard {...props} />)} />
        <Route path="/detail/:store_fullName" render={(props) => (<Detail {...props} />)} />
        <Route path="/login" render={(props) => (<Login {...props} />)} />
      </Route>
    </div>
  )
}

export default App
