import axios from 'axios';

const axiosConfigPublic = {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'B1tD3V'
  }
}

const accessToken = sessionStorage.getItem("accessToken");

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "B1tD3V",
    Authorization: "Bearer " + accessToken
  }
}


// public APIs

export const getRequestPublic = (url, onSuccess, onFail) => {
  return axios.get(url, axiosConfigPublic)
    .then(response => { console.log(response); onSuccess(response) })
    .catch(error => onFail(error.response));
}

export const postRequestPublic = (url, data, onSuccess, onFail) => {
  return axios.post(url, data, axiosConfigPublic)
    .then(response => { console.log(response); onSuccess(response) })
    .catch(error => onFail(error.response));
}


// logged in APIs

export const getRequest = (url, onSuccess, onFail) => {
  return axios.get(url, axiosConfig)
    .then(response => onSuccess(response))
    .catch(error => onFail(error.response));
}

export const postRequest = (url, data, onSuccess, onFail) => {
  return axios.post(url, data, axiosConfig)
    .then(response => onSuccess(response))
    .catch(error => onFail(error.response));
}

export const putRequest = (url, data, onSuccess, onFail) => {
  return axios.put(url, data, axiosConfig)
    .then(response => onSuccess(response))
    .catch(error => onFail(error.response));
}

export const deleteRequest = (url, onSuccess, onFail) => {
  return axios.delete(url, axiosConfig)
    .then(response => onSuccess(response))
    .catch(error => onFail(error.response));
}
