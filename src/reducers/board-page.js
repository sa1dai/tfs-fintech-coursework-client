import { ActionTypes } from '../actions';

const boardPageReducer = (state, action) => {

  if (state === undefined) {
    return {
      board: null,
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case ActionTypes.fetchBoardRequest:
      return {
        boards: null,
        loading: true,
        error: null
      };

    case ActionTypes.fetchBoardSuccess:
      return {
        board: action.payload,
        loading: false,
        error: null
      };

    case ActionTypes.fetchBoardFailure:
      return {
        boards: null,
        loading: false,
        error: action.payload
      };

    default:
      return state.boardPage;
  }
};

export default boardPageReducer;
