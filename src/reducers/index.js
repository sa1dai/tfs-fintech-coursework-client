import boardListReducerAsync from './board-list-reducer-async';
import boardListAddFormReducer from './board-list-add-form-reducer';
import boardReducerAsync from './board-reducer-async';
import columnAddFormReducer from "./column-add-form-reducer";
import columnListAddFormReducer from "./column-list-add-form-reducer";

const reducer = (state, action) => {
  return {
    boardListAsync: boardListReducerAsync(state, action),
    boardListAddForm: boardListAddFormReducer(state, action),
    boardAsync: boardReducerAsync(state, action),
    columnAddForm: columnAddFormReducer(state, action),
    columnListAddForm: columnListAddFormReducer(state, action),
  };
};

export default reducer;
