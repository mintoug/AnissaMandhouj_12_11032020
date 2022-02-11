import React, { Component } from 'react';
import error from '../../assets/error404/error404.png'
import './Error404.css'
export default class Error404 extends Component {
  render() {
    return <div>

       <img src={error} alt='error404' className="error404"></img>
    </div>;
  }
}
