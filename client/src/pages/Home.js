import React from "react";
// import { sleep } from "../utils";
import { data, callAPI } from "../model";

export const preload = async (/*data, user, setting, query*/) => {
    // await sleep(2000);

    let res = await callAPI("system.now", { format: 1 });
    return {
        text: "Welcome! Time: " + new Date(res.time).toLocaleString()
    };
};

class Home extends React.Component {
    render() {
        return (
            <div>
                <div>Home Page</div>
                <h2>{data.text}</h2>
                <div>
                    <p>
                        <a href="/user">User</a>
                    </p>
                    <p>
                        <a href="/about">About Us</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
