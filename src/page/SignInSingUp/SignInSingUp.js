import React from 'react'
import { Container, Row, Col, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faComment  } from '@fortawesome/free-solid-svg-icons';
import LogoWhite from "../../assets/png/logo-white.png";
import LogoTwitter from "../../assets/png/logo.png";

import "./SignInSingUp.scss"

export default function SignInSingUp() {
    return (
        <>
        <Container className="signin-signup" fluid>
            <Row>
                <LeftComponent/>
                <RightComponent />
            </Row>
        </Container>
        </>
    )
}

function LeftComponent(){
    return (
        <Col className="signin-signup__left" xs={6}>
            <img src={LogoTwitter} alt="Twitter"></img>
            <div>
                <h2>
                    <FontAwesomeIcon icon={ faSearch } />
                    Sigue 
                </h2>
                <h2>
                    <FontAwesomeIcon icon={ faUser } />
                    - Enterate de que esta  </h2>
                <h2>
                    <FontAwesomeIcon icon={ faComment } /> 
                    - Unete a nuestra conversacion
                </h2>
            </div>
        </Col>
    )
}

function RightComponent(){
    return (
        <Col className="signin-signup__right" xs={6}>
            <div>
                <img src={LogoWhite} alt="Twitter" />
                <h2>Mira lo que esta pasando en el Mundo</h2>
                <h3>Unete a Twitter ahora !</h3>
                <Button variant="primary">Registrate</Button>
                <Button variant="outline-primary">Iniciar Sesion</Button>
            </div>
        </Col>
    )
}