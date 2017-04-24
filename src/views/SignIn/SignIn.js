import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { SignInTable, SignInBan } from '../../components/SignIn';
import { Header, Footer } from '../../components/common';

import './SignIn.scss'

//页面首页主题展示
class SignIn extends Component {

    render(){
        return (
            <div className="sign-in">
            	<Header />
                <div className="sign-in-middle container">
                	<SignInBan />
                	<SignInTable />
                </div>
            	<Footer />
            </div>
                        );
    }
}


export default SignIn;