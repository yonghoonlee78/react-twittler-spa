import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar-header">
        Twittler
      </div>

      <NavLink
        to="/"
        className={({ isActive }) =>
          `sidebar-menu-item tweets-link ${isActive ? "active" : ""}` // 백틱(`)으로 감싸야 합니다.
        }
      >
        <i className="far fa-comment-dots icon"></i>
        <span>Tweets</span>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `sidebar-menu-item about-link ${isActive ? "active" : ""}` // 백틱(`)으로 감싸야 합니다.
        }
      >
        <i className="far fa-question-circle icon"></i>
        <span>About</span>
      </NavLink>

      <NavLink
        to="/mypage"
        className={({ isActive }) =>
          `sidebar-menu-item mypage-link ${isActive ? "active" : ""}` // 백틱(`)으로 감싸야 합니다.
        }
      >
        <i className="far fa-user icon"></i>
        <span>MyPage</span>
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `sidebar-menu-item settings-link ${isActive ? "active" : ""}` // 백틱(`)으로 감싸야 합니다.
        }
      >
        <i className="fas fa-cog icon"></i>
        <span>Settings</span>
      </NavLink>

    </section>
  );
};

export default Sidebar;