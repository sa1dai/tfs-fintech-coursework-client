import { ActionTypes } from '../actions';

const boardCreateFormReducer = (state, action) => {

  if (state === undefined) {
    return {
      boardTitle: "",
      serverIsProcessingRequest: false,
      error: null
    };
  }

  switch (action.type) {
    case ActionTypes.createBoardRequest:
      return {
        boardTitle: "",
        serverIsProcessingRequest: true,
        error: null
      };

    case ActionTypes.createBoardSuccess:
      return {
        boardTitle: "",
        serverIsProcessingRequest: false,
        error: null
      };

    case ActionTypes.createBoardFailure:
      return {
        boardTitle: "",
        serverIsProcessingRequest: false,
        error: action.payload
      };

    case ActionTypes.createBoardTitleChanged:
      return {
        boardTitle: action.payload,
        serverIsProcessingRequest: false,
        error: null
      };

    default:
      return state.boardCreateForm;
  }
};

export default boardCreateFormReducer;
