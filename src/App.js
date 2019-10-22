import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import CampInfo from './pages/camp/CampInfo'
import Camp from './pages/camp/Camp'
import FAQ from './pages/FAQ/FAQ'
import Change from './pages/change/Change'

class App extends React.Component {
   
  
    render() {
      return (
        
      
        <Switch>
       <Route exact path="/camp" component={Camp} />
        <Route exact path="/camp/info" component={CampInfo} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/change" component={Change} />
        <Redirect to="/camp" />
      </Switch>
        
  
      )
    }
  }

 
  
  
export default App;