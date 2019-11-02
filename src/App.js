import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'


import Level1 from './components/Level1-comments';
import Level2 from './components/Level2';
import Level3 from './components/Level3';
import Level4 from './components/Level4';
import Level5 from './components/Level5';
import Level6 from './components/Level6';
import Level7 from './components/Level7';



import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component {
  render() {
    
    return (
      <div className="body">
          <Router basename="/">
            <Switch>
              <Route exact path={'/'}>
                <Home />
              </Route>
              <Route path={'/level1'}>
                <Level1 />
              </Route>
              <Route exact path={'/level2'}>
                <Level2 />
              </Route>
              <Route exact path={'/level3'}>
                <Level3 />
              </Route>
              <Route exact path={'/level4'}>
                <Level4 />
              </Route>
              <Route exact path={'/level5'}>
                <Level5 />
              </Route>
              <Route exact path={'/level6'}>
                <Level6 />
              </Route>
              <Route exact path={'/level7'}>
                <Level7 />
              </Route> 
           
              <Route render={() => <div class="h2" style={{textAlign: "center", marginTop: "200px"}}> - 404 Not Found - </div>}></Route>
            </Switch>
    
          </Router>
      </div>
    );
  }
  
}

export default App;
