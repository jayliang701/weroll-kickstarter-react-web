import React from 'react';
import { data, view } from '../model';

class UserProfile extends React.Component {

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <h4>id: {data.user.id}</h4>
                <h4>nickname: {data.user.nickname}</h4>
            </div>
        );
    }
}

export default view(UserProfile);
