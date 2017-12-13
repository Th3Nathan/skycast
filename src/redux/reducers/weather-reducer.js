import {RECEIVE_CURRENT_WEATHER, RECEIVE_WEATHER_HISTORY, SET_LOCATION} from '../actions';

const defaultState = {
    location: {
        latitude: 42.3601,
        longitude: 71.0589,
        name: 'Boston',
    }, 
    current: null, // object
    daily: [],
    hourly: [],
     // array 
};

const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOCATION:
        return {...state, location: action.location}
        case RECEIVE_CURRENT_WEATHER:
        debugger
        return {...state,
            current: action.data.currently,
            location: action.query,
            daily: action.data.daily.data,
            hourly: action.data.hourly.data,
        }
        case RECEIVE_WEATHER_HISTORY: 
        debugger
        let daily = action.data.reduce(
            (acc, forecast) => [...acc, forecast.daily[0]], []
        );
        let current = action.data[action.data.length - 1].currently;
        let hourly = current.hourly;
        return {...state, daily, hourly, current, location: action.query }
        
        default:
        return {...state};
    }
};

export default weatherReducer;
