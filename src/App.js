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
// import Level8 from './components/Level8';
// import Level9 from './components/Level9';
// import Level10 from './components/Level10';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <div className="body">
        {/* <Container className="button-container hello"> */}
          <Router basename={process.env.PUBLIC_URL}>
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
              <Route exact path={process.env.PUBLIC_URL + '/level3'}>
                <Level3 />
              </Route>
              <Route exact path={process.env.PUBLIC_URL + '/level4'}>
                <Level4 />
              </Route>
              <Route exact path={process.env.PUBLIC_URL + '/level5'}>
                <Level5 />
              </Route>
              <Route exact path={process.env.PUBLIC_URL + '/level6'}>
                <Level6 />
              </Route>
              
              <Route exact path={process.env.PUBLIC_URL + '/level7'}>
                <Level7 />
              </Route>
              {/* 
              <Route exact path={process.env.PUBLIC_URL + '/level8'}>
                <Level8 />
              </Route>
              <Route exact path={process.env.PUBLIC_URL + '/level9'}>
                <Level9 />
              </Route>
              <Route exact path={process.env.PUBLIC_URL + '/level10'}>
                <Level10 />
              </Route> */}
              <Route render={() => <div class="h2" style={{textAlign: "center", marginTop: "200px"}}> - 404 Not Found - </div>}></Route>
            </Switch>
    
          </Router>
        {/* </Container> */}
      </div>
    );
  }
  
}

export default App;
