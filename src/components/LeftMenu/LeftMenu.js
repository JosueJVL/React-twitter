import React from 'react'
import { Button } from 'react-bootstrap';
import { Link }from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUser,
    faUsers,
    faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { logoutApi } from '../../api/auth';
import useAuth from '../../hooks/useAuth';
import twitterA from "../../assets/png/twitterA.png"
import TweetModal from '../TweetModal';

import "./LeftMenu.scss";

export default function LeftMenu(props) {
    const { setRefreshCheckLogin } = props;

    // devuelve el Usuario logeado
    const user = useAuth();

    // Cierra la sesion, borrando el TOken del LocalStore
    const logOut = () => {
        logoutApi();
        setRefreshCheckLogin(true);
    };

    return (
        <div className="left-menu">
            <img className="logo" src={twitterA} alt="twitter"></img>
            <Link to="/">
                <FontAwesomeIcon icon={faHome} />  Inicio 
            </Link>
            <Link to="/users">
                <FontAwesomeIcon icon={faUsers} /> Usuarios
            </Link>
            <Link to={`/${user?._id}`}>
                <FontAwesomeIcon icon={faUser} /> Perfil 
            </Link>
            <Link to="" onClick={logOut}>
                <FontAwesomeIcon icon={faPowerOff} /> Cerrar Sesion 
            </Link>
            <Button>Twittear
                <TweetModal />
            </Button>
        </div>
    )
}
