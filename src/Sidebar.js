import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section className= "sidebar">
      
     <Link to="/">
      <i className="far fa-comment-dots"></i> Tweets
     </Link>
     
     <Link to="/about">
     <i className="far fa-question-circle"></i> About
    </Link>

     <Link to="/mypage">
      <i className="far fa-user"></i> MyPage 
     </Link> 
    </section>
  );
};

export default Sidebar;
