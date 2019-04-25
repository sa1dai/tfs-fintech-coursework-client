import { ActionTypes } from '../actions';

const columnListAddFormReducer = (state, action) => {

  if (state === undefined) {
    return {
      columnTitle: "",
    };
  }

  switch (action.type) {
    case ActionTypes.columnAddTitleChanged:
      return {
        columnTitle: action.payload,
      };

    case ActionTypes.addColumn:
      return {
        columnTitle: ""
      };

    default:
      return state.columnListAddForm;
  }
};

export default columnListAddFormReducer;
