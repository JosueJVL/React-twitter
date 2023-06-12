import React, {useEffect, useState} from 'react'
import {Button, Spinner} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

import BasicLayout from '../../layout/BasicLayout/BasicLayout';
import BannerAvatar from '../../components/User/BannerAvatar/BannerAvatar';
import InfoUser from '../../components/User/InfoUser';

import { getUserApi } from '../../api/user';


import "./User.scss";

function User(props) {
    const {match} = props;
    const [user, setUser] = useState(null)
    const loggedUser = useAuth()

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
                <h1>Welcome !!</h1>
            </div>
            <BannerAvatar user={user} loggedUser={loggedUser} />
                
            <InfoUser user={user}/>
            
            <div className="user__tweets">
                Lista de mensajes
            </div>
        </BasicLayout>
    )
}

export default withRouter(User)