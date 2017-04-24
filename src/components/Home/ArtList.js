import React, { Component, PropTypes } from 'react';

import ArtItem from './ArtItem'

class ArtList extends Component {

    render(){
        return (
            <div className="art-list">
	            <ul className="art-items">
	            	<ArtItem />
	            	<ArtItem />
	            	<ArtItem />
	            	<ArtItem />
	            	<ArtItem />
	            	<ArtItem />
	            	<ArtItem />
	            	<ArtItem />
            	</ul>
            </div>
                        );
    }
}


export default ArtList;