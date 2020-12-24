import createDataContext from './createDataContext';

const INITIAL_STATE = {
  timeList: []
};

const timeReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TIME_ENTRY':
      return { ...state, timeList: [...state.timeList, action.payload] }
  }
};

const addTimeEntry = (dispatch) => {
  return (timeEntry) => {
    dispatch({ type: 'ADD_TIME_ENTRY', payload: timeEntry });
  }
};

export const { Context, Provider } = createDataContext(timeReducer, { addTimeEntry }, INITIAL_STATE);