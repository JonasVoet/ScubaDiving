import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './contact.scss'

const Contact = () => {
    return (
        <div className="contact container">
            <div id="map-container-google-1" className="z-depth-1-half map-container">
                <iframe src="https://maps.google.com/maps?q=%20Ydesvej%204%2C%208500%20Grenaa&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                    allowfullscreen></iframe>
            </div>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="navn@eksempel.dk" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Dit navn</Form.Label>
                    <Form.Control type="text" placeholder="John" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Dit nummer</Form.Label>
                    <Form.Control type="number" placeholder="58565854" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Din besked</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Button className="btn" type="submit">
                    Send besked
                    </Button>
            </Form>

        </div>
    )
}

export default Contact
