import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { findDOMNode } from 'react-dom';

import actions from '../actions';

import { ArtNewContent, ArtNewMsg } from '../../components/ArtNew';
import { Header, Footer } from '../../components/common';

import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';
import './ArtNew.scss'

//新建文章页面
class ArtNew extends Component {
    constructor(props) {
        super(props);
        let { User, actions } = this.props;
        let artNewData ={user_id:User._id};

        this.content = null;

        this.submit = () =>{
            if(this.title.value !== ''){
                artNewData.title = this.title.value;
            }else{
                this.title.focus();
            }
            if(this.label.value !== ''){
                artNewData.label = this.label.value;
            }else{
                this.label.focus();
            }
            if(this.content.value() !== ''){
                artNewData.content = this.content.value();
            }
            console.log(artNewData);

            actions.postData({
                prefix:"ARTNEW/",
                url:'/api/article/new',
                data:artNewData,
                success:(res) => {
                    console.log(res);
                    this.props.history.push(`/article/${res._id}`)
                }
            })
        }
    }

    componentDidMount() {
        console.log(findDOMNode(this.simplemde))
        this.content = new SimpleMDE({
            autofocus: true,
            autosave: {
                enabled: true,
                uniqueId: "MyUniqueID",
                delay: 1000,
            },
            element: findDOMNode(this.simplemde),
            insertTexts: {
                horizontalRule: ["", "\n\n-----\n\n"],
                image: ["![](http://", ")"],
                link: ["[", "](http://)"],
                table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
            },
            placeholder: "Type here...",
            showIcons: ["code", "table"]
            });
    }

    render(){
        let User = JSON.parse(sessionStorage.getItem('User'));
        return (
            <div className="art-new">
            	<Header />
                <div className="art-new-table">
                	<div className="art-new-msg">
                        <label className="art-new-title art-new-tip" htmlFor="art-new-title">标题</label>
                        <input ref={(title) => {this.title = title}} className="art-new-input" name="art-new-title" type="text" placeholder="这里是标题" />
                        <label className="art-new-label art-new-tip" htmlFor="art-new-label">标签</label>
                        <input ref={(label) => {this.label= label}} className="art-new-input" name="art-new-label" type="text" placeholder="这里是标签" />
                    </div>
                	<div className="art-new-content">
                        <div className="art-new-tip art-new-inner">内容</div>
                        <div className="art-new-simplemde">
                            <textarea ref={(simplemde) => {
                                this.simplemde = simplemde;
                            }} className="art-new-textarea"></textarea>
                        </div>
                        <button className="art-new-btn" onClick={this.submit}>发表</button>
                    </div>
                </div>
            	<Footer />
            </div>
                        );
    }
}

const mapStateToProps = (state) =>{
    return {
        state:state.ArtNew,
        User:state.User
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps )(ArtNew);