import React from 'react'
import { Form, Button, Spinner } from "react-bootstrap";

import "./SignInForm.scss"

export default function SignInForm() {

    const onSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className="sign-in-form">
            <h2>Iniciar Sesión</h2>
            <h4>
                Para empezar, ingrese su correo electrónico o @nombredeusuario
            </h4>
            <Form>
                <Form.Group>
                    <Form.Control type="email" placeholder="Correo Electronico" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" placeholder="Contrasena" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar Sesión
                </Button>
            </Form>
        </div>
    )
}
