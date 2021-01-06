import createDataContext from './createDataContext';

const MOCK_DATA = [
  {
    in: "5:00pm",
    out: "6:00pm",
    id: "abc",
  },
  {
    in: "3:00am",
    out: "9:00am",
    id: "def",
  },
  {
    in: "12:00am",
    out: "8:00pm",
    id: "ghi",
  },
];

const INITIAL_STATE = {
  // timeList: [],
  timeList: MOCK_DATA,
};

const timeReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TIME_ENTRY':
      return {
        ...state,
        timeEntry: [...state.timeList, action.payload]
      };
    case 'SUBMIT_EDIT_TIME_ENTRY':
      const id = action.id;
      const newTimeList = state.timeList.map((item) => (
        item.id === id ? action.payload : item
      ));
      return { ...state, timeList: newTimeList };
    default:
      return {...state};
  }
};

const addNewTimeEntry = (dispatch) => {
  return (timeEntry) => {
    dispatch({ type: 'ADD_TIME_ENTRY', payload: timeEntry })
  }
}

const submitEditTimeEntry = (dispatch) => {
  return (timeEntry) => {
    dispatch({ type: "SUBMIT_EDIT_TIME_ENTRY", payload: timeEntry });
  }
}

export const { Context, Provider } = createDataContext(
  timeReducer,
  {
    addNewTimeEntry,
    submitEditTimeEntry,
  },
  INITIAL_STATE
);