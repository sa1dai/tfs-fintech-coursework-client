import React, {Component} from 'react';
import './column-item.css';
import {bindActionCreators} from "redux";
import {deleteColumnItem} from "src/actions";
import compose from "src/utils/compose";
import {connect} from "react-redux";

class ColumnItem  extends Component {
  onItemDelete = () => {
    const { columnIndex, columnItemIndex } = this.props;
    const result = window.prompt("The item will be deleted. Type 1 to delete it.");

    if (result === '1') {
      this.props.deleteColumnItem(columnIndex, columnItemIndex);
    }
  };

  render() {
    const { columnItem: { title } } = this.props;
    return (
      <React.Fragment>
        {title}
        <button
          className="btn btn-secondary btn-sm column-item-button"
          onClick={this.onItemDelete}
        >
          <i className="fas fa-trash-alt"/>
        </button>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteColumnItem: deleteColumnItem
  }, dispatch);
};

export default compose(
  connect(null, mapDispatchToProps),
)(ColumnItem);
