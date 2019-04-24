import React, {Component} from 'react';
import './column-item.css';
import { Link } from 'react-router-dom';
import {Draggable} from "react-beautiful-dnd";

class ColumnItem  extends Component {
  render() {
    const { columnItem, index } = this.props;
    const { id, title } = columnItem;
    return (
      <React.Fragment>
        {title}
      </React.Fragment>
    );
  }
}

export default ColumnItem;
