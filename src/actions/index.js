import ActionTypes from './action-types';

const boardsRequested = () => {
  return {
    type: ActionTypes.fetchBoardsRequest
  };
};

const boardsLoaded = (newBoards) => {
  return {
    type: ActionTypes.fetchBoardsSuccess,
    payload: newBoards
  };
};

const boardsError = (error) => {
  return {
    type: ActionTypes.fetchBoardsFailure,
    payload: error
  };
};

const fetchBoards = (boardStoreService) => () => (dispatch) => {
  dispatch(boardsRequested());
  boardStoreService.getBoards()
    .then((data) => dispatch(boardsLoaded(data)))
    .catch((err) => dispatch(boardsError(err)));
};

export {
  fetchBoards,
  ActionTypes
};
