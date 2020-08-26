import React, {useEffect, useState} from 'react';
import {loadTweets} from '../lookup';

export const TweetsList = (props) => {
  const [tweets, setTweets] = useState([]);
    
  useEffect(() => {
    //do my lookup
    const myCallback = (response, status) => {
      if (status === 200) {
        setTweets(response);
      } else {
        alert("There was an error")
      }
        
    };
    loadTweets(myCallback);
      
  }, [])
  
  return tweets.map((item, index) => {
    return <Tweet tweet={item} key={`${index}-${item.id}`} className="my-5 py-5 border border-danger bg-white text-dark" />
  });
};

export const ActionBtn = (props) => {
    const {tweet, action} = props;
    const className = props.className ? props.className : 'btn btn-primary btn-sm';
    return <button className={className}>{tweet.likes} Likes</button>;
  };
  
export const Tweet = (props) => {
  const {tweet} = props
  const className = props.className ? props.className : 'col-10 mx-auto col-md-6';
  return <div className={className}>
      <p>{tweet.id}. {tweet.content}</p>
      <div className="btn btn-group">
        <ActionBtn tweet={tweet} action={{type: "like"}}/>
      </div>
  </div>
}