import React from 'react';
import './board-list-item.css';
import { Link } from 'react-router-dom';

const BoardListItem = ({ board }) => {
  const { title, url } = board;
  return (
    <Link to={decodeURI(url)} className="board-list-item">{title}</Link>
  );
};

export default BoardListItem;
