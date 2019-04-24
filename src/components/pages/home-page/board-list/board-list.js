import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './board-list.css';
import Spinner from "src/components/spinner";
import withService from "src/hoc/with-service";
import BoardListItem from "src/components/pages/home-page/board-list-item";
import BoardListAddForm from "src/components/pages/home-page/board-list-add-form";
import compose from "src/utils/compose";
import {fetchBoards} from "../../../../actions";
import ErrorIndicator from "src/components/error-indicator";

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
        <BoardListAddForm />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ boardListAsync: { boards, loading, error }}) => {
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
