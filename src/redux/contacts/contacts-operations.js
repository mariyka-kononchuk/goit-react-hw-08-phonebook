import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError
} from './contacts-action'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactRequest());

    //асинхронный код
    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactSuccess(data))
    } catch (error) {
        dispatch(fetchContactError(error.message))
    }
}

export const addContact = ({ name, number }) => async dispatch => {
    const contact = {
        name,
        number
    }

    dispatch(addContactRequest());

    try {
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data))
    } catch (error) {
        dispatch(addContactError(error))
    }
}

export const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactRequest());

    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        dispatch(deleteContactSuccess(contactId))
    } catch (error) {
        dispatch(deleteContactError(error))
    }
}

