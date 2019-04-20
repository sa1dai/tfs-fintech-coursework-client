import React from 'react';
import './column-item.css';
import { Link } from 'react-router-dom';

const ColumnItem = ({ columnItem }) => {
  const { title, url } = columnItem;
  return (
    <Link to={decodeURI(url)} className="card-column-item">{title}</Link>
  );
};

export default ColumnItem;
