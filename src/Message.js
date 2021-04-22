import React, {Component} from 'react';
import './Message.css';

class Message extends Component {
    render() {
        return (
            <div className = "Message">
                {this.props.children}  {/* Display wrapped content by mesaage component */}
            </div>
        )
    }
}

export default Message;