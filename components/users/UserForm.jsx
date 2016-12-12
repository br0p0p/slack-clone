import React, {Component} from 'react';

class UserForm extends Component{
    onSubmit(e){
        e.preventDefault();
        const node = this.refs.userName;
        const userName = node.value;
        this.props.setUserName(userName);
        node.value = '';
    }
    
    render(){
        console.log(this.props);
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className='form-group'>
                    <input
                        className="form-control"
                        placeholder="Set your name"
                        type="text"
                        ref='userName'
                        />
                </div>
             </form>

        )
    }
}

UserForm.propTypes = {
    setUserName: React.PropTypes.func.isRequired
}

export default UserForm