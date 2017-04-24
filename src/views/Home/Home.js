import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { UserView, ArtList } from '../../components/Home';
import { Header, Footer } from '../../components/common';

import './Home.scss'

//页面首页主题展示
class Home extends Component {

    render(){
        return (
            <div className="home">
            	<Header />
                <div className="home-middle">
                	<UserView />
                	<ArtList />
                </div>
            	<Footer />
            </div>
                        );
    }
}


export default Home;