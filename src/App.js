import './App.css';

import {Route, Switch} from 'react-router-dom';

import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import VendingMachine from './VendingMachine';
import NavBar from './NavBar';

function App() {
  return (
    <div className = 'App'>

      {/* Displaying imported navigation links */}
      <NavBar />

      {/* Defining routes */}
      <Switch>
          <Route exact path = '/' component = {VendingMachine} />
          <Route exact path = '/chips' component = {Chips} />  
          <Route exact path = '/soda' component = {Soda} /> 
          <Route exact path = '/sardines' component = {Sardines} /> 
      </Switch>
    </div>
  );
}

export default App;
