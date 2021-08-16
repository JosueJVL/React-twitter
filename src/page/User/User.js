import React, {useEffect, useState} from 'react'
import {Button, Spinner} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import BasicLayout from '../../layout/BasicLayout/BasicLayout';
import BannerAvatar from '../../components/User/BannerAvatar/BannerAvatar';
import { getUserApi } from '../../api/user';


import "./User.scss";

function User(props) {
    const {match} = props;
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserApi(match.params.id)
        .then(response => {
            if(!response){
                toast.error("El usuario no existe");
            }
            setUser(response)
        }).catch(() => {
            toast.error("El usuario no existe");
        })
    }, [match.params])

    return (
        <BasicLayout className="user">
            <div className="user__title">
                <h2>
                    {
                        user ? `${user.name} ${user.lastName}` : "Usuario anonimo"
                    }
                </h2>
            </div>
            <BannerAvatar user={user}>

            </BannerAvatar>
                
            <div>
                Informacion Usuario
            </div>
            <div className="user__tweets">
                Lista de mensajes
            </div>
        </BasicLayout>
    )
}

export default withRouter(User)