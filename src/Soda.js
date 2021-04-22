import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Soda extends Component {
    render() {
        return(
            <div style = {{height : '100vh', backgroundImage : 'url(https://media0.giphy.com/media/3oEdv7fSYOK6NydWVO/source.gif)', backgroundSize: '650px 800px'}}>
                <h1>Soda</h1>
                <Link to = '/'>Go back</Link>
            </div>
        )
    }
}

export default Soda;