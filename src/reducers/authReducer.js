import { SEND_MESSAGE_ERROR, REMOVING_MESSAGE_ERROR } from "../types/authType";

const initState = {
    msgError: null,

};

export default (state = initState, action) => {
    switch (action.type) {
        case SEND_MESSAGE_ERROR:
            return { ...state, msgError: action.payload };
        case REMOVING_MESSAGE_ERROR:
            return { ...state, msgError: action.payload };
        default:
            return state;    
    }
}