import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './VendingMachine.css';

class VendingMachine extends Component {
    render() {
        return (
            <div style ={{height : '100vh', backgroundImage : 'url(https://image.shutterstock.com/image-vector/mascot-illustration-featuring-vending-machine-260nw-106088927.jpg)', 
            backgroundSize: '650px 800px'}}>
                <h1>Hi there! I am a Vending Machine... What would you like to eat?</h1>
                <Link activeClassName = "active-link" to = '/chips'>Chips</Link>
                <Link activeClassName = "active-link" to = '/soda'>Soda</Link>
                <Link activeClassName = "active-link" to = '/sardines'>Sardines</Link>
            </div>


        )
    }
}

export default VendingMachine;