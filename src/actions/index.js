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

const boardRequested = () => {
  return {
    type: ActionTypes.fetchBoardRequest
  };
};

const boardLoaded = (board) => {
  return {
    type: ActionTypes.fetchBoardSuccess,
    payload: board
  };
};

const boardError = (error) => {
  return {
    type: ActionTypes.fetchBoardFailure,
    payload: error
  };
};

const fetchBoards = (service) => () => (dispatch) => {
  dispatch(boardsRequested());
  service.getBoards()
    .then((data) => dispatch(boardsLoaded(data)))
    .catch((err) => dispatch(boardsError(err)));
};

const createBoard = (service) => (newBoard, history) => (dispatch) => {
  dispatch(createBoardRequested());
  service.createBoard(newBoard)
    .then((data) => {
      const { url } = data;

      dispatch(createBoardSuccess(data));
      history.push(url);
    })
    .catch((err) => {
      dispatch(createBoardError(err))
    });
};

const fetchBoard = (service) => (boardId) => (dispatch) => {
  dispatch(boardRequested());
  service.getBoard(boardId)
    .then((data) => dispatch(boardLoaded(data)))
    .catch((err) => dispatch(boardError(err)));
};

export {
  fetchBoards,
  createBoard,
  fetchBoard,
  ActionTypes
};
