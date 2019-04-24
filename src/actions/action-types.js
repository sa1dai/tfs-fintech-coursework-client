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

  static get addBoardRequest() {
    return 'ADD_BOARD_REQUEST';
  }

  static get addBoardSuccess() {
    return 'ADD_BOARD_SUCCESS';
  }

  static get addBoardFailure() {
    return 'ADD_BOARD_FAILURE';
  }

  static get boardAddTitleChanged() {
    return 'BOARD_ADD_TITLE_CHANGED';
  }

  static get fetchBoardRequest() {
    return 'FETCH_BOARD_REQUEST';
  }

  static get fetchBoardSuccess() {
    return 'FETCH_BOARD_SUCCESS';
  }

  static get fetchBoardFailure() {
    return 'FETCH_BOARD_FAILURE';
  }

  static get saveBoardSuccess() {
    return 'SAVE_BOARD_SUCCESS';
  }

  static get saveBoardFailure() {
    return 'SAVE_BOARD_FAILURE';
  }

  static get addColumn() {
    return 'ADD_COLUMN';
  }

  static get columnAddTitleChanged() {
    return 'COLUMN_ADD_TITLE_CHANGED';
  }

  static get addColumnItem() {
    return 'ADD_COLUMN_ITEM';
  }

  static get columnItemAddTitleChanged() {
    return 'COLUMN_ITEM_ADD_TITLE_CHANGED';
  }

  static get dropColumnItem() {
    return 'COLUMN_ITEM_DROP';
  }

  static get deleteColumnItem() {
    return 'COLUMN_ITEM_DELETE';
  }

  static get dropColumn() {
    return 'COLUMN_DROP';
  }
}
