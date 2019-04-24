import React from 'react';
import './column-item.css';
import { Link } from 'react-router-dom';
import {Draggable} from "react-beautiful-dnd";

const ColumnItem = ({ columnItem, index }) => {
  const { id, title, url } = columnItem;
  return (
    <Link
      to={decodeURI(url)}
      className="card-column-item"

    >
      {title}
    </Link>
  );
};

export default ColumnItem;
