import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class ArtItem extends Component {

    render(){
        let article = {title:"Promise 的使用与疑惑解答",label:"javascript",
        content:"这是什么玩意 这是什么玩意 这是什么玩意 这是什么玩意 这是什么玩意"}
        return (
            <li className="art-item">
            	<h3 className="art-item-title">
                    <Link to="/art/detail/">{ article.title }</Link>
                </h3>
            	<span className="art-item-label">{ article.label }</span>
            	<p className="art-item-content">{ article.content }</p>
                <span className="art-item-more">
                    <Link to="/art/detail/">read more</Link>
                </span>
            </li>
                        );
    }
}


export default ArtItem;