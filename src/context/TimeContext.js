import createDataContext from './createDataContext';

const MOCK_DATA = [
  {
    in: new Date(2020, 12, 17, 17, 0, 0),
    out: new Date(2020, 12, 17, 18, 0, 0),
    id: "abc",
  },
  {
    in: new Date(2020, 12, 18, 3, 0, 0),
    out: new Date(2020, 12, 17, 9, 0, 0),
    id: "def",
  },
  {
    in: new Date(2020, 12, 17, 0, 0, 0),
    out: new Date(2020, 12, 17, 13, 0, 0),
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
        timeList: [...state.timeList, action.payload]
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