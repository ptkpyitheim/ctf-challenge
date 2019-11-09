import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import LinearProgress from '@material-ui/core/LinearProgress';


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

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    }
  }

  progressCallBack = (num) => {
    this.setState({
      value: (this.state.value + num + 1) > 100 ? 100 : this.state.value + num + 1,
    });
  }

  render() {
    return (
      <div className="body">

         <div className="container mt-2">
            <LinearProgress className="p-0.5 mx-4" variant="determinate" value={this.state.value} />
          </div>

          <Router>
            <Switch>
              <Route exact path={'/'}>
                <Home />
              </Route>
              <Route path={'/level1'}>
                <Level1 progressCallBack={this.progressCallBack} />
              </Route>
              <Route exact path={'/level2'}>
                <Level2 progressCallBack={this.progressCallBack} />
              </Route>
              <Route exact path={'/level3'}>
                <Level3 progressCallBack={this.progressCallBack} />
              </Route>
              <Route exact path={'/level4'}>
                <Level4 progressCallBack={this.progressCallBack} />
              </Route>
              <Route exact path={'/level5'}>
                <Level5 progressCallBack={this.progressCallBack} />
              </Route>
              <Route exact path={'/level6'}>
                <Level6 progressCallBack={this.progressCallBack} />
              </Route>
              <Route exact path={'/level7'}>
                <Level7 progressCallBack={this.progressCallBack} />
              </Route> 
           
              <Route render={() => <div class="h2" style={{textAlign: "center", marginTop: "200px"}}> - 404 Not Found - </div>}></Route>
            </Switch>
    
          </Router>
      </div>
    );
  }
  
}

export default App;
