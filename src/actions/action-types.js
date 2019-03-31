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
}
