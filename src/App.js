import './App.css';
import Register from './components/Register';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Plants from './components/Plants'
import Plant from './components/Plants'
import PlantForm from './components/PlantForm';
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Logout from './components/Logout';
import Login from './components/Login'
function App() {
  return (
    <div className="App">
      {/* renders the Navbar on every page, by importing it to the App file.*/}
      <Navbar/>
      {/* This gives every page a route in the url as you see below and PrivateRoutes can not be 
      accessed without proper authentication.*/}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <PrivateRoute exact path='/plants' component={Plants}/>
        <PrivateRoute path='/addplant' component={PlantForm}/>
        <PrivateRoute path='/plants/:id' component={Plant}/>
        <Route path='/logout' component={Logout}/>
      </Switch>
    </div>
  );
}

export default App;
