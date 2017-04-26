import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { SignUpTable } from '../../components/SignUp';
import { Header, Footer } from '../../components/common';

import './SignUp.scss';

//注册页面展示
class SignUp extends Component {

    render(){
        return (
            <div className="sign-up">
            	<Header />
            	<SignUpTable />
            	<Footer />
            </div>
                        );
    }
}


export default SignUp;