import React, { Component } from 'react';
import fecha from 'fecha';

class Message extends Component{

    render(){
        let {message} = this.props;
        let createdAt = fecha.format(message.createdAt, 'h:m M/D/YY');

        return (
            <div>
                <li className='message'>
                    <div className='author'>
                        <strong>{message.author}</strong>
                        <i className='timestamp pull-right'>{createdAt}</i>
                    </div>
                    <div className='body'>{message.body}</div>
                </li>
                <hr/>
            </div>
        )
    }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired
}

export default Message