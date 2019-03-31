import React from 'react';
import './board-list-item.css';

const BoardListItem = ({ board }) => {
  const { title } = board;
  return (
    <span className="board-list-item">{title}</span>
  );
};

export default BoardListItem;
