import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './column-list-add-form.css';
import {addColumn, columnAddTitleChanged} from "src/actions";
import compose from "src/utils/compose";

const ColumnListAddForm = ({ inputId, columnTitle, onSubmit, onTitleChanged }) => {
  return (
    <form className="create-form column-list-add-form"
          onSubmit={onSubmit}>

      <input id={inputId}
             type="text"
             className="form-control"
             value={columnTitle}
             onChange={onTitleChanged}
             placeholder="Enter list title..." />

      <button type="submit"
              className="btn btn-success">Add Column</button>
    </form>
  );
};

class ColumnListAddFormContainer extends Component {

  _inputId = "columnListAddFormInput";

  formIsValid = () => {
    return this.props.columnTitle.trim().length > 0;
  };

  onTitleChanged = (e) => {
    this.props.columnAddTitleChanged(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.formIsValid()) {
      this.props.addColumn(this.props.columnTitle);
      document.getElementById(this._inputId).focus();
    }
  };

  render() {
    const { columnTitle } = this.props;

    return (
      <ColumnListAddForm
        inputId={this._inputId}
        columnTitle={columnTitle}
        onSubmit={this.onSubmit}
        onTitleChanged={this.onTitleChanged} />
    );
  }
}

const mapStateToProps = ({ columnListAddForm: { columnTitle } }) => {
  return { columnTitle };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    columnAddTitleChanged: columnAddTitleChanged,
    addColumn: addColumn
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ColumnListAddFormContainer);
