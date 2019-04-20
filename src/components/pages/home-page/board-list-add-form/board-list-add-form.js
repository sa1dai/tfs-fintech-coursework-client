import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './board-list-add-form.css';
import {withRouter} from "react-router-dom";
import Spinner from "src/components/spinner";
import ErrorIndicator from "src/components/error-indicator";
import compose from "src/utils/compose";
import withService from "src/components/hoc/with-service";
import {addBoard, boardAddTitleChanged} from "src/actions";

const BoardListAddForm = ({ boardTitle, onSubmit, onTitleChanged, formIsValid }) => {
  const buttonClassName = formIsValid ? "btn-success" : "btn-warning cursor-not-allowed";

  return (
    <form className="create-form d-flex board-list-add-form"
          onSubmit={onSubmit}>

      <input type="text"
             className="form-control "
             value={boardTitle}
             onChange={onTitleChanged}
             placeholder="Board title" />

      <button type="submit"
              className={`btn ${buttonClassName}`}
              disabled={!formIsValid}>Add</button>
    </form>
  );
};

class BoardListAddFormContainer extends Component {

  formIsValid = () => {
    return this.props.boardTitle.trim().length > 0;
  };

  onTitleChanged = (e) => {
    this.props.boardAddTitleChanged(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.formIsValid()) {
      this.props.addBoard(this.props.boardTitle, this.props.history);
    }
  };

  render() {
    const { boardTitle, serverIsProcessingRequest, error } = this.props;

    let boardCreateForm = serverIsProcessingRequest
      ? <Spinner />
      : <BoardListAddForm
          boardTitle={boardTitle}
          onSubmit={this.onSubmit}
          onTitleChanged={this.onTitleChanged}
          formIsValid={this.formIsValid()} />;

    return (
      <React.Fragment>
        <h2 className='text-center'>Create new board</h2>
        {boardCreateForm}
        {error && <ErrorIndicator />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (
  {
    boardListAddForm:
    {
      boardTitle,
      serverIsProcessingRequest,
      error
    }
  }) => {
  return { boardTitle, serverIsProcessingRequest, error };
};

const mapDispatchToProps = (dispatch, { service }) => {

  return bindActionCreators({
    addBoard: addBoard(service),
    boardAddTitleChanged: boardAddTitleChanged
  }, dispatch);
};

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps),
)(withRouter(BoardListAddFormContainer));

//export default BoardListAddFormContainer;
