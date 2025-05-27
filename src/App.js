import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import MyPage from './Pages/MyPage';
import About from './Pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Routes>
              <Route path='/' element={<Tweets />} />
              <Route path='/mypage' element={<MyPage />} />
              <Route path='/about' element={<About />} />
            </Routes>  
          </section>
        </main>
    </div>
  </BrowserRouter>
  );
};


export default App;
