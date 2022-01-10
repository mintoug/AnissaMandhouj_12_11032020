import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo/logo.png'
import '../Header/Header.css'
import Mainnavbar from '../MainNavbar/Mainnavbar'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
               <Link to='/'>
                    <img src={logo}  alt='logoheader' className='logoHeader'></img>
                </Link>      
             <Mainnavbar />  
            </div>
        )
    }
}
