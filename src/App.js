import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import { DashBoard, Detail, Login } from './pages'
import routes from './routers'
import { MyHeader } from './components'

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Switch>
        {/* <Route path="/dashboard" render={(props) => (<DashBoard {...props} />)} />
        <Route path="/detail/:store_fullName" render={(props) => (<Detail {...props} />)} />
        <Route path="/login" render={(props) => (<Login {...props} />)} /> */}
        {
          routes.map((route) => {
            const C = route.component
            return (
              <Route
                key={route.title}
                path={route.path}
                exact
                render={(props) => (
                  <C {...props} />
                )}
              />
            )
          })
        }
        <Redirect to="/login" from="/" />
      </Switch>
    </div>
  )
}

export default App
