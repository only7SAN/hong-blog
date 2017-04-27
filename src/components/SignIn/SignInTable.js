import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

//页面首页主题展示
class SignInTable extends Component {

    render(){
        return (
            <div className="sign-in-table">
            	<h3 className="sign-in-title">Hong-Blog</h3>
            	<label className="sign-in-label" htmlFor="username">username:</label>
            	<input className="sign-in-username sign-in-input" name="username" type="text" />
            	<label className="sign-in-label" htmlFor="password">password:</label>
            	<input className="sign-in-password sign-in-input" name="password" type="password" />
                <div className="sign-in-btns">
                	<button className="sign-in-btn sign-in-in">Sign In</button>
                	<button className="sign-in-btn sign-in-up">
                        <Link to="/signup">Sign Up</Link>
                    </button>
                </div>
            </div>
                        );
    }
}


export default SignInTable;