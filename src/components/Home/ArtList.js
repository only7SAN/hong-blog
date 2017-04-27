import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import ArtItem from './ArtItem';
import ArtNewIcon from './ArtNewIcon'

class ArtList extends Component {

    render(){

    	let User = this.props.User;
    	let  newIcon = User ? <ArtNewIcon /> : null;
        return (
            <div className="art-list">
            	<ArtNewIcon />
	            <ul className="art-items">
	            	<ArtItem />
            	</ul>
            </div>
                        );
    }
}


export default ArtList;