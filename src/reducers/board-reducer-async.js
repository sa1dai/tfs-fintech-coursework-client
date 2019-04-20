import { ActionTypes } from '../actions';

const addColumn = ({ board }, columnTitle) => {
  const { columns } = board;

  const column = {
    title: columnTitle,
    items: []
  };

  const updatedColumns = [
    ...columns,
    column
  ];

  return {
    ...board,
    columns: updatedColumns
  }
};

const addItemToColumn = (column, columnItem) => {
  return {
    ...column,
    items: [
      ...column.items,
      columnItem
    ]
  };
};

const addColumnItem = ({ board }, { columnIndex, columnItemTitle }) => {
  const { columns } = board;
  // const columnsCopy = //clone(columns);
  //
  const columnItem = {
    title: columnItemTitle,
    url: '#'
  };

  //columnsCopy[columnIndex].items =  .push(columnItem);

  return {
    ...board,
    columns: columns.map((column,i) => i === columnIndex ? addItemToColumn(column, columnItem): column)
  }
};


const boardReducerAsync = (state, action) => {

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
        board: null,
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
        board: null,
        loading: false,
        error: action.payload
      };

    case ActionTypes.addColumn:
      return {
        board: addColumn(state.boardAsync, action.payload),
        loading: false,
        error: null
      };

    case ActionTypes.addColumnItem:
      return {
        board: addColumnItem(state.boardAsync, action.payload),
        loading: false,
        error: null
      };

    default:
      return state.boardAsync;
  }
};

export default boardReducerAsync;
