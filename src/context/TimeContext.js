import createDataContext from './createDataContext';

const INITIAL_STATE = {
  timeList: [],
  currentTimeEntryEdit: null,
  isCreatingNewTimeEntry: false,
};

const timeReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_NEW_TIME_ENTRY':
      return {
        ...state,
        isCreatingNewTimeEntry: true,
        currentTimeEntryEdit: null,
      };
    case 'ADD_SUCCESSFUL_TIME_ENTRY':
      return {
        ...state,
        timeEntry: [...state.timeList, action.payload],
        isCreatingNewTimeEntry: false,
        currentTimeEntryEdit: null,
      };
    case 'SUBMIT_EDIT_TIME_ENTRY':
      const id = action.id;
      const newTimeList = state.timeList.map((item) => (
        item.id === id ? action.payload : item
      ));
      return { ...state, timeList: newTimeList };
    case 'EDIT_TIME_ENTRY':
      return {
        ...state,
        currentTimeEntryEdit: action.payload,
        isCreatingNewTimeEntry: false,
      };
    default:
      return {...state};
  }
};

const addNewTimeEntry = (dispatch) => {
  return () => {
    dispatch({ type: "ADD_NEW_TIME_ENTRY" });
  }
};

const addSuccessfulTimeEntry = (dispatch) => {
  return (timeEntry) => {
    dispatch({ type: 'ADD_SUCCESSFUL_TIME_ENTRY', payload: timeEntry })
  }
}

const submitEditTimeEntry = (dispatch) => {
  return (timeEntry) => {
    dispatch({ type: "SUBMIT_EDIT_TIME_ENTRY", payload: timeEntry });
  }
}

const editTimeEntry = (dispatch) => {
  return (timeEntry) => {
    dispatch({ type: 'EDIT_TIME_ENTRY', payload: timeEntry })
  }
}

export const { Context, Provider } = createDataContext(
  timeReducer,
  {
    addNewTimeEntry,
    submitEditTimeEntry,
    editTimeEntry,
    addSuccessfulTimeEntry,
  },
  INITIAL_STATE
);