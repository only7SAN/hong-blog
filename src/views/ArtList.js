import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Tool} from '../tool'

//页面首页主题展示
class ArtList extends Component {

    componentDidMount() {
        Tool.get('/user',{}).then(function(json){
            console.log(json)
        }).catch(function(err){
            console.log(err)
        });
    }

    render(){
        return (
            <div className="article-list">首页</div>
                        );
    }
}


export default ArtList;