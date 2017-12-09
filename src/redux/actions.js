import * as $ from '../api';
import {
    UPDATE_SESSION_FORM_USERNAME,
    UPDATE_SESSION_FORM_PASSWORD,
    UPDATE_SESSION_FORM_ERROR,
    RECEIVE_USER,
} from './reducers/session-form-reducer';

export const updateSessionFormUsername = username => {
    return {
        type: UPDATE_SESSION_FORM_USERNAME,
        username
    };
};
  
export const updateSessionFormPassword = password => {
    return {
        type: UPDATE_SESSION_FORM_PASSWORD,
        password
    };
};
  
export const updateSessionFormError = error => {
    return {
        type: UPDATE_SESSION_FORM_ERROR,
        error
    };
};

export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    };
};


export const signIn = data => async dispatch => {
    try {
        let response = await $.signIn(data);
        dispatch(receiveUser(response.data));
    } catch (err) {
        console.log(err)
        return;
    }
}

export const signUp = data => async dispatch => {
    try {
        let response = await $.signUp(data);
        dispatch(receiveUser(response.data));
    } catch (err) {
        console.log(err)
        return;
    }
}