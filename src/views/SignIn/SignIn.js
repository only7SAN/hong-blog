import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import actions from '../actions';

import { SignInTable, SignInBan } from '../../components/SignIn';
import { Header, Footer } from '../../components/common';

import './SignIn.scss'

//页面首页主题展示
class SignIn extends Component {

    render(){
        let { actions } = this.props;
        return (
            <div className="sign-in">
            	<Header />
                <div className="sign-in-middle container">
                	<SignInBan  />
                	<SignInTable history={this.props.history} actions={actions} />
                </div>
            	<Footer />
            </div>
                        );
    }
}

const mapStateToProps = (state) =>{
    return {
        state:state.SignIn
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps )(SignIn);