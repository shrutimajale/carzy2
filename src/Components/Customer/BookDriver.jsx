import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import DriverCard from "../DriverCard";
import axios from "axios";

function BookDriver() {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [drivers, setDrivers] = useState([]);
  const [cars, setCars] = useState([]);
  const [city, setCity] = useState("");

  const [carFilter, setCarFilter] = useState({});

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const filterDrivers = async () => {
    if (!city) return;
    const userid = localStorage.getItem("userid");
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:8080/api/driver/city/${city}`,
        {
          headers: {
            token: token,
            userid: userid,
          },
        }
      );

      console.log(response.data);
      setDrivers(response.data);
    } catch (error) {
      console.error("Error getting drivers:", error);
      setLoading(false);
      throw error;
    }
  };

  const getAllDrivers = async () => {
    const userid = localStorage.getItem("userid");
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:8080/api/driver`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token,
        userid,
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setDrivers(data);
        console.log(drivers);
      });
  };

  useEffect(() => {
    getAllDrivers();
  }, []);

  return (
    <>
      <div className="container d-flex justify-content-center">
        <Form
          className="mt-5"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustom03">
              <Form.Label>Search By City</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="city"
                value={city}
                type="text"
                placeholder="City"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button onClick={filterDrivers} variant="success">
            Search Drivers
          </Button>
        </Form>
      </div>
      <div className="container">
        <center>
          <hr width="70%" />
          <p>Search Results:</p>
        </center>
        <div className="container">
          {drivers.length ? (
            <></>
          ) : (
            <p className="text-danger">
              {" "}
              Oops ! No Drivers Found from the selected location
            </p>
          )}
          {drivers?.map((driver) => {
            return (
              <>
                {driver.status != "Booked" && (
                  <DriverCard
                    address={driver.address}
                    age={driver.age}
                    city={driver.city}
                    country={driver.country}
                    description={driver.description}
                    drivinglicence={driver.drivinglicence}
                    email={driver.email}
                    experience={driver.experience}
                    name={driver.name}
                    phone={driver.phone}
                    rate={driver.rate}
                    state={driver.state}
                    status={driver.status ? driver.status : "Available"}
                    id={driver.id}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default BookDriver;
