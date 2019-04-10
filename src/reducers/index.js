import boardListReducer from './board-list-reducer';
import boardCreateFormReducer from './board-create-form-reducer';
import boardPageReducer from './board-page-reducer';

const reducer = (state, action) => {
  return {
    boardList: boardListReducer(state, action),
    boardCreateForm: boardCreateFormReducer(state, action),
    boardPage: boardPageReducer(state, action),
  };
};

export default reducer;
