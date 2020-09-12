import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProfileBadgeComponent} from './profiles';
import * as serviceWorker from './serviceWorker';
import {FeedComponent, TweetsComponent, TweetDetailComponent} from './tweets';

const appEl = document.getElementById('root');
if (appEl) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    appEl
  );
}

const e = React.createElement;

const tweetsEl = document.getElementById('tweetme-2');
if (tweetsEl) {
  ReactDOM.render(
    <React.StrictMode>
      {e(TweetsComponent, tweetsEl.dataset)}
    </React.StrictMode>,
    tweetsEl
  );
};

const tweetFeedEl = document.getElementById('tweetme-2-feed');
if (tweetFeedEl) {
  ReactDOM.render(
    <React.StrictMode>
      {e(FeedComponent, tweetFeedEl.dataset)}
    </React.StrictMode>,
    tweetFeedEl
  );
};

const tweetDetailElements = document.querySelectorAll('.tweetme-2-detail');
tweetDetailElements.forEach(container => {
  ReactDOM.render(
    <React.StrictMode>
      {e(TweetDetailComponent, container.dataset)}
    </React.StrictMode>,
    container
  );
});

const userProfileBadgeElements = document.querySelectorAll('.tweetme-2-profile-badge');
userProfileBadgeElements.forEach(container => {
  ReactDOM.render(
    <React.StrictMode>
      {e(ProfileBadgeComponent, container.dataset)}
    </React.StrictMode>,
    container
  );
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
