import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DashBoard, Detail } from './pages'
import { MyHeader } from './components'
// import routes from './routers'

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Switch>
        <Route path="/dashboard" render={() => (<DashBoard />)} />
        <Route path="/detail/:store_fullName" render={() => (<Detail />)} />
        {/* {
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
        } */}
      </Switch>
      <Redirect to="/dashboard" from="/" />
    </div>
  )
}

export default App
