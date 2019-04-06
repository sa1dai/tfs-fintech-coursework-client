import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withService } from '../hoc';
import { createBoard, createBoardTitleChanged } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './board-create-form.css';

const BoardCreateForm = ({ boardTitle, onSubmit, onTitleChanged, formIsValid }) => {
  const buttonClassName = formIsValid ? "btn-success" : "btn-warning cursor-not-allowed";

  return (
    <form className="create-form d-flex"
          onSubmit={onSubmit}>

      <input type="text"
             className="form-control create-board-title"
             value={boardTitle}
             onChange={onTitleChanged}
             placeholder="Board title" />

      <button type="submit"
              className={`btn ${buttonClassName}`}
              disabled={!formIsValid}>Add</button>
    </form>
  );
};

class BoardCreateFormContainer extends Component {

  formIsValid = () => {
    return this.props.boardTitle.trim().length > 0;
  };

  onTitleChanged = (e) => {
    this.props.createBoardTitleChanged(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.formIsValid) {
      this.props.createBoard(this.props.boardTitle);
    }
  };

  render() {
    const { boardTitle, serverIsProcessingRequest, error } = this.props;

    let boardCreateForm = serverIsProcessingRequest
      ? <Spinner />
      : <BoardCreateForm
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

const mapStateToProps = ({ boardCreateForm: { boardTitle, serverIsProcessingRequest, error }}) => {
  return { boardTitle, serverIsProcessingRequest, error };
};

const mapDispatchToProps = (dispatch, { service }) => {

  return bindActionCreators({
    createBoard: createBoard(service),
    createBoardTitleChanged: createBoardTitleChanged
  }, dispatch);
};

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BoardCreateFormContainer);
