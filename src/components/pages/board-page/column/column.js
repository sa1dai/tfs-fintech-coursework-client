import React from 'react';
import ColumnItem from '../column-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './column.css';
import compose from "src/utils/compose";
import ColumnAddForm from "src/components/pages/board-page/column-add-form"
import {Draggable, Droppable} from "react-beautiful-dnd";

const Column = ({ column, columnIndex, provided }) => {
  return (
    <React.Fragment>
      <h2
        className="column-title"
        {...provided.dragHandleProps}
      >
        {column.title}
      </h2>
      <Droppable droppableId={column.id} type="item">
        {provided => (
          <div
            className="column list-group"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {column.items.map((columnItem, index) => (
              <Draggable
                key={columnItem.id}
                draggableId={columnItem.id}
                index={index}
              >
                {(provided) => (
                  <div className="column-item text-center list-group-item"
                      key={`${columnIndex}${index}`}
                      style={{...provided.draggableProps.style }}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                  >
                    <ColumnItem columnItem={columnItem} index={index}/>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </React.Fragment>
  );
};

const ColumnContainer = ({ column, columnIndex, provided }) => {
  return (
    <React.Fragment>
      <Column column={column} columnIndex={columnIndex} provided={provided}/>
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
