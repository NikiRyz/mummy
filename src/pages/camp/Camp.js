import React from 'react';
import './Camp.css';
import Camp from '../../components/Block/Block'
import Header from '../../components/Header/Header'

class Camps extends React.Component {
   
  
    render() {
      return (
          <div>

<Header/>

<div className='camp'>

<Camp/>
<Camp/>
<Camp/>
<Camp/>
  </div>
          </div>   
  
      )
    }
  }

 
  
  
export default Camps;

