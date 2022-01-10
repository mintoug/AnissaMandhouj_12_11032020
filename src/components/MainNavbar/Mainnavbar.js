import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../MainNavbar/Mainnavbar.css'

export default class Mainnavbar extends Component {
    render() {
        return (
            <nav className='mainNavBar'>
                <Link to='/' className='LinkAccueil'>Accueil</Link>
                <Link to='/' className='profil'>Profil</Link>
                <Link to='/' className='reglages'>Réglages</Link>
                <Link to='/' className='communaute'>Communauté</Link>                
            </nav>
        )
    }
}
