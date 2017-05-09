import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

SignUp.propTypes = {
  history: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>{
    return {
        state:state.SignUp,
        User:state.User
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps )(SignUp);