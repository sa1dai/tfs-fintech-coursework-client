export default class ActionTypes {

  static get fetchBoardsRequest() {
    return 'FETCH_BOARDS_REQUEST';
  }

  static get fetchBoardsSuccess() {
    return 'FETCH_BOARDS_SUCCESS';
  }

  static get fetchBoardsFailure() {
    return 'FETCH_BOARDS_FAILURE';
  }

  static get createBoardRequest() {
    return 'CREATE_BOARD_REQUEST';
  }

  static get createBoardSuccess() {
    return 'CREATE_BOARD_SUCCESS';
  }

  static get createBoardFailure() {
    return 'CREATE_BOARD_FAILURE';
  }

  static get createBoardTitleChanged() {
    return 'CREATE_BOARD_TITLE_CHANGED';
  }
}
