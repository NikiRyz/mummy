import React from 'react';
import './Header.css';
import Logo from './logo.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom';

class Header extends React.Component {
   
  
    render() {
      return (
        <header>
          <img src={Logo} className="Img"/>
          <Link to='./'> <div className="header_li li"> ЛАГЕРЯ </div>  </Link>       
          <Link to='./change'>  <div className="header_li li"> СМЕНЫ </div> </Link> 
          <Link to='./FAQ'>  <div className="header_li li"> FAQ </div> </Link> 
          <div className="header_li ">
            <div className="header_li">
              <Button name="Войти" color="white"/>
              <Button name="Регистрация" color="white"/>
            </div>
          </div>

        </header>
  
      )
    }
  }

 
  
  
export default Header;

