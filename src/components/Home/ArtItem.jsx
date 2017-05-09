import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import marked from 'marked';

class ArtItem extends Component {

    render(){
        let { title, label, content ,_id} = this.props;
        if(content.length >= 150 ){
            content = content.substring(0,150) + "...";
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

ArtItem.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
}


export default ArtItem;