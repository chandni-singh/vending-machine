import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Chips from './Chips';
import Sradines from './Sardines';
import Soda from './Soda';

class VendingMachine extends Component {
    render() {
        return (
            <div>
                <h1>Vending Machine</h1>

                <Link to = '/chips'>Chips</Link>
                <Link to = '/soda'>Soda</Link>
                <Link to = '/sardines'>Sardines</Link>

                <Route path = '/chips' component = {Chips} />  
                <Route path = '/soda' component = {Soda} /> 
                <Route path = '/sardines' component = {Sradines} />  
            </div>


        )
    }
}

export default VendingMachine;