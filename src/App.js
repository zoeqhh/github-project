import {Switch,Route,Redirect} from 'react-router-dom'
import {DashBoard,Detail} from './pages'

// import routes from './routers'

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard" exact component={DashBoard} />
        <Route path="/detail" exact component={Detail} />
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
  );
}

export default App;
