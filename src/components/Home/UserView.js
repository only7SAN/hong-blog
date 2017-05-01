import React, { Component, PropTypes } from 'react';
import UserSettings from './UserSettings';

//页面首页主题展示
class UserView extends Component {

    render(){
    	let { username ,avatar_url } = this.props.User;

        return (
            <div className="user-view">
                <UserSettings signOut={this.props.signOut} />
            	<div className="user-view-head">
            		<img className="user-view-image" src={avatar_url} />
            	</div>
            	<div className="user-view-username">{username}</div>
            </div>
                        );
    }
}


export default UserView;