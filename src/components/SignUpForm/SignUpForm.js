import React from 'react';
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";

import "./SignUpForm.scss";

export default function SignUpForm(props) {

    const { setShowModal } = props;
    console.log(SignUpForm)

    const onSubmit = e => {
        e.preventDefault();
        setShowModal = false;
        
    }

    return (
        <div className="sign-up-form">
            <h2>Crea tu cuenta</h2>
            <form onSubmit={onSubmit}>

                <Form.Group>
                    <Row>
                        <Col>
                        <Form.Control type="text" placeholder="Nombre" />
                        </Col>
                        <Col>
                        <Form.Control type="text" placeholder="Apellidos" />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Form.Control type="email" placeholder="Correo Electronico" />
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col>
                        <Form.Control type="password" placeholder="Contrasena" />
                        </Col>
                        <Col>
                        <Form.Control type="password" placeholder="Repetir Contrasena" />
                        </Col>
                    </Row>
                </Form.Group>

                <Button variante="primary" type="submit" >
                    Registrate
                </Button>
            </form>
        </div>
    )
}
