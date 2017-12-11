import * as $ from '../api';
import {
    UPDATE_SESSION_FORM_USERNAME,
    UPDATE_SESSION_FORM_PASSWORD,
    UPDATE_SESSION_FORM_ERROR,
    RECEIVE_USER,
} from './reducers/session-form-reducer';

import {
    SET_LOCATION
} from './reducers/home-reducer';

const ADD_QUERY = 'ADD_QUERY';
const RECEIVE_DATA = 'RECEIVE_DATA';
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

export const logout = () => async dispatch => {
    try {
        let response = await $.logout();
        dispatch(receiveUser({username: null, id: null}));
    } catch (err) {
        console.log(err)
        return;
    }
}

export const postQuery = query => async dispatch => {
    try {
        let response = await $.postQuery(query);
        dispatch(addQuery(query));
    } catch (err) {
        console.log(err)
        return;
    }
}


export const setLocation = location => {
    // this might become a thunk which deals with the data
    return {
        type: SET_LOCATION,
        location
    }
}

export const addQuery = query => {
    // this might become a thunk
    return {
        type: ADD_QUERY,
        query,
    }
}

export const receiveData = (data, query) => {
    return {
        type: RECEIVE_DATA,
        data,
        query,
    };
}

export const fetchCurrentWeather = query => async dispatch => {
    try {
        let response = await $.fetchWeather(query);
        dispatch(receiveData(response.data, query));
    } catch (err) {
        console.log(err)
        return;
    }
}
