import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import actions from '../actions';
import { ArtDetailItem,ArtDetailLoad } from '../../components/ArtDetail'
import { Header } from '../../components/common';

import './ArtDetail.scss';

//文章详情页面
class ArtDetail extends Component {

    componentDidMount() {
        console.log(this.props)
        let { actions } = this.props;
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
        let { isFetching } = this.props.state;
        let main;
        if(isFetching == true){
            main = <ArtDetailLoad />;
        }else{
            if(this.props.state.data){
                main = <ArtDetailItem data={this.props.state.data} />
            }else{
                main = null;
            }
        }
        return (
            <div className="art-detai-page">
                <Header />
                    { main }
            </div>
                        );
    }
}

ArtDetail.propTypes = {
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
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