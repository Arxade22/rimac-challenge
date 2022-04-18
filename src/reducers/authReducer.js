import { SEND_MESSAGE_ERROR, REMOVING_MESSAGE_ERROR } from "../types/authType";

const initialState = {
  msgError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_ERROR:
      return {
        ...state,
        msgError: action.payload,
      };
    case REMOVING_MESSAGE_ERROR:
      return {
        ...state,
        msgError: null,
      };

    default:
      return state;
  }
};

export default authReducer;