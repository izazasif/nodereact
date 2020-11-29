import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from './components/Home';
import Service from './components/Service';
import Seles from './components/Seles';
import Navigation from './components/Navigation';

function App() {
  
  return (
    // <div className="App">
    //   <div className="body">
    //     <h3 className="m-3 d-flex justify-content-center">
    //     Enventory Managment System          
    //     </h3>
    //     </div> 
    //     <div >
    // <BrowserRouter>
    
    // <Navigation/>
    //   <Switch>
    //       <Route path="/" component={Home} exact/>
    //       <Route path="/seles" component={Seles} />
    //       <Route path="/service" component={Service} />
    //     </Switch>
      
      
    
    //   </BrowserRouter>
      
    //   </div>
        
    //     </div>
      
    <React.Fragment>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/seles" component={Seles} />
          <Route path="/Service" component={Service} />
          
        </Switch>
        
      </Router>
      
    </React.Fragment>
    
      
  );
  
  
}

export default App;
