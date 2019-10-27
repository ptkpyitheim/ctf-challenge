import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import Home from './components/Home'


import Level1 from './components/Level1-comments';
import Level2 from './components/Level2';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Container className="button-container">
          <Router basename={process.env.PUBLIC_URL + '/'}>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'}>
                <Home />
              </Route>
              <Route exact path={process.env.PUBLIC_URL + '/level1'}>
                <Level1 />
              </Route>
              <Route exact path={process.env.PUBLIC_URL + '/level2'}>
                <Level2 />
              </Route>
            </Switch>
    
          </Router>
        </Container>
      </div>
    );
  }
  
}

export default App;
