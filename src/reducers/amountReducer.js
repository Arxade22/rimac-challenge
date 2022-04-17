import { AMOUNT_RECIEVED } from '../types/amountType';

export default (state = {}, action) => {
    switch (action.type) {
        case AMOUNT_RECIEVED:
            return { amountassigned: action.payload.amount }
        default:
            return state;
    }
}