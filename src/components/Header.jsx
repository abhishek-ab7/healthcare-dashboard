import React from 'react';
import { Search, Bell, Plus, User } from 'lucide-react';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="logo">Healthcare.</h1>
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
        </div>
        <div className="header-right">
          <button className="icon-button">
            <Bell className="icon" />
          </button>
          <button className="add-button">
            <Plus className="icon-small" />
          </button>
          <div className="user-profile">
            <div className="avatar">
              <User className="avatar-icon" />
            </div>
            <span className="user-name">Dr. Smith</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;