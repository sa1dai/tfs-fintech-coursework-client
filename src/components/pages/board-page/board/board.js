import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from "src/components/spinner";
import ErrorIndicator from "src/components/error-indicator";
import {deleteBoard, dropColumn, dropColumnItem, fetchBoard, saveBoard} from "src/actions";
import compose from "src/utils/compose";
import withService from "src/hoc/with-service";
import ColumnList from "src/components/pages/board-page/column-list";
import {DragDropContext} from "react-beautiful-dnd";

import './board.css';
import {withRouter} from "react-router-dom";

class Board extends Component {
  componentDidUpdate() {
    const { saveBoard, boardId, board } = this.props;

    saveBoard(boardId, board);
  }

  onDragEnd = result => {
    if (result.type === "column") {
      this.props.dropColumn(result);
    } else {
      this.props.dropColumnItem(result);
    }
  };

  onBoardDelete = () => {
    const { boardId, deleteBoard, history } = this.props;
    //const result = window.prompt("The board will be deleted. Type 111 to delete it.");

    //if (result === '111') {
      deleteBoard(boardId, history);
    //}
  };

  render() {
    const { board: { title, columns } } = this.props;

    return (
      <React.Fragment>
        <div className="d-flex board-title-wrapper">
          <h1 className="board-title">
            {title}
          </h1>
          <button
            className="btn btn-secondary btn-sm board-button"
            onClick={this.onBoardDelete}
          >
            <i className="fas fa-trash-alt"/>
          </button>
          <span className="tip"><span className="text-success">Tip:</span> you can drag and drop columns and items</span>
        </div>

        <DragDropContext onDragEnd={this.onDragEnd}>
          <ColumnList columns={columns}/>
        </DragDropContext>
      </React.Fragment>
    );
  }
}

class BoardContainer extends Component {

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId);
  }

  render() {
    const { board, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <Board
              board={board}
              saveBoard={this.props.saveBoard}
              dropColumnItem={this.props.dropColumnItem}
              dropColumn={this.props.dropColumn}
              deleteBoard={this.props.deleteBoard}
              history={this.props.history}
              boardId={this.props.boardId}
           />;
  }
}

const mapStateToProps = ({ boardAsync: { board, loading, error }}) => {
  return { board, loading, error };
};

const mapDispatchToProps = (dispatch, { service }) => {

  return bindActionCreators({
    fetchBoard: fetchBoard(service),
    saveBoard: saveBoard(service),
    dropColumnItem: dropColumnItem,
    dropColumn: dropColumn,
    deleteBoard: deleteBoard(service),
  }, dispatch);
};

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(withRouter(BoardContainer));
