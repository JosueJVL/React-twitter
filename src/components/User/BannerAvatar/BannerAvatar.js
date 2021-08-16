import React from 'react'
import { API_HOST } from '../../../utils/constant'


import './BannerAvatar.scss'
export default function BannerAvatar(props) {
    const { user } = props
    const bannerURL = user?.banner ? `${API_HOST}/getBanner?id=${user.id}` :  null



    console.log(user)
    return (
        <div>
            <h1>BannerAvatar</h1>
        </div>
    )
}
