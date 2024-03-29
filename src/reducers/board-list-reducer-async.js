import { ActionTypes } from '../actions';

const boardListReducerAsync = (state, action) => {

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

    default:
      return state.boardListAsync;
  }
};

export default boardListReducerAsync;
