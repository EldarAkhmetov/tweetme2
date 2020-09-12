import {backendLookup} from '../lookup';

export const apiProfileDetail = (username, callback) => {
    backendLookup("GET", `/profiles/${username}/`, callback);
};

export const apiProfileFollowToggle = (username, action, callback) => {
    const data = {action: `${action && action}`.toLowerCase()}
    backendLookup("POST", `/profiles/${username}/follow`, callback, data);
};