import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withService } from '../hoc';
import { fetchBoard } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const Board = ({ board: { title } }) => {
  return (
    <h1>{title}</h1>
  );
};

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

    return <Board board={board} />;
  }
}

const mapStateToProps = ({ boardPage: { board, loading, error }}) => {
  return { board, loading, error };
};

const mapDispatchToProps = (dispatch, { service }) => {

  return bindActionCreators({
    fetchBoard: fetchBoard(service)
  }, dispatch);
};

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BoardContainer);
