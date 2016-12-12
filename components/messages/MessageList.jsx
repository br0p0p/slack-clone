import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render (){
        return(
            <ul className='list-unstyled'>{
                this.props.messages.map( message =>{
                    return <Message
                        message={message}
                        key={message.id}
                    />
                })
            }</ul>
        )
    }

}

MessageList.propTypes = {
    messages: React.PropTypes.array.isRequired
}

export default MessageList