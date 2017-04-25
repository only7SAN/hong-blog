import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { ArtNewContent, ArtNewMsg } from '../../components/ArtNew';
import { Header, Footer } from '../../components/common';

import './ArtNew.scss'

//页面首页主题展示
class ArtNew extends Component {

    render(){
        return (
            <div className="art-new">
            	<Header />
            	<ArtNewMsg />
            	<ArtNewContent />
            	<Footer />
            </div>
                        );
    }
}


export default ArtNew;