import shortid from 'shortid';

//selectors
export const getAllTables = (state) => state.tables;

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const EDIT_TABLE = createActionName('EDIT_TABLE');

// action creators
export const editTable = (payload) => ({ type: EDIT_TABLE, payload });

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_TABLE:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};
export default tablesReducer;
