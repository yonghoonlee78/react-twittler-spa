import { dummyTweets } from '../static/dummyData';
import './Tweets.css'; 
import Footer from '../Footer';
import React, { useState } from 'react'; 

const Tweets = () => {
  const [tweetText, setTweetText] = useState('');
  const maxLength = 280; 

  const handleTextChange = (e) => {
    setTweetText(e.target.value);
  };

  const handleSubmitTweet = () => {
    if (tweetText.trim().length > 0) {
      console.log('새로운 트윗:', tweetText);
      
      setTweetText(''); 
    }
  };

  return (
    <div className="tweets-page-container"> 
      {/* 이 부분이 "메시지 입력란"으로 바뀝니다. */}
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          {/* <div className="tweetForm__profile"> */}
          
          <div className="tweetForm__input">
            <div className="tweetForm__inputWrapper">
              <textarea
                className="tweetForm__textarea"
                placeholder="무슨 일이 일어나고 있나요?"
                maxLength={maxLength}
                value={tweetText} 
                onChange={handleTextChange} 
              ></textarea>
            </div>
            <div className="tweetForm__submit">
             
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {tweetText.length + ' / ' + maxLength}
                </span>
              </div>
            
              <button
                className="tweetForm__submitButton"
                onClick={handleSubmitTweet}
                disabled={tweetText.trim().length === 0} 
              >
                트윗
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <h2 className="section-title">최신 트윗</h2>

      <ul className="tweets-list"> 
        {dummyTweets.map((tweet) => {
          return (
            <li className="tweet" id={tweet.id} key={tweet.id}> 
              <div className="tweet__profile-image"> 
                <img src={tweet.picture} alt={`${tweet.username}'s profile`} />
              </div>
              <div className="tweet__content">
                <div className="tweet__header"> 
                  <span className="tweet__username">{tweet.username}</span>
                  
                  <span className="tweet__handle">@{tweet.userid || 'unknown'}</span>
                  
                  <span className="tweet__timestamp">{tweet.createdAt}</span>
                </div>
                <p className="tweet__text">{tweet.content}</p> 
                
              </div>
            </li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
};

export default Tweets;