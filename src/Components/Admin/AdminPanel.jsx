import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AdminCarOwnerData from "./AdminCarOwnerData";
import AdminCustomerData from "./AdminCustomerData";
import AdminDriverData from "./AdminDriverData";
import AdminLogin from "./AdminLogin";

const AdminPanel = () => {
  var location = useLocation();
  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.clear();
    navigate("/")
  }

  return (
    <>
      <Navbar key="xl" expand="xl" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Carzy | Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                Carzy | Admin
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  <Link className="navbar-link" to="/admin/customers">
                    Customers
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="navbar-link" to="/admin/car-owners">
                    Car Owners
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="navbar-link" to="/admin/drivers">
                    Drivers
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
      {location.pathname === "/admin/car-owners" && <AdminCarOwnerData />}
      {location.pathname === "/admin/customers" && <AdminCustomerData />}
      {location.pathname === "/admin/drivers" && <AdminDriverData />}
    </>
  );
};

export default AdminPanel;
