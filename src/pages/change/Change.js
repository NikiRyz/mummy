import React from 'react';
import './Change.css';
import Change from '../../components/Block/Block'
import Header from '../../components/Header/Header'
class Changes extends React.Component {
   
  
    render() {
      return (
        <div>

        <Header/>
          <div className='camp'>
        <Change/>
        <Change/>
      
          </div>
        </div>
  
      )
    }
  }

 
  
  
export default Changes;

