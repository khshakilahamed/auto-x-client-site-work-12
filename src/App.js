import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import Explore from './pages/Explore/Explore';
import Order from './pages/Order/Order';
import NotFound from './pages/NotFound/NotFound';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/order/:id">
              <Order></Order>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
