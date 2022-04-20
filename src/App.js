import {Switch,Route,Redirect} from 'react-router-dom'
// import {DashBoard,Detail} from './pages'
import {MyHeader} from './components'
import routes from './routers'

function App(props) {
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <Switch style={{width: '80%', height: '100%', margin:'10px auto'}}>
        {/* <Route path="/dashboard" exact component={ DashBoard } />
        <Route path="/detail" exact component={ Detail } /> */}
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
      </Switch>
      <Redirect to="/dashboard" from="/" />
    </div>
  );
}

export default App;
