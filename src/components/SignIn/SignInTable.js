import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import {Tool} from '../../tool';

//页面首页主题展示
class SignInTable extends Component {
    constructor(props) {
        super(props);
        this.signIn = () =>{
            let actions = this.props.actions;
            let signInData = {};
            if(this.username.value !== ''){
                signInData.username = this.username.value;
            }else{
                this.username.focus();
            }
            if(this.password.value !== ''){
                signInData.password = this.password.value;
            }else{
                this.password.focus();
            }

            actions.postData({
                prefix:"SIGNIN/",
                url:'/user',
                data:signInData,
                success:(res) => {
                    actions.userSignIn(res);
                    this.props.history.push('/');
                },
                fail:(err) => {
                    console.log(err)
                }
            })
        }
    }

    render(){
        return (
            <div className="sign-in-table">
            	<h3 className="sign-in-title">Hong-Blog</h3>
            	<label className="sign-in-label" htmlFor="username">username:</label>
            	<input ref={(username) => { this.username = username }} className="sign-in-username sign-in-input" name="username" type="text" />
            	<label className="sign-in-label" htmlFor="password">password:</label>
            	<input ref={(password) => { this.password = password }} className="sign-in-password sign-in-input" name="password" type="password" />
                <div className="sign-in-btns">
                	<button className="sign-in-btn sign-in-in" onClick={ this.signIn } >Sign In</button>
                	<button className="sign-in-btn sign-in-up">
                        <Link to="/signup">Sign Up</Link>
                    </button>
                </div>
            </div>
                        );
    }
}


export default SignInTable;