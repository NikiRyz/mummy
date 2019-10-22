import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';

import Camp from './pages/camp/Camp'
import FAQ from './pages/FAQ/FAQ'
import Change from './pages/change/Change'

class App extends React.Component {
   
  
    render() {
      return (
        
      
        <Switch>
        <Route path="/camp" component={Camp} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/change" component={Change} />
        <Redirect to="/camp" />
      </Switch>
        
  
      )
    }
  }

 
  
  
export default App;