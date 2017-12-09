import axios from 'axios';

const localUrl = "http://localhost:8080/";
const url = localUrl;

export const signUp = ({username, password}) => {
    return axios.post(url + 'signup', {
        username, password
    });
};
  
export const signIn = ({username, password}) => {
    return axios.post(url + 'signin', {
        username, password
    });
};