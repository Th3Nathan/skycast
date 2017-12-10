import axios from 'axios';
import queryString from 'query-string';

const localUrl = "http://localhost:8080/";
const url = localUrl;

const $ = axios.create({withCredentials: true});

export const signUp = ({username, password}) => {
    return $.post(url + 'signup', (queryString.stringify({ username, password})));
};
  

export const signIn = ({username, password}) => {
    return $.post(url + 'signin', (queryString.stringify({ username, password})));
};
