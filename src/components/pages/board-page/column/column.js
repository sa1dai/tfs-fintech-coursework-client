import React, {Component} from 'react';
import ColumnItem from '../column-item';

import './column.css';
import ColumnAddForm from "src/components/pages/board-page/column-add-form"
import {Draggable, Droppable} from "react-beautiful-dnd";
import {bindActionCreators} from "redux";
import {deleteColumn} from "src/actions";
import compose from "src/utils/compose";
import {connect} from "react-redux";

class Column extends Component {
  onColumnDelete = () => {
    const { columnIndex, deleteColumn } = this.props;
    //const result = window.prompt("The column will be deleted. Type 11 to delete it.");

    //if (result === '11') {
      deleteColumn(columnIndex);
    //}
  };

  render() {
    const { column, columnIndex, provided } = this.props;

    return (
      <React.Fragment>
        <h2
          className="column-title"
          {...provided.dragHandleProps}
        >
          {column.title}
        </h2>

        <button
          className="btn btn-secondary btn-sm column-button"
          onClick={this.onColumnDelete}
        >
          <i className="fas fa-trash-alt"/>
        </button>

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
                      <ColumnItem
                        columnItem={columnItem}
                        columnIndex={columnIndex}
                        columnItemIndex={index}
                      />
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
  }
}

const ColumnContainer = ({ column, columnIndex, provided, deleteColumn }) => {
  return (
    <React.Fragment>
      <Column column={column} columnIndex={columnIndex} provided={provided} deleteColumn={deleteColumn}/>
      <ColumnAddForm columnIndex={columnIndex}/>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteColumn: deleteColumn
  }, dispatch);
};

export default compose(
  connect(null, mapDispatchToProps),
)(ColumnContainer);
