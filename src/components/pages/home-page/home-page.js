import React from 'react';

import './home-page.css';
import BoardList from './board-list';

const HomePage = () => {
  return (
    <div className="home-page-content">
      <BoardList />
    </div>
  );
};

export default HomePage;
