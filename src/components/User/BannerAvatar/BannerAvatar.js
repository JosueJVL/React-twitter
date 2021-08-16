import React from 'react'
import { API_HOST } from '../../../utils/constant'


import './BannerAvatar.scss'
export default function BannerAvatar(props) {
    const { user } = props
    const bannerURL = user?.banner ? `http://localhost:8080/getBanner?id=${user.id}` :  null



    console.log(bannerURL)
    return (
        <div className="banner-avatar" 
            style={{ backgroundImage: `url('${ bannerURL}')`}}>
            <div className="avatar"></div>
            <h1>BannerAvatar</h1>
        </div>
    )
}
