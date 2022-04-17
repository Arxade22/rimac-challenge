import { SEND_FORM_INFORMATION } from "../types/rootType";

const initState = {
    formdate: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case SEND_FORM_INFORMATION:
            return { ...state, formdate: action.payload }

        default:
            return state;
    };
}
