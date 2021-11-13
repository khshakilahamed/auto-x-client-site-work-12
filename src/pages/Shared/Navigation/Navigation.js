import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <h2 style={{ color: 'white' }}>Auto<span style={{ color: 'red' }}>X</span></h2>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto ms-4">
                            <Nav.Link >
                                <NavLink to="/home" style={{ textDecoration: 'none' }}>
                                    <span className="nav-item" >Home</span>
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link >
                                <span className="nav-item">Features</span>
                            </Nav.Link>
                            <Nav.Link >
                                <span className="nav-item">Pricing</span>
                            </Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                        <NavLink to="">
                            <button className="btn btn-light ms-3">Logout</button>
                        </NavLink>
                        <NavLink to="/login">
                            <button className="btn btn-light ms-3">login</button>
                        </NavLink>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;