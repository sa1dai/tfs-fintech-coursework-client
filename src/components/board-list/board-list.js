import React, { Component } from 'react';
import BoardListItem from '../board-list-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withService } from '../hoc';
import { fetchBoards } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './board-list.css';

const BoardList = ({ boards }) => {
  return (
    <React.Fragment>
      <h2 className="board-list-header">Your boards</h2>
      <ul className="board-list">
        {
          boards.map((board) => {
            return (
              <li key={board.id}>
                <BoardListItem
                  board={board}/>
              </li>
            );
          })
        }
      </ul>
    </React.Fragment>
  );
};

class BoardListContainer extends Component {

  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    const { boards, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BoardList boards={boards}/>;
  }
}

const mapStateToProps = ({ boardList: { boards, loading, error }}) => {
  return { boards: boards, loading, error };
};

const mapDispatchToProps = (dispatch, { boardStoreService }) => {

  return bindActionCreators({
    fetchBoards: fetchBoards(boardStoreService)
  }, dispatch);
};

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BoardListContainer);
