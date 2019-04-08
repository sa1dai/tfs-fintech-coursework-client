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
import BoardCreateForm from '../board-create-form';

const BoardList = ({ boards }) => {
  return (
    <React.Fragment>
      <h1 className="text-center">Your boards</h1>

      { boards.length === 0 && <p className="empty-board-list-text text-center">You dont have any boards</p> }

      <ul className="board-list list-group">
        {
          boards.map((board) => {
            return (
              <li className="board-list-item text-center list-group-item"
                  key={board.id}>
                <BoardListItem board={board}/>
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

    return (
      <React.Fragment>
        <BoardList boards={boards}/>
        <BoardCreateForm />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ boardList: { boards, loading, error }}) => {
  return { boards, loading, error };
};

const mapDispatchToProps = (dispatch, { service }) => {

  return bindActionCreators({
    fetchBoards: fetchBoards(service)
  }, dispatch);
};

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BoardListContainer);
