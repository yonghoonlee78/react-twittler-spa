import { dummyTweets } from '../static/dummyData';
import './MyPage.css';
import Footer from '../Footer';


const MyPage = () => {
  const aliceTweets = dummyTweets.filter(tweet => tweet.username === 'Alice');

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={aliceTweets[0].picture} alt="profile" />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {aliceTweets[0]?.username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        {aliceTweets.map((tweet) => (
        <li className="tweet" id={'tweet.id'} key={tweet.id} >
          <div className="tweet__profile">
            <img src={tweet.picture} alt="profile" />
          </div>
          <div className="tweet__content">
            <div className="tweet__userInfo">
              <span className="tweet__username">{tweet.username}</span>
              <span className="tweet__createdAt">{tweet.createdAt}</span>
            </div>
            <div className="tweet__message">{tweet.content}</div>
          </div>
        </li>
        ))}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
