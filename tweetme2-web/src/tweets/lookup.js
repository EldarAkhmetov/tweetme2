import {backendLookup} from '../lookup';

export const apiTweetCreate = (newTweet, callback) => {
    backendLookup("POST", "/tweets/create/", callback, {content: newTweet});
}

export const apiTweetAction = (tweetId, action, callback) => {
  const data = {id: tweetId, action: action};
  backendLookup("POST", "/tweets/action/", callback, data);
}

export const apiTweetDetail = (tweetId, callback) => {
  backendLookup("GET", `/tweets/${tweetId}/`, callback);
};

export const apiTweetFeed = (callback, nextUrl) => {
  let endpoint = "/tweets/feed/";
  
  if (nextUrl !== null && nextUrl !== undefined) {
    endpoint = nextUrl.replace("http://localhost:8000/api", "");
  }
  backendLookup("GET", endpoint, callback);
};
  
export const apiTweetList = (username, callback, nextUrl) => {
  let endpoint = "/tweets/";
  if (username) {
    endpoint = `/tweets/?username=${username}`
  }
  if (nextUrl !== null && nextUrl !== undefined) {
    endpoint = nextUrl.replace("http://localhost:8000/api", "");
  }
  backendLookup("GET", endpoint, callback);
};