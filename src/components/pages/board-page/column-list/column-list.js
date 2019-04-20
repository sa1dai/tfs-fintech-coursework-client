import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './column-list.css';
import Column from "src/components/pages/board-page/column";
import ColumnListAddForm from "src/components/pages/board-page/column-list-add-form";
import compose from "src/utils/compose";

const ColumnList = ({ columns }) => {
  return (
    <ul className="column-list list-group">
      {
        columns.map((column, index) => {
          return (
            <li className="column-list-item text-center list-group-item"
                key={index}>
              <Column column={column} columnIndex={index}/>
            </li>
          );
        })
      }
    </ul>
  );
};

const ColumnListContainer = ({ columns } ) => {
  return (
    <React.Fragment>
      <ColumnList columns={columns}/>
      <ColumnListAddForm />
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default compose(
  connect(mapDispatchToProps)
)(ColumnListContainer);
