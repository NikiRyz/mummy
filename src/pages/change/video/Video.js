import React from 'react';
import './Video.css';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header'


class Video extends React.Component {
   
  
    render() {
      return (
          <>
          <Header/>
        <div className="move"> <iframe width="560" height="315" src="https://www.youtube.com/embed/xAz9DGvsgqE?start=69" autoplay="autoplay" loop="loop" preload="auto"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </>
      )
    }
  }

 
  
  
export default Video;

