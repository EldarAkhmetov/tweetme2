import {backendLookup} from '../lookup';

export const apiProfileDetail = (username, callback) => {
    backendLookup("GET", `/profiles/${username}/`, callback);
  };