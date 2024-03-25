import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import BookCar from "./BookCar";
import MyBookings from "./MyBookings";
import BookingDetails from "./BookingDetails";
import MyProfile from "./MyProfile";
import BookDriver from "./BookDriver";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CustomerPanel = () => {
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
                    <Navbar.Brand href="#">Carzy | Customer</Navbar.Brand>
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
                                Carzy | Customer
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-4">
                                <Nav.Link className="ms-2">
                                    <Link
                                        className="navbar-link"
                                        to="/customer/my-profile"
                                    >
                                        Home
                                    </Link>
                                </Nav.Link>
                                <Nav.Link className="ms-2">
                                    <Link
                                        className="navbar-link"
                                        to="/customer/my-bookings"
                                    >
                                        My Bookings
                                    </Link>
                                </Nav.Link>
                                <Nav.Link className="ms-2">
                                    <Link
                                        className="navbar-link"
                                        to="/customer/book-car"
                                    >
                                        Book Car
                                    </Link>
                                </Nav.Link>
                                <Nav.Link className="ms-2">
                                    <Link
                                        className="navbar-link"
                                        to="/customer/book-driver"
                                    >
                                        Book Driver
                                    </Link>
                                </Nav.Link>
                                <Nav.Link
                                    className="navbar-link mx-2"
                                    onClick={logout}
                                >
                                    Log Out
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            {location.pathname == "/customer/my-profile" && <MyProfile />}
            {location.pathname == "/customer/my-bookings" && <MyBookings />}
            {location.pathname == "/customer/book-car" && <BookCar />}
            {location.pathname == "/customer/book-driver" && <BookDriver />}
        </>
    );
};

export default CustomerPanel;
