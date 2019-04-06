import boardListReducer from './board-list';
import boardCreateFormReducer from './board-create-form';

const reducer = (state, action) => {
  return {
    boardList: boardListReducer(state, action),
    boardCreateForm: boardCreateFormReducer(state, action)
  };
};

export default reducer;
