import React, { isValidElement, useState } from 'react';
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from '../../utils/validation';

import "./SignUpForm.scss";

export default function SignUpForm(props) {
    const { setShowModal } = props;
    const [formData, setFormData] = useState(initialFormValue)

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)

        let validCount = 0;

        values(formData).some(value => {
            value && validCount ++
            return null });

        if(validCount !== size(formData)){
            toast.warning("Completa todos los campos del formulario")
        }else{
            if (!isEmailValid(formData.email)){
                toast.warning("Email no es valido");
            }else if(formData.password !== formData.confirmPassword){
                toast.warning("Las constraseñas deben de ser iguales.")
            }else if(size(formData.password) < 6){
                toast.warning("La constraseña debe de tener al menos 6 caracteres")
            }else{
                toast.success("Ok")
            }
        }
    };

    //Solo sirve para formularios que estan construidos con puros input
    const onChange = e => {
        setFormData({ ...formData, [e.target.name] : e.target.value})
    };

    return (
        <div className="sign-up-form">
            <h2>Crea tu cuenta</h2>
            <Form onSubmit={onSubmit} onChange={onChange}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                                defaultValue={formData.nombre}
                                // onChange={e =>
                                //     setFormData({ ...formData, nombre: e.target.value})}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Apellidos"
                                name="apellidos"
                                defaultValue={formData.apellidos}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="email"
                        placeholder="Correo electronico"
                        name="email"
                        defaultValue={formData.email}
                    />
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                name="password"
                                defaultValue={formData.password}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="password"
                                placeholder="Repetir contraseña"
                                name="confirmPassword"
                                defaultValue={formData.confirmPassword}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Button variant="primary" type="submit">
                     Registrase
                </Button>
            </Form>
        </div>
    )
}


function initialFormValue(){
    return {
        nombre: "",
        apellidos: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
}