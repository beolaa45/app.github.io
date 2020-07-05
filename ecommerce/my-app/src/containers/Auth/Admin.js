import React from 'react';
import { Row, Col } from 'reactstrap';
import Usermin from '../../components/style/Usermin'
const Admin = (props) => {
    return (
        <Usermin>
            <h1>My Profile</h1>
            <p>Manage profile information for account security</p>
            <Row>
                <Col xs="3">Role</Col>
                <Col xs="9">Admin</Col>
            </Row> 

            <div>
            <Row>
                <Col xs="3">Name</Col>
                <Col xs="9">VU DUY KHANH</Col>
            </Row> 
            <Row>
                <Col xs="3">Email</Col>
                <Col xs="9">khanhkango123@gmail.com</Col>
            </Row>
            <Row>
            <Col xs="12">Create Category</Col>
            <Col xs="12">Create </Col>
            </Row>
            </div>
        </Usermin>
    );
};

export default User;

