import updateBoardList from './board-list';

const reducer = (state, action) => {
  return {
    boardList: updateBoardList(state, action)
  };
};

export default reducer;
