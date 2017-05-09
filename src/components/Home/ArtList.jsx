import React, { Component } from 'react';
import PropTypes from "prop-types";

import ArtItem from './ArtItem';
import ArtNewIcon from './ArtNewIcon';
import ArtNull from './ArtNull';
import ArtLoad from './ArtLoad';

class ArtList extends Component {

    render(){
        let { isFetching, articles } = this.props.state;
        let newIcon = this.props.User ? <ArtNewIcon /> : null;
        let main;
        if(isFetching == true){
            main = <ArtLoad />;
        }else{
            if(articles&&articles.length !== 0){
                main =  articles.map((item,index) => {
                            return <ArtItem key={index} {...item} />
                        })
            }else if(articles&&articles.length === 0){
                main = <ArtNull />
            }else{
                main = <ArtNull />
            }
        }
        return (
            <div className="art-list">
                <ul className="art-items">
                    { newIcon }
                    { main }
                </ul>
            </div>
                        );
    }
}

ArtList.propTypes = {
  state: PropTypes.object.isRequired,
  User: PropTypes.object.isRequired
}


export default ArtList;