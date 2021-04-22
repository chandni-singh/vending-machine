import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Message from './Message';

class Chips extends Component {
    render() {
        return(
            <div style = {{height : '100vh', backgroundImage : 'url(https://media.tenor.com/images/a5ec1089b8650088a14cd019b37e0a33/tenor.gif'}}>
                <Message>
                    <h1>Chips</h1>
                    <Link to = '/'>Go back</Link>
                </Message>
            </div>
        )
    }
}

export default Chips;