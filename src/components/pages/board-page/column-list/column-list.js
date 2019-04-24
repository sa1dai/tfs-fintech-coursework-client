import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './column-list.css';
import Column from "src/components/pages/board-page/column";
import ColumnListAddForm from "src/components/pages/board-page/column-list-add-form";
import compose from "src/utils/compose";
import {Draggable, Droppable} from "react-beautiful-dnd";

const ColumnList = ({ columns }) => {
  return (
    <Droppable
      droppableId="all-columns"
      direction="horizontal"
      type="column"
    >
      {provided => (
        <div
          className="column-list"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {columns.map((column, index) => (
            <Draggable
              key={column.id}
              draggableId={column.id}
              index={index}
            >
              {(provided) => (
                <div
                  className="column-list-item jumbotron text-center"
                  key={index}
                  style={{...provided.draggableProps.style }}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                >
                  <Column column={column} columnIndex={index} provided={provided}/>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
          <ColumnListAddForm />
        </div>
      )}
    </Droppable>
  );
};

const ColumnListContainer = ({ columns } ) => {
  return (
    <React.Fragment>
      <ColumnList columns={columns} />

    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default compose(
  connect(mapDispatchToProps)
)(ColumnListContainer);
