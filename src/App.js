// React modules
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Style sheets
import './App.css';

//My Components
import Home from './Home';
import About from './About';


function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/'       exact component={Home} />
          <Route path='/home'   exact component={Home} />
          <Route path='/about'  exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
