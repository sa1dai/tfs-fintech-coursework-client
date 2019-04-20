import React from 'react';
import ColumnItem from '../column-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './column.css';
import compose from "src/utils/compose";
import ColumnAddForm from "src/components/pages/board-page/column-add-form"

const Column = ({ column, columnIndex }) => {
  return (
    <React.Fragment>
      <h2 className="column-title">{column.title}</h2>
      <ul className="card-column list-group">
        {
          column.items.map((columnItem, index) => {
            return (
              <li className="column-item text-center list-group-item"
                  key={`${columnIndex}${index}`}>
                <ColumnItem columnItem={columnItem}/>
              </li>
            );
          })
        }
      </ul>
    </React.Fragment>
  );
};

const ColumnContainer = ({ column, columnIndex }) => {
  return (
    <React.Fragment>
      <Column column={column} columnIndex={columnIndex}/>
      <ColumnAddForm columnIndex={columnIndex}/>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default compose(
  connect(mapDispatchToProps)
)(ColumnContainer);
