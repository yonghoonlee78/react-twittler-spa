// src/Pages/Settings.js (정확히 이렇게 되어 있어야 합니다)
import React from 'react';
import Footer from '../Footer'; // 푸터가 필요하다면 임포트

const Settings = () => {
  return (
    <div className="settings-page" style={{ padding: '20px', backgroundColor: 'white', flex: 1 }}>
      <h2 className="section-title">설정</h2>
      <p>여기에 설정 관련 내용을 추가할 수 있습니다.</p>
      {/* <Footer /> // 푸터가 필요하다면 추가 */}
    </div>
  );
};

export default Settings; // 이 부분이 중요합니다!