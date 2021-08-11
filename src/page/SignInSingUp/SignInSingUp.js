import React, { useState } from 'react'
import { Container, Row, Col, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faComment  } from '@fortawesome/free-solid-svg-icons';
import BasicModal from "../../components/Modal/BasicModal";
import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components/SignInForm";

import twitterFondo from "../../assets/png/fondo.png";
import LogoTwitter from "../../assets/png/twitterA.png";

import "./SignInSingUp.scss"

export default function SignInSingUp() {

    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal ] = useState(null);

    const openModal = contentModal => {
        setShowModal(true);
        setContentModal(contentModal)
    }

    return (
        <>
        <Container className="signin-signup" fluid>
            <Row>
                <LeftComponent/>
                <RightComponent openModal = {openModal} setShowModal = {setShowModal} />
            </Row>
        </Container>
        
        <BasicModal show={showModal} setShow={setShowModal}>
            {contentModal}
        </BasicModal>
        </>
    )
}

function LeftComponent(){
    return (
        <Col className="signin-signup__left" xs={6}>
            <img src={twitterFondo} alt="Twitter"></img>
            {/* <div>
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
            </div> */}
        </Col>
    )
}

function RightComponent(props){
    const { openModal, setShowModal } = props;
    return (
        <Col className="signin-signup__right" xs={6}>
            <div>
                <img src={LogoTwitter} alt="Twitter" />
                <h2>Mira lo que esta pasando en el Mundo</h2>
                <h3>Únete a Twitter hoy mismo.</h3>
                <Button 
                    variant="primary"
                    onClick = {() => openModal(
                        <SignUpForm setShowModal={setShowModal}></SignUpForm>
                    )}
                >
                    Registrate
                </Button>
                <Button 
                    variant="outline-primary"
                    onClick = {() => openModal(
                        <h2><SignInForm></SignInForm></h2>
                    )}
                    >Iniciar Sesion
                </Button>
            </div>
        </Col>
    )
}