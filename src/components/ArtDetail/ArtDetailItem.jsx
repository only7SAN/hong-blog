import React, { Component, PropTypes } from 'react';
import marked from 'marked';

class ArtDetailItem extends Component {

    render(){
        let { title, label, content } = this.props.data;
        const createMarkup = () => {
                return {
                    __html:marked(content)
                }
            }
        return (
            <div className="art-detail">
                <h3 className="art-detail-title">{ title }</h3>
                <span className="art-detail-label">{ label }</span>
                <div className="art-detail-markdown" dangerouslySetInnerHTML={ createMarkup() }></div>
            </div>
                        );
    }
}


export default ArtDetailItem;