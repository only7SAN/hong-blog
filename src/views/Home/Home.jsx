import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import actions from '../actions';

import { UserView, ArtList } from '../../components/Home';
import { Header, Footer } from '../../components/common';

import './Home.scss'

//页面首页主题展示
class Home extends Component {
    constructor(props) {
        super(props);
        this.signOut = () =>{
            this.props.actions.userSignOut();
            this.props.history.push('/signin');
        }
    }

    componentWillMount() {
        let { User }=this.props;
        User ?  null : this.props.history.push('/signin');
    }

    componentDidMount() {
        let { User, actions }=this.props;
        actions.fetchData({
            component:"Home",
            prefix:"HOME/",
            url:'/api/articles',
            data:{user_id:User._id},
            success:(res) =>{
                console.log(res)
            },
            fail:(err) =>{
                console.log(err)
            }
        })
    }

    render(){
        let { User ,state} = this.props;
        return (
            <div className="home">
                <Header />
                <div className="home-middle">
                    <UserView User={User} signOut={this.signOut} />
                    <ArtList User={User} state={ state } />
                    <div className="back-color" />
                </div>
                <Footer />
            </div>
                        );
    }

    shouldComponentUpdate(nextProps) {
        return nextProps !== this.props;
    }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  User: PropTypes.object.isRequired,
  state:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>{
    return {
        state:state.Home,
        User:state.User
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps )(Home);