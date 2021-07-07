import { FETCH_WEATHER, SET_LOADING } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      }
    case SET_LOADING: 
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
}

export default reducer;