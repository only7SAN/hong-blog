import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArtNewIcon extends Component {

    render(){
        return (
			<div className="art-new-icon">
				<Link className="art-new-icon-text" to="/art/new">+</Link>
			</div>
                        );
    }
}


export default ArtNewIcon;