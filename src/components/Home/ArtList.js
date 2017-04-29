import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Tool } from '../../tool';

import ArtItem from './ArtItem';
import ArtNewIcon from './ArtNewIcon';
import ArtNull from './ArtNull';

class ArtList extends Component {
    componentDidMount() {
        let { User,actions }=this.props;


    }

    render(){
        let articles = this.props.articles;
        console.log(articles)
        return (
            <div className="art-list">
            	<ArtNewIcon />
	            <ul className="art-items">
	            	{
                        (articles&&articles.length !== 0) ? articles.map((item,index) => {
                            return <ArtItem key={index} {...item} /> 
                        }) : <ArtNull />
                    }
            	</ul>
            </div>
                        );
    }
}


export default ArtList;