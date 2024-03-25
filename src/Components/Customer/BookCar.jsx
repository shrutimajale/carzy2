import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CarCard from "../CarCard";
import axios from "axios";

function BookCar() {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [carFilter, setCarFilter] = useState({});

  const handleChange = (event) => {
    setCarFilter({ ...carFilter, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const filterCars = async () => {
    const userid = localStorage.getItem("userid");
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/car/filter",
        carFilter,
        {
          headers: {
            token: token,
            userid: userid,
          },
        }
      );

      console.log(response.data);
      setCars(response.data);
    } catch (error) {
      console.error("Error uploading car:", error);
      setLoading(false);
      throw error;
    }
  };

  const getAllCars = async () => {
    await fetch(`http://localhost:8080/api/car`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setCars(data);
        console.log(cars);
      });
  };

  useEffect(() => {
    getAllCars();
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
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="city"
                value={carFilter.city}
                type="text"
                placeholder="City"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="state"
                value={carFilter.state}
                type="text"
                placeholder="State"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Country" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid country.
              </Form.Control.Feedback>
            </Form.Group> */}
          </Row>
          <Button onClick={filterCars} variant="success">
            Search Cars
          </Button>
        </Form>
      </div>
      <div className="container">
        <center>
          <hr width="70%" />
          <p>Search Results:</p>
        </center>
        <div className="container d-flex justify-content-center flex-wrap">
          {cars.length ? (
            <></>
          ) : (
            <p className="text-danger"> Oops ! No Such Cars Found</p>
          )}
          {cars?.map((car) => {
            return (
              <>
                {car.car.status != "Booked" && (
                  <CarCard
                    id={car.car.id}
                    name={car.car.name}
                    rate={car.car.rate}
                    city={car.car.city}
                    state={car.car.state}
                    country={car.car.country}
                    imgenc={car.imageBase64}
                    status={car.car.status}
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

export default BookCar;
