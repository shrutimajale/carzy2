import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import MyCars from "./MyCars";
import MyProfile from "./MyProfile";
import Requests from "./Requests";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CarOwnerPanel = () => {
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
          <Navbar.Brand href="#">Carzy | Car Owner</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                Carzy | Car Owner
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-4">
                <Nav.Link className="ms-2">
                  <Link className="navbar-link" to="/car-owner/my-profile">
                    My Profile
                  </Link>
                </Nav.Link>
                <Nav.Link className="ms-2">
                  <Link className="navbar-link" to="/car-owner/my-cars">
                    My Cars
                  </Link>
                </Nav.Link>
                <Nav.Link className="ms-2">
                  <Link className="navbar-link" to="/car-owner/my-requests">
                    My Requests
                  </Link>
                </Nav.Link>
                <Nav.Link className="navbar-link" onClick={logout}>
                  Log Out
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {location.pathname === "/car-owner/my-profile" && <MyProfile />}
      {location.pathname === "/car-owner/my-cars" && <MyCars />}
      {location.pathname === "/car-owner/my-requests" && <Requests />}
    </>
  );
};

export default CarOwnerPanel;
