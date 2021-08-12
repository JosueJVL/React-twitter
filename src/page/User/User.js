import React from 'react'
import {Button, Spinner} from 'react-bootstrap';
import BasicLayout from '../../layout/BasicLayout/BasicLayout';



import "./User.scss";

export default function User() {
    return (
        <BasicLayout className="user">
            <div className="user__title">
                <h2>
                Josue Vicencio Lara
                </h2>
            </div>
            <div>
                Banner Ususario
            </div>
            <div>
                Informacion Usuario
            </div>
            <div className="user__twittws">
                Lista de mensajes
            </div>
        </BasicLayout>
    )
}
