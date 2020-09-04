import {backendLookup} from '../lookup';

export const apiTweetCreate = (newTweet, callback) => {
    backendLookup("POST", "/tweets/create/", callback, {content: newTweet});
}

export const apiTweetAction = (tweetId, action, callback) => {
  const data = {id: tweetId, action: action};
  backendLookup("POST", "/tweets/action/", callback, data);
}
  
export const apiTweetList = (callback) => {
  backendLookup("GET", "/tweets/", callback);
};