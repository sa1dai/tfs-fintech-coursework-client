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

const createBoardRequested = () => {
  return {
    type: ActionTypes.createBoardRequest
  };
};

const createBoardSuccess = (boards) => {
  return {
    type: ActionTypes.createBoardSuccess,
    payload: boards
  };
};

const createBoardError = (error) => {
  return {
    type: ActionTypes.createBoardFailure,
    payload: error
  };
};

export const createBoardTitleChanged = (boardTitle) => {
  return {
    type: ActionTypes.createBoardTitleChanged,
    payload: boardTitle
  };
};

const fetchBoards = (service) => () => (dispatch) => {
  dispatch(boardsRequested());
  service.getBoards()
    .then((data) => dispatch(boardsLoaded(data)))
    .catch((err) => dispatch(boardsError(err)));
};

const createBoard = (service) => (newBoard) => (dispatch) => {
  dispatch(createBoardRequested());
  service.createBoard(newBoard)
    .then((data) => dispatch(createBoardSuccess(data)))
    .catch((err) => dispatch(createBoardError(err)));
};

export {
  fetchBoards,
  createBoard,
  ActionTypes
};
