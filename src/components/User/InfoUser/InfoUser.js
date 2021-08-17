import React from 'react'
import moment from 'moment';
import localization from "moment/locale/es";

import { Location, Link, DateBirth } from '../../../utils/icons';

import './InfoUser.scss';

export default function InfoUser(props) {
    const { user } = props;

    return (
        <div className="info-user">
            <h3 className="Name">
                {user?.name} {user?.lastName}
            </h3>
            <p className="email"> {user?.email} </p>
            { user?.biography && 
                <div className="description">
                    {user?.biography}
                </div>
            }
            <div className="more-info">
                { 
                    user?.location && 
                    <p>
                        <Location />
                        { user.location }
                    </p>
                }
                { 
                    user?.webSite && 
                    <a
                        href={user.webSite}
                        alt={user.webSite}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Link /> {user.webSite}
                    </a>
                }
                {
                    user?.birthday &&
                    <p>
                        <DateBirth />
                        {moment(user.birthday).locale("es", localization).format("LLL")}
                    </p>
                }
            </div>
        </div>
    )
}
