import { API_HOST, Token } from "../utils/constant";
import {getTokenApi} from './auth.js';

export function checkFollowApi(userId){
    const url = `${API_HOST}/getrelations?id=${userId}`;

    const params = {
        headers: {
            Authorization: `Bearer ${getTokenApi()}`
        }
    }

    return fetch(url, params)
    .then(response => {
        return response.json()
    })
    .then(result =>{
        return result
    })
    .catch(error => {
        return error
    })
}

export function followApi(userId){
    const url = `${API_HOST}/addrelations?id=${userId}`;

    const params = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${getTokenApi()}`
        }
    }

    return fetch(url, params)
    .then(response =>{
        return response.json()
    })
    .then(result =>{
        return result;
    })
    .catch(error => {
        return error
    })
}

export function deleteFollowApi(userId){
    const url = `${API_HOST}/deleterelations?id=${userId}`;

    const params = {
        method:"DELETE",
        headers: {
            Authorization: `Bearer ${getTokenApi()}`
        }
    }

    return fetch(url, params)
    .then(response =>{
        return response.json()
    })
    .then(result =>{
        return result;
    })
    .catch(error => {
        return error
    })

}