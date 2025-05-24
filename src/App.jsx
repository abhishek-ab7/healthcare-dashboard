import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './components/styles/App.css'; // Ensure you have this CSS file for global styles

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-layout">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;