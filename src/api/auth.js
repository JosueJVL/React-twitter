import { API_HOST } from "../utils/constant";

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