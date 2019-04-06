import { ActionTypes } from '../actions';

const updateBoardList = (state, newBoard) => {
  const { boardList: { boards } } = state;

  return {
    boards: [
      ...boards,
      newBoard
    ],
    loading: false,
    error: null
  };
};

const boardListReducer = (state, action) => {

  if (state === undefined) {
    return {
      boards: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case ActionTypes.fetchBoardsRequest:
      return {
        boards: [],
        loading: true,
        error: null
      };

    case ActionTypes.fetchBoardsSuccess:
      return {
        boards: action.payload,
        loading: false,
        error: null
      };

    case ActionTypes.fetchBoardsFailure:
      return {
        boards: [],
        loading: false,
        error: action.payload
      };

    case ActionTypes.createBoardSuccess:
      return updateBoardList(state, action.payload);

    default:
      return state.boardList;
  }
};

export default boardListReducer;
