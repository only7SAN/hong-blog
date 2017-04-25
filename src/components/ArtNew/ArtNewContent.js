import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';

//markdown编辑器
class ArtNewContent extends Component {

	componentDidMount() {
		console.log(findDOMNode(this.simplemde))
		var simplemde = new SimpleMDE({
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
        return (
            <div className="art-new-content">
             	<div className="art-new-tip art-new-inner">内容</div>
             	<div className="art-new-simplemde">
					<textarea ref={(simplemde) => {
	             		this.simplemde = simplemde;
	             	}} className="art-new-textarea"></textarea>
             	</div>
             	<button className="art-new-btn">发表</button>
            </div>
                        );
    }
}


export default ArtNewContent;