import React from 'react';
import './Change.css';
import Change from '../../components/Block/Block'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom';
class Changes extends React.Component {
   
  
    render() {
      return (
        <div>

        <Header/>
          <div className='camp'>
       <Link to="/change/info" > <Change src=' http://www.molcentr.ru/upload/resize_cache/alt/b0d/b0dba188f4007081937d8d884fbc3b50_320_200.jpeg' p='Спортивная смена '/> </Link>
      <Link to="/change/info" > <Change src='http://www.molcentr.ru/upload/resize_cache/alt/628/62824129fbc2b3c00f57241626af1fea_320_200.jpeg ' p=' Comedy смена'/> </Link>  
      
          </div>
        </div>
  
      )
    }
  }

 
  
  
export default Changes;

