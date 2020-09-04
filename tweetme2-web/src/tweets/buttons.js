import React from 'react';
import {apiTweetAction} from './lookup';

export const ActionBtn = (props) => {
    const {tweet, action, didPerformAction} = props;
    const likes = tweet.likes ? tweet.likes : 0;
    const actionDisplay = action.display ? action.display : "Action";
    const display = action.type === 'like' ? `${likes} ${actionDisplay}` : actionDisplay; 
    const className = props.className ? props.className : 'btn btn-primary btn-sm';

    const handleClick = (event) => {
      event.preventDefault();
      const handleActionBackendEvent = (response, status) => {
        console.log(response, status);
        if ((status === 200 || status === 201) && didPerformAction) {
          didPerformAction(response, status);
        }

      };
      apiTweetAction(tweet.id, action.type, handleActionBackendEvent)
      
    };

    return <button className={className} onClick={handleClick}>{display}</button>;
};