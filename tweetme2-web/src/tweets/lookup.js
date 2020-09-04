import {backendLookup} from '../lookup';

export const apiTweetCreate = (newTweet, callback) => {
    backendLookup("POST", "/tweets/create/", callback, {content: newTweet});
  }
  
  export const apiTweetList = (callback) => {
    backendLookup("GET", "/tweets/", callback);
  };