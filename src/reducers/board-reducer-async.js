import { ActionTypes } from '../actions';
import getRandomString from "src/utils/get-random-string";

const addColumn = ({ board }, columnTitle) => {
  const { columns } = board;

  const column = {
    id: getRandomString(),
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

  const columnItem = {
    id: getRandomString(),
    title: columnItemTitle,
    url: '#'
  };

  return {
    ...board,
    columns: columns.map((column,i) => i === columnIndex ? addItemToColumn(column, columnItem): column)
  }
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const remove = (list, removeIndex) => {
  const result = Array.from(list);
  result.splice(removeIndex, 1);

  return result;
};

const swapItemsInColumn = (column, startIndex, endIndex) => {
  return {
    ...column,
    items: reorder(column.items, startIndex, endIndex)
  };
};

const move = (source, destination, startColumnId, startItemIndex, endColumnId, endItemIndex) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(startItemIndex, 1);

  destClone.splice(endItemIndex, 0, removed);

  const result = {};
  result[startColumnId] = sourceClone;
  result[endColumnId] = destClone;

  return result;
};

const dropColumnItem = (
  { board },
  {
    source:
      {
        droppableId: startColumnId,
        index: startItemIndex
      },
    destination
  }) => {

  if (!destination) {
    return {
      ...board
    }
  }

  const { columns } = board;
  const { droppableId: endColumnId, index: endItemIndex} = destination;

  if (startColumnId === endColumnId) {
    const columnIndex = columns.findIndex(column => column.id === startColumnId);

    return {
      ...board,
      columns: columns.map((column, index) => index === columnIndex
                                            ? swapItemsInColumn(column, startItemIndex, endItemIndex)
                                            : column)
    }
  }

  const startColumnIndex = columns.findIndex(column => column.id === startColumnId);
  const endColumnIndex = columns.findIndex(column => column.id === endColumnId);

  const result = move(
    columns.find(column => column.id === startColumnId).items,
    columns.find(column => column.id === endColumnId).items,
    startColumnId,
    startItemIndex,
    endColumnId,
    endItemIndex);

  return {
    ...board,
    columns: columns.map((column, index) => {
      if (index === startColumnIndex) {
        return {
          ...column,
          items: result[startColumnId]
        }
      }

      if (index === endColumnIndex) {
        return {
          ...column,
          items: result[endColumnId]
        }
      }

      return column;
    })
  }
};

const dropColumn = (
  { board },
  {
    source:
      {
        droppableId: startColumnId,
        index: startColumnIndex
      },
    destination
  }) => {

  if (!destination) {
    return {
      ...board
    }
  }

  const { columns } = board;
  const { index: endColumnIndex} = destination;

  return {
    ...board,
    columns: reorder(columns, startColumnIndex, endColumnIndex)
  }
};

const deleteItemFromColumn = (column, columnItemIndex) => {
  return {
    ...column,
    items: remove(column.items, columnItemIndex)
  };
};

const deleteColumnItem = ({ board }, { columnIndex, columnItemIndex }) => {
  const { columns } = board;

  return {
    ...board,
    columns: columns.map((column, i) => i === columnIndex ? deleteItemFromColumn(column, columnItemIndex): column)
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

    case ActionTypes.dropColumnItem:
      return {
        board: dropColumnItem(state.boardAsync, action.payload),
        loading: false,
        error: null
      };

    case ActionTypes.deleteColumnItem:
      return {
        board: deleteColumnItem(state.boardAsync, action.payload),
        loading: false,
        error: null
      };

    case ActionTypes.dropColumn:
      return {
        board: dropColumn(state.boardAsync, action.payload),
        loading: false,
        error: null
      };



    default:
      return state.boardAsync;
  }
};

export default boardReducerAsync;
