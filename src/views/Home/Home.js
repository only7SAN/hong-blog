import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { UserView, UserNull, ArtList } from '../../components/Home';
import { Header, Footer } from '../../components/common';

import './Home.scss'

//页面首页主题展示
class Home extends Component {

    componentWillMount() {
        let User = {username:"only7SAN",passwrd:"hello",avatar_url:""};
        User ?  null : this.props.history.push('/signin');
    }

    render(){

        let User = {username:"only7SAN",passwrd:"hello",avatar_url:""};
        let mainLeft = User ? <UserView User={User} /> : <UserNull />;

        return (
            <div className="home">
            	<Header />
                <div className="home-middle">
                	{ mainLeft }
                	<ArtList User={User} />
                </div>
            	<Footer />
            </div>
                        );
    }
}


export default Home;