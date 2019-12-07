import React from 'react';
import { data, view } from '../model';

class User extends React.Component {

    render() {
        return (
            <div>
                <h1>User List</h1>
                <ul>
                    {
                        data.list.map(user => {
                            return (
                                <li key={user.id}><a href={`/user/${user.id}`}>{user.nickname}</a></li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default view(User);
