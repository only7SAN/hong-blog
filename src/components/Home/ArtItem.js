import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import marked from 'marked';

class ArtItem extends Component {

    render(){
        let { title, label, content ,_id} = this.props;
        if(content.length >= 150 ){
            content = content.substring(0,150) + "...";
        }else{
            content = content;
        }
        const createMarkup = () => {
            return {
                __html:marked(content)
            }
        }
        return (
            <li className="art-item">
            	<h3 className="art-item-title">
                    <Link to={`/article/${_id}`} >{ title }</Link>
                </h3>
            	<span className="art-item-label">{ label }</span>
            	<p className="art-item-content" dangerouslySetInnerHTML = { createMarkup() }></p>
                <span className="art-item-more">
                    <Link to={`/article/${_id}`}>read more</Link>
                </span>
            </li>
                        );
    }
}


export default ArtItem;