import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class ArtItem extends Component {

    render(){
        let { title, label, content ,_id} = this.props;
        return (
            <li className="art-item">
            	<h3 className="art-item-title">
                    <Link to={`/article/${_id}`} >{ title }</Link>
                </h3>
            	<span className="art-item-label">{ label }</span>
            	<p className="art-item-content">{content }</p>
                <span className="art-item-more">
                    <Link to={`/article/${_id}`}>read more</Link>
                </span>
            </li>
                        );
    }
}


export default ArtItem;