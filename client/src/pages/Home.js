import React from 'react';
import { sleep } from '../utils';
import { data } from '../model';

export const preload = async (/*data, user, setting, query*/) => {
    await sleep(2000);
    return {
        text: 'Welcome!'
    };
}

class Home extends React.Component {

    render() {
        return (
            <div>
                <div>Home X</div>
                <h2>{data.text}</h2>
                <div>
                    <p><a href="/user">User</a></p>
                    <p><a href="/about">About Us</a></p>
                </div>
            </div>
        );
    }
}

export default Home;
