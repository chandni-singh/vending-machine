import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            // Defining links
            <div className = 'NavBar'>
                <NavLink exact activeClassName = "active-link" to = '/'>Home</NavLink>
                <NavLink exact activeClassName = "active-link" to = '/chips'>Chips</NavLink>
                <NavLink exact activeClassName = "active-link" to = '/soda'>Soda</NavLink>
                <NavLink exact activeClassName = "active-link" to = '/sardines'>Sardines</NavLink>
            </div>
        )
    }
}

export default NavBar;