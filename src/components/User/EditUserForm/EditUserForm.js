import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import es from 'date-fns/locale/es';

import './EditUserForm.scss'

export default function EditUserForm(props) {
    const { user, setShowModal } = props
    const [formData, setFormData] = useState(initialValue(user))

    const onChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <div className="edit-user-form">
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
                    onChange={value => formData({...formData, birthday : value}) }
                    />
                </Form.Group>
                
                <Button 
                    className="btn-submit"
                    variant="primary"
                    type="submit">
                        Guardar
                </Button>
            </Form>
        </div>
    )
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