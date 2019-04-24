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

const addBoardRequested = () => {
  return {
    type: ActionTypes.addBoardRequest
  };
};

const addBoardSuccess = (boards) => {
  return {
    type: ActionTypes.addBoardSuccess,
    payload: boards
  };
};

const addBoardError = (error) => {
  return {
    type: ActionTypes.addBoardFailure,
    payload: error
  };
};

export const boardAddTitleChanged = (boardTitle) => {
  return {
    type: ActionTypes.boardAddTitleChanged,
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

const boardSaved = () => {
  return {
    type: ActionTypes.saveBoardSuccess,
  };
};

const boardSaveError = (error) => {
  return {
    type: ActionTypes.saveBoardFailure,
    payload: error
  };
};

export const columnAddTitleChanged = (columnTitle) => {
  return {
    type: ActionTypes.columnAddTitleChanged,
    payload: columnTitle
  };
};

export const addColumn = (columnTitle) => {
  return {
    type: ActionTypes.addColumn,
    payload: columnTitle
  };
};

export const columnItemAddTitleChanged = (columnItemTitle) => {
  return {
    type: ActionTypes.columnItemAddTitleChanged,
    payload: columnItemTitle
  };
};

export const addColumnItem = (columnIndex, columnItemTitle) => {
  return {
    type: ActionTypes.addColumnItem,
    payload: { columnIndex, columnItemTitle }
  };
};

export const dropColumnItem = (dropInfo) => {
  return {
    type: ActionTypes.dropColumnItem,
    payload: dropInfo
  };
};

export const dropColumn = (dropInfo) => {
  return {
    type: ActionTypes.dropColumn,
    payload: dropInfo
  };
};

const fetchBoards = (service) => () => (dispatch) => {
  dispatch(boardsRequested());
  service.getBoards()
    .then((data) => dispatch(boardsLoaded(data)))
    .catch((err) => dispatch(boardsError(err)));
};

const addBoard = (service) => (newBoard, history) => (dispatch) => {
  dispatch(addBoardRequested());
  service.addBoard(newBoard)
    .then((data) => {
      const { url } = data;

      dispatch(addBoardSuccess(data));
      history.push(url);
    })
    .catch((err) => {
      dispatch(addBoardError(err))
    });
};

const fetchBoard = (service) => (boardId) => (dispatch) => {
  dispatch(boardRequested());
  service.getBoard(boardId)
    .then((data) => dispatch(boardLoaded(data)))
    .catch((err) => dispatch(boardError(err)));
};

const saveBoard = (service) => (boardId, board) => (dispatch) => {
  service.saveBoard(boardId, board)
    .then(() => dispatch(boardSaved()))
    .catch(() => dispatch(boardSaveError()));
};

export {
  fetchBoards,
  addBoard,
  fetchBoard,
  saveBoard,
  ActionTypes
};
