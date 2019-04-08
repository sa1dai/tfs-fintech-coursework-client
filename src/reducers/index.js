import boardListReducer from './board-list';
import boardCreateFormReducer from './board-create-form';
import boardPageReducer from './board-page';

const reducer = (state, action) => {
  return {
    boardList: boardListReducer(state, action),
    boardCreateForm: boardCreateFormReducer(state, action),
    boardPage: boardPageReducer(state, action)
  };
};

export default reducer;
