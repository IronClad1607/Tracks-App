import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'change_name':
      return {...state,name:action.payload}
    case "add_locations":
      return {
        ...state,
        locations: [...state.locations, action.payload],
      };
    case "start_recording":
      return { ...state, isRecording: true };
    case "stop_recording":
      return { ...state, isRecording: false };
    case "add_current_location":
      return {
        ...state,
        currentLocation: action.payload,
      };
    default:
      return state;
  }
};

const changeName = (dispatch) => (name) => {
  dispatch({ type: "change_name", payload: name });
};

const startRecording = (dispatch) => () => {
  dispatch({ type: "start_recording" });
};
const stopRecording = (dispatch) => () => {
  dispatch({ type: "stop_recording" });
};
const addLocation = (dispatch) => (location, recording) => {
  dispatch({
    type: "add_current_location",
    payload: location,
  });

  if (recording) {
    dispatch({
      type: "add_location",
      payload: "location",
    });
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation,changeName },
  { isRecording: false, locations: [], currentLocation: null,name:'' }
);
