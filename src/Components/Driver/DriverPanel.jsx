import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";
import DriverProfile from "./DriverProfile";
import DriverRequest from "./DriverRequest";
import { useNavigate } from "react-router-dom";

const DriverPanel = () => {
    var location = useLocation();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <>
            <Navbar key="xl" expand="xl" className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">Carzy | Driver</Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-xl`}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-xl`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-xl`}
                            >
                                Carzy | Driver
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-4">
                                <Nav.Link className="ms-2">
                                    <Link
                                        className="navbar-link"
                                        to="/driver/my-profile"
                                    >
                                        Home
                                    </Link>
                                </Nav.Link>
                                <Nav.Link className="ms-2">
                                    <Link
                                        className="navbar-link"
                                        to="/driver/my-requests"
                                    >
                                        My Requests
                                    </Link>
                                </Nav.Link>
                                <Nav.Link
                                    className="navbar-link"
                                    onClick={logout}
                                >
                                    Log Out
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            {location.pathname === "/driver/my-profile" && <DriverProfile />}
            {location.pathname === "/driver/my-requests" && <DriverRequest />}
        </>
    );
};

export default DriverPanel;
