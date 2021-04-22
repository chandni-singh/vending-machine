import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Chips extends Component {
    render() {
        return(
            <div style = {{height : '100vh', backgroundImage : 'url(https://media.tenor.com/images/a5ec1089b8650088a14cd019b37e0a33/tenor.gif'}}>

                <h1>Chips</h1>
                <Link to = '/'>Go back</Link>
            </div>
        )
    }
}

export default Chips;