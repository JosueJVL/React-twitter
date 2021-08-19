import React, { useState, useCallback } from 'react';
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import es from 'date-fns/locale/es';
import { useDropzone } from 'react-dropzone';
import { API_HOST } from '../../../utils/constant';
import { updateUser, uploadAvatarApi, uploadBannerApi } from '../../../api/user';

import { Camara } from '../../../utils/icons';
import './EditUserForm.scss'
import { toast } from 'react-toastify';

export default function EditUserForm(props) {
    const { user, setShowModal } = props
    const [formData, setFormData] = useState(initialValue(user))
    const [loading, setLoading] = useState(false)


    //Estado para Banner para URL
    const [bannerUrl, setBannerUrl] = useState(
        user?.banner ? `${API_HOST}/getBanner?id=${user.id}` : null
    );
    const [avatarUrl, setAvatarUrl] = useState(
        user?.avatar ? `${API_HOST}/getAvatar?id=${user.id}` : null
    );

    // estado para el Archivos de Banner y Avatar
    const [bannerFile, setBannerFile] = useState(null);
    const [avatarFile, setAvatarFile] = useState(null);
    
    //Banner
    const onDropBanner = useCallback((acceptedFile) => {
        const file = acceptedFile[0];
        setBannerUrl(URL.createObjectURL(file));
        setBannerFile(file);
        console.log(acceptedFile)
        },[]
    );

    //Avatar
    const onDropAvatar = useCallback((acceptedFile) => {
        const file = acceptedFile[0]
        setAvatarUrl(URL.createObjectURL(file))
        setAvatarFile(file)
        },[]
    );

    //Props paa Banner
    const { 
        getRootProps: getRootBannerProps, 
        getInputProps: getInputBannerProps,
        } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        multiple: false,
        onDrop: onDropBanner
    })

    //Props Avatar
    const{
        getRootProps: getRootAvatarProps,
        getInputProps: getInputAvatarProps,
        } = useDropzone({
            accept: "image/jpeg, image/png",
            noKeyboard: true,
            multiple: false,
            onDrop: onDropAvatar
    })

    const onChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async e => {
        setLoading(true)
        e.preventDefault();
        if(bannerFile){
            await uploadBannerApi(bannerFile).catch(() =>{
                toast.error("Error al subir la imagen del Banner")
            })
        }

        if(avatarFile){
            await uploadAvatarApi(avatarFile).catch(() =>{
                toast.error("Error al subir la imagen del Avatar")
            })
        }
        
        await updateUser(formData)
        .then(() => {
            setShowModal(false);
        }).catch(() =>{
            toast.error("Error al Actualizar los datos del Usuarios")
        })

        setLoading(false)
        window.location.reload();
    }
    return (
        <div className="edit-user-form">
            <div 
                className="banner" 
                style={{ backgroundImage: `url('${bannerUrl}')` }}
                {...getRootBannerProps()}>
                    <input {...getInputBannerProps()} />
                    <Camara />
            </div>
            <div
                className="avatar"
                style={{ backgroundImage: `url('${avatarUrl}')`}}
                {...getRootAvatarProps()}>
                    <input {...getInputAvatarProps()} />
                    <Camara />
            </div>
            <Form onSubmit={onSubmit} onChange={onChange}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                name="name"
                                autoComplete="off"
                                defaultValue={formData.name}
                                onChange={onChange}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Apellidos"
                                name="lastName"
                                autoComplete="off"
                                defaultValue={formData.lastName}
                                onChange={onChange}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        as="textarea"
                        row="3"
                        placeholder="Agrega tu Biografia"
                        name="biography"
                        autoComplete="off"
                        defaultValue={formData.biography}
                        onChange={onChange}
                    />
                </Form.Group>   
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Sitio Web"
                        name="webSite"
                        autoComplete="off"
                        defaultValue={formData.webSite}
                        onChange={onChange}
                    />
                </Form.Group>

                <Form.Group>
                    <DatePicker 
                    placeholder="Fecha de Nacimiento"
                    locale={es}
                    selected={new Date(formData.birthday)}
                    onChange={(value) => 
                        setFormData({...formData, birthday : value}) }
                    />
                </Form.Group>
                
                <Button 
                    className="btn-submit"
                    variant="primary"
                    type="submit">
                        {loading && <Spinner animation="border" size="sm" />}
                        Guardar
                </Button>
            </Form>
        </div>
    );
}

function initialValue(user){
    return {
        // equivalencis name: user.name ? user.name : ""
        name: user.name || "",
        lastName: user.lastName || "",
        biography: user.biography || "",
        location: user.location || "",
        webSite: user.webSite || "",
        birthday: user.birthday || ""
    }
}