import { API_HOST, Token } from "../utils/constant";
import jwtDecode from "jwt-decode";

export function signUpApi(user){
    const url = `${API_HOST}/registro`;
    
    const userTmp = { 
        name:user.nombre,
        lastName:user.apellidos,
        password:user.password,
        email:user.email.toLowerCase(),
        birthday:new Date()
    };

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userTmp)
    };

    return fetch(url, params).then(response=>{
        if(response.status >= 200 && response.status < 300 ){
            return response.json();
        }

        return { code: 400, message: "Ya existe un usuario registrado con ese email." }
    }).then(result => {
        return result;
    }).catch( error => {
        return error; 
    })

}

export function signInAPI(user){
    const url = `${API_HOST}/login`;

    const userTmp = {
        ...user,
        email: user.email.toLowerCase()
    }

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userTmp)
    };

    return fetch(url, params).then(response=>{
        if(response.status >= 200 && response.status < 300){
            return response.json();
        }
        
        return { message: "Usuario y/o Contrasena invalidos"}
    })
    .then(result => {
        return result;
    })
    .catch(error => {
        return error;
    });

}

export function setTokenAPI(token){
    localStorage.setItem(Token, token);
}

export function getTokenApi(){
    return localStorage.getItem(Token);
}

export function logoutApi(){
    localStorage.removeItem(Token);
}

export function isUserLogedApi(){
    const token = getTokenApi();

    if(!token){
        logoutApi();
        return null
    }
    // se ocupa el npm add jwt-decode
    // para validar el token si esta vigente
    
    if(isExpired(token)){
        logoutApi();
    }
    
    console.log(jwtDecode(token));
    return jwtDecode(token);
    
}

function isExpired(token) {
    const { exp } = jwtDecode(token);
    const expire = exp * 1000;
    const timeout = expire - Date.now();
  
    if (timeout < 0) {
      return true;
    }
    return false;
}