import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from "src/components/spinner";
import ErrorIndicator from "src/components/error-indicator";
import {fetchBoard, saveBoard} from "src/actions";
import compose from "src/utils/compose";
import withService from "src/components/hoc/with-service";
import ColumnList from "src/components/pages/board-page/column-list";

class Board extends Component {
  componentDidUpdate() {
    const { saveBoard, boardId, board } = this.props;

    saveBoard(boardId, board);
  }

  render() {
    const { board: { title, columns } } = this.props;

    return (
      <React.Fragment>
        <h1>{title}</h1>
        <ColumnList columns={columns}/>
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

    return <Board board={board} saveBoard={this.props.saveBoard} boardId={this.props.boardId}/>;
  }
}

const mapStateToProps = ({ boardAsync: { board, loading, error }}) => {
  return { board, loading, error };
};

const mapDispatchToProps = (dispatch, { service }) => {

  return bindActionCreators({
    fetchBoard: fetchBoard(service),
    saveBoard: saveBoard(service)
  }, dispatch);
};

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BoardContainer);
