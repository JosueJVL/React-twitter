import React, { useState } from 'react'
import { Form, Button, Spinner } from "react-bootstrap";
import { isEmailValid } from '../../utils/validation';
import { values, size } from "lodash";
import { toast } from "react-toastify";
import  { signInAPI } from '../../api/auth';

import "./SignInForm.scss"

export default function SignInForm() {
    const [formData, setFormData] = useState(initialFormValue)
    const [stateInLoading, setStateInLoading] = useState(false)

    const onSubmit = e => {
        e.preventDefault()
        console.log(formData);

        let validCount = 0;

        values(formData).some(value =>{
            value && validCount++
            return null;
        })

        if(validCount !== size(formData)){
            toast.warning("Completa todos los campos del formulario.");
        }else{
            if(!isEmailValid(formData.email)){
                toast.warning("Email es invalido.");
            }else{
                setStateInLoading(true);
                signInAPI(formData).then(response => {
                    if(response.message){
                        toast.warning(response.message);
                    }else{
                        toast.success("ok")
                        console.log(response.token);
                    }
                })
                .catch(() => {
                    toast.error("Error del servidor, intentelo mas tarde.");
                })
                .finally(() =>{
                    setStateInLoading(false);
                })
            }
        }
    }

    const onChange = e => {
        setFormData({...formData, [e.target.name] : e.target.value})
    };

    return (
        <div className="sign-in-form">
            <h2>Iniciar Sesión</h2>
            <h4>
                Para empezar, ingrese su correo electrónico o @nombredeusuario
            </h4>
            <Form onSubmit={onSubmit} onChange={onChange}>
                <Form.Group>
                    <Form.Control 
                        type="email" 
                        placeholder="Correo Electronico"
                        defaultValue={formData.email}
                        name="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        type="password" 
                        placeholder="Contrasena"
                        defaultValue={formData.password}
                        name="password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {
                        !stateInLoading ? "Iniciar Sesión" : <Spinner animation="border"/>
                    }
                </Button>
            </Form>
        </div>
    )
}

function initialFormValue(){
    return {
        email: "",
        password: ""
    }
}