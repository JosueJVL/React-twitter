import React from 'react'
import BasicLayout from '../../layout/BasicLayout/BasicLayout'

import "./Home.scss"

export default function Home(props) {
    const {setRefreshCheckLogin} = props;
    return (
            <BasicLayout className="home" setRefreshCheckLogin={setRefreshCheckLogin}>
            <h2>Estamos en Home</h2>
            <h1>H1 dentro del Home</h1>
            </BasicLayout>
    )
}
