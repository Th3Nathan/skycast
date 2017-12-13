import axios from 'axios';
import queryString from 'query-string';
import moment from 'moment';

const localUrl = "http://localhost:8080/";
const url = localUrl;

let monthlyStamps = [
    moment().subtract(31, 'day').unix(),
    moment().subtract(23, 'day').unix(),
    moment().subtract(15, 'day').unix(),
    moment().subtract(7, 'day').unix()
]

let lastWeek = moment().subtract(7, 'day');

const $ = axios.create({withCredentials: true});

export const signUp = ({username, password}) => {
    return $.post(url + 'signup', (queryString.stringify({ username, password})));
};
  

export const signIn = ({username, password}) => {
    return $.post(url + 'signin', (queryString.stringify({ username, password})));
};

export const logout = () => {
    return $.get(url + 'logout');
};

export const postQuery = (query) => {
    return $.post(url + 'addquery', (queryString.stringify(query)));
};

export const fetchWeather = (latLng) => {
    return $.post(url + 'weather', (queryString.stringify(latLng)));
};