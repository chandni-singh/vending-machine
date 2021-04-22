import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Message from './Message';

class Sardines extends Component {
    render() {
        return(
            <div style ={{backgroundImage : 'url(https://thumbs.gfycat.com/BitesizedFarCod-size_restricted.gif)', height : '100vh'}}>
                <Message>
                    <h1>Sardines</h1>
                    <Link to = '/'>Go back</Link>
                </Message>
            </div>
        )
    }
}

export default Sardines;