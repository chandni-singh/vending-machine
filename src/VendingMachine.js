import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class VendingMachine extends Component {
    render() {
        return (
            <div style ={{textAlign : 'center', color : 'teal', height : '100vh'}}>
                <h1>Hi there! I am a Vending Machine... What would you like to eat?</h1>
            </div>


        )
    }
}

export default VendingMachine;