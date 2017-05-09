import React, { Component } from 'react';
import PropTypes from "prop-types";
import marked from 'marked';

class ArtDetailItem extends Component {

    render(){
        let { title, label, content } = this.props.data;
        marked.setOptions({
              renderer: new marked.Renderer(),
              gfm: true,
              tables: true,
              breaks: true,
              pedantic: false,
              sanitize: false,
              smartLists: true,
              smartypants: false
            });
        const createMarkup = () => {
                return {
                    __html:marked(content)
                }
            }
        return (
            <div className="art-detail">
                <div className="art-detail-top">
                    <h3 className="art-detail-title">{ title }</h3>
                    <span className="art-detail-label">{ label }</span>
                </div>
                <div className="art-detail-content" dangerouslySetInnerHTML={ createMarkup() }></div>
                <div className="art-detail-end">The End</div>
                <div className="art-detail-bg"></div>
            </div>
                        );
    }
}

ArtDetailItem.propTypes = {
  data: PropTypes.object.isRequired
}


export default ArtDetailItem;