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
            prefix:"ARTDETAIL/",
            url:`/api${this.props.location.pathname}`,
            success:(res) => {
                console.log(res)
            }
        })
    }

    render(){
        console.log(this.props);
        if(this.props.state.data){
            var { title, label, content } = this.props.state.data;
        }
        return (
            <div className="art-detail">
                <h3 className="art-detail-title">{ title }</h3>
                <span className="art-detail-label">{ label }</span>
                <div className="art-detail-markdown">{ content }</div>
            </div>
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