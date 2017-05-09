import React, { Component} from 'react';
import PropTypes from 'prop-types';
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

UserView.propTypes = {
  User: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired
}


export default UserView;