import shortid from 'shortid';

//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, id) =>
  tables.find((table) => table.id === id);

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const editTable = (payload) => ({ type: UPDATE_TABLE, payload });

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};
export default tablesReducer;
