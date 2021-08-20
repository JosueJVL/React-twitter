import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import ConfigModal from '../../Modal/ConfigModal/ConfigModal'
import EditUserForm from '../EditUserForm'
import { API_HOST } from '../../../utils/constant'
import AvatarNoFound from "../../../assets/png/avatar-no-found.png"
import { checkFollowApi, followApi, deleteFollowApi } from '../../../api/follow'

import './BannerAvatar.scss'
export default function BannerAvatar(props) {
    const { user, loggedUser } = props
    const [showModal, setShowModal] = useState(false)

    //Estado de Following
    const [following, setFollowing] = useState(null)

    const [reloadFollow, setReloadFollow] = useState(false)  


    const bannerURL = user?.banner ? 
    `${API_HOST}/getBanner?id=${user.id}`
    :  null
    
    const avatarUrl = user?.avatar ? 
    `${API_HOST}/getAvatar?id=${user.id}`
    :  AvatarNoFound

    useEffect(() => {
        if(user){
            checkFollowApi(user?.id).then(response => {
                if(response?.status){
                    setFollowing(true)
                }else{
                    setFollowing(false)
                }
            })
        }

        setReloadFollow(false)
    }, [user, reloadFollow])

    const onFollow = () => {
        followApi(user?.id).then(response =>{
            setReloadFollow(true)
            console.log("estas siguiendo al usuario")
        })
    }

    const unFollow = () => {
        deleteFollowApi(user?.id).then(() => {
            setReloadFollow(true)
        })
    }
    return (
        <div className="banner-avatar" 
            style={{ backgroundImage: `url('${ bannerURL}')`}}>
            <div className="avatar"
            style={{ backgroundImage: `url('${ avatarUrl}')`}}>
            </div>

            { user && (
                <div className="options">
                    {loggedUser._id === user.id && <Button onClick={() => setShowModal(true)}>Editar Perfil</Button>}
                
                    {loggedUser._id !== user.id && (
                        following !== null && (
                            (following ? <Button onClick={unFollow} className="unfollow">
                                <span>Seguiendo</span>
                            </Button> : <Button onClick={onFollow}>Seguir+</Button>)
                        )
                    )}
                </div>

            )}

            <ConfigModal show={showModal} setShow={setShowModal} title="Editar Perfil">
                <EditUserForm user={user} setShowModal={setShowModal}/>
            </ConfigModal>
        </div>
    )
}
