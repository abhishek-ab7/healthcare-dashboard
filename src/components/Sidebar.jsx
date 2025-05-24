import React from 'react';
import { navigationData } from '../data/navigationData';
import './styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <h3 className="sidebar-title">General</h3>
        <nav className="navigation">
          {navigationData.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`nav-item ${item.active ? 'nav-item-active' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;