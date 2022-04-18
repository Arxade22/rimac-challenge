import { AMOUNT_RECIEVED } from '../types/amountType';
import { SEND_MESSAGE_ERROR, REMOVING_MESSAGE_ERROR } from "../types/authType";
import { SEND_FORM_INFORMATION } from "../types/rootType";

export const eventForm = (
    tipo_documento,
    documento,
    nombre,
    correo,
    celular,
    placa,
    marca, year, modelo
) => ({
    type: SEND_FORM_INFORMATION,
    payload: {
        tipo_documento,
        documento,
        nombre,
        correo,
        celular,
        placa,
        marca, year, modelo
    },
});

export const sendAmount = (amount) => ({
    type: AMOUNT_RECIEVED,
    payload: {
        amount
    }

})

export const setError = (err) => ({
    type: SEND_MESSAGE_ERROR,
    payload: err,
});

export const removeError = (err) => ({
    type: REMOVING_MESSAGE_ERROR,
});
