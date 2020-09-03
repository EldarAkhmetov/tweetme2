import React, {useEffect, useState} from 'react';
import {loadTweets} from '../lookup';

export const TweetsComponent = (props) => {
  const textAreaRef = React.createRef();
  const [newTweets, setNewTweets] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newVal = textAreaRef.current.value;
    let tempNewTweets = [...newTweets];
    tempNewTweets.unshift({
      content: newVal,
      likes: 0,
      id: 34254325324,
    });
    setNewTweets(tempNewTweets);
    textAreaRef.current.value = '';
  }
  
  return <div className={props.className}>
    <div className='col-12 mb-3'>
      <form onSubmit={handleSubmit}>
        <textarea ref={textAreaRef} required className='form-control w-25 mx-auto' name='tweet'>

        </textarea>
        <button type='submit' className='btn btn-primary my-3'>Tweet</button>
      </form>
    </div>
    <TweetsList newTweets={newTweets} />
  </div>
}

export const TweetsList = (props) => {
  const [tweetsInit, setTweetsInit] = useState([]);
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const final = [...props.newTweets].concat(tweetsInit);
    if (final.length !== tweets.length) {
      setTweets(final);
    }
  }, [props.newTweets, tweets, tweetsInit]);    
  useEffect(() => {
    //do my lookup
    const myCallback = (response, status) => {
      if (status === 200) {
        setTweetsInit(response);
      } else {
        alert("There was an error")
      }
        
    };
    loadTweets(myCallback);
      
  }, [])
  
  return tweets.map((item, index) => {
    return <Tweet tweet={item} key={`${index}-${item.id}`} className="my-5 py-5 border border-danger bg-white text-dark w-50 mx-auto" />
  });
};

export const ActionBtn = (props) => {
    const {tweet, action} = props;
    const [likes, setLikes] = useState(tweet.likes ? tweet.likes : 0);
    const [userLike, setUserLike] = useState(tweet.userLike === true);
    const actionDisplay = action.display ? action.display : "Action";
    const display = action.type === 'like' ? `${likes} ${actionDisplay}` : actionDisplay; 
    const className = props.className ? props.className : 'btn btn-primary btn-sm';

    const handleClick = (event) => {
      event.preventDefault();
      if (action.type === 'like') {
        if (userLike === true) {
          // perhaps i unlike it
          setLikes(likes - 1);
          setUserLike(false);
        } else {
          setLikes(likes + 1);
          setUserLike(true);
        }
        
      }

    };

return <button className={className} onClick={handleClick}>{display}</button>;
  };
  
export const Tweet = (props) => {
  const {tweet} = props;  
  const className = props.className ? props.className : 'col-10 mx-auto col-md-6';

  return <div className={className}>
      <p>{tweet.id}. {tweet.content}</p>
      <div className="btn btn-group">
        <ActionBtn tweet={tweet} action={{type: "like", display: "Likes"}}/>
        <ActionBtn tweet={tweet} action={{type: "unlike", display: "Unlike"}}/>
        <ActionBtn tweet={tweet} action={{type: "Retweet", display: "Retweet"}}/>
      </div>
  </div>
}