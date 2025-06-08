import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar'; // Sidebar 컴포넌트 임포트
import Footer from './Footer'; // Footer 컴포넌트 임포트
import Tweets from './Pages/Tweets'; // Tweets 페이지 컴포넌트 임포트
import MyPage from './Pages/MyPage'; // MyPage 페이지 컴포넌트 임포트
import About from './Pages/About'; // About 페이지 컴포넌트 임포트
import Settings from './Pages/Settings'; // 새로 만든 Settings 페이지 컴포넌트 임포트
import './App.css'; // App.css 임포트

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Sidebar />
          <div className="features">
            <Routes>
              <Route path="/" element={<Tweets />} />
              <Route path="/about" element={<About />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/settings" element={<Settings />} /> {/* Settings 컴포넌트가 올바르게 렌더링되는지 확인 */}
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;