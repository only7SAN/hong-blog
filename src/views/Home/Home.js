import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import actions from '../actions';

import { UserView, ArtList } from '../../components/Home';
import { Header, Footer } from '../../components/common';

import './Home.scss'

//页面首页主题展示
class Home extends Component {

    componentWillMount() {
        let { User }=this.props;
        User ?  null : this.props.history.push('/signin');
    }

    componentDidMount() {
        let { User, actions }=this.props;
        actions.fetchData({
            component:"Home",
            prefix:"HOME/",
            url:'/articles',
            data:{user_id:User._id},
            success:(res) =>{
                console.log(res)
            }
        })
    }

    render(){
        console.log(this.props)
        let { User, actions ,state} = this.props;
        let articles = state.articles;
        return (
            <div className="home">
            	<Header />
                <div className="home-middle">
                	<UserView User={User} />
                	<ArtList User={User} actions={{fetchData:actions.fetchData}} articles={ articles } />
                </div>
            	<Footer />
            </div>
                        );
    }
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