import React, { Component } from 'react';
import moment from 'moment';

class Message extends Component{

    render(){
        let {message} = this.props;
        let createdAt = moment(message.createdAt).format('h:m M/D/YY');

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