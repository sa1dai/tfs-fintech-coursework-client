import { ActionTypes } from '../actions';

const columnAddFormReducer = (state, action) => {

  if (state === undefined) {
    return {
      columnItemTitle: "",
    };
  }

  switch (action.type) {
    case ActionTypes.columnItemAddTitleChanged:
      return {
        columnItemTitle: action.payload,
      };

    case ActionTypes.addColumnItem:
      return {
        columnItemTitle: ""
      };

    default:
      return state.columnAddForm;
  }
};

export default columnAddFormReducer;
