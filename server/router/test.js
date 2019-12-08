/**
 * Created by Jay on 2016/5/20.
 */

var PATH = require("path");
var FS = require("fs");

const renderHomePage = async (req, res, output, user) => {
    return { };
}

const renderAboutPage = async (req, res, output, user) => {
    return { };
}

const users = [
    { id:"123", nickname:"Jackson" },
    { id:"456", nickname:"Mike" },
    { id:"789", nickname:"Leon" }
];

const renderUser = async (req, res, output, user) => {
    return {
        list: users
    };
}

const renderUserProfile = async (req, res, output, user) => {
    const id = req.param("id");
    let match = _.find(users, item => {
        return item.id === id;
    });
    return {
        user: match,
    };
}

exports.getRouterMap = function() {
    return [
        { url: "/", view: "Home", handle: renderHomePage, needLogin:false },
        { url: "/about", view: "AboutUs", handle: renderAboutPage, needLogin:false },
        { url: "/user", view: "User", handle: renderUser, needLogin:false },
        { url: "/user/:id", view: "UserProfile", handle: renderUserProfile, needLogin:false }
    ];
}


