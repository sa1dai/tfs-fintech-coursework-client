import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './column-add-form.css';
import {addColumnItem, columnItemAddTitleChanged} from "src/actions";
import compose from "src/utils/compose";

const ColumnAddForm = ({ inputId, columnItemTitle, onSubmit, onTitleChanged }) => {
  return (
    <form className="create-form column-add-form d-flex"
          onSubmit={onSubmit}>

      <input id={inputId}
             type="text"
             className="form-control"
             value={columnItemTitle}
             onChange={onTitleChanged}
             placeholder="Enter item title..." />

      <button type="submit"
              className="btn btn-success">Add</button>
    </form>
  );
};

class ColumnAddFormContainer extends Component {

  componentDidMount() {
    this._inputId = `columnAddFormInput${this.props.columnIndex}`;
  }

  formIsValid = () => {
    return this.props.columnItemTitle.trim().length > 0;
  };

  onTitleChanged = (e) => {
    this.props.columnItemAddTitleChanged(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.formIsValid()) {
      this.props.addColumnItem(this.props.columnIndex, this.props.columnItemTitle);
      document.getElementById(this._inputId).focus();
    }
  };

  render() {
    const { columnItemTitle } = this.props;

    return (
      <ColumnAddForm
        inputId={this._inputId}
        columnItemTitle={columnItemTitle}
        onSubmit={this.onSubmit}
        onTitleChanged={this.onTitleChanged} />
    );
  }
}

const mapStateToProps = ({ columnAddForm: { columnItemTitle }}) => {
  return { columnItemTitle };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    columnItemAddTitleChanged: columnItemAddTitleChanged,
    addColumnItem: addColumnItem
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ColumnAddFormContainer);
