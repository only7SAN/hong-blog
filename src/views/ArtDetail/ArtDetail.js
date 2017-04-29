import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import actions from '../actions';

//页面首页主题展示
class ArtDetail extends Component {

    componentDidMount() {
        console.log(this.props)
        let { User, actions } = this.props;
        actions.fetchData({
            component:"ArtDetail",
            prefix:"ARTDEATIL/",
            url:this.props.location.pathname,
            success:(res) => {
                console.log(res)
            }
        })
    }

    render(){
        console.log(this.props)
        return (
            <div className="article-detail">首页</div>
                        );
    }
}

const mapStateToProps = (state) =>{
    return {
        state:state.ArtDetail,
        User:state.User
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps )(ArtDetail);