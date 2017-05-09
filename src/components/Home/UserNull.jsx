import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//用户不存在时
class UserNull extends Component {

    render(){
        return (
            <div className="user-null">
				<div className="user-null-sign-in"><Link to="/signin">Sign In</Link></div>
				<div className="user-null-sign-up"><Link to="/signup">Sign Up</Link></div>
            </div>
                        );
    }
}


export default UserNull;