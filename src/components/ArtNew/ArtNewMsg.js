import React, { Component, PropTypes } from 'react';

//页面首页主题展示
class ArtNewMsg extends Component {

    render(){
        return (
            <div className="art-new-msg">
            	<label className="art-new-title art-new-tip" htmlFor="art-new-title">标题</label>
            	<input className="art-new-input" name="art-new-title" type="text" placeholder="这里是标题" />
            	<label className="art-new-label art-new-tip" htmlFor="art-new-label">标签</label>
            	<input className="art-new-input" name="art-new-label" type="text" placeholder="这里是标签" />
            </div>
                        );
    }
}


export default ArtNewMsg;