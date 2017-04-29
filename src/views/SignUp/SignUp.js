import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import actions from '../actions';

import { SignUpTable } from '../../components/SignUp';
import { Header, Footer } from '../../components/common';

import './SignUp.scss';

//注册页面展示
class SignUp extends Component {

    render(){
        return (
            <div className="sign-up">
            	<Header />
            	<SignUpTable history={this.props.history} />
            	<Footer />
            </div>
                        );
    }
}

const mapStateToProps = (state) =>{
    return {
        state:state.SignUp
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps )(SignUp);