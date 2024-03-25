import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import DriverModal from "./DriverModal";

function DriverCard({
  address,
  age,
  city,
  country,
  description,
  drivinglicence,
  email,
  experience,
  name,
  phone,
  rate,
  state,
  status,
  id,
}) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div id={id}>
      <Card className="container my-2" style={{ height: "fitContent" }}>
        <Card.Body style={{ textAlign: "start" }}>
          <Card.Title style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {name}
          </Card.Title>
          <Card.Text>
            Hourly Rate: <b>{rate} ₹</b>
          </Card.Text>
          <Card.Text>
            Experience: <b>{experience} ₹</b>
          </Card.Text>
          <Card.Text>
            City: <b>{city}</b> | State: <b>{state}</b> | Country:{" "}
            <b>{country}</b>
          </Card.Text>
          <Badge
            className="p-2"
            bg={
              status === "available" || status === "Available"
                ? "success"
                : "secondary"
            }
          >
            {status}
          </Badge>
          {/* <Badge bg="success">Not yet rented</Badge> */}

          <DriverModal
            show={modalShow}
            id={id}
            address={address}
            age={age}
            city={city}
            country={country}
            description={description}
            drivinglicence={drivinglicence}
            email={email}
            experience={experience}
            name={name}
            phone={phone}
            rate={rate}
            state={state}
            status={status}
            onHide={() => setModalShow(false)}
          />
          {(status == "available" ||
            status === "Available" ||
            status == null) && (
            <Button
              variant="info"
              className="btn-sm m-2"
              onClick={() => setModalShow(true)}
            >
              Book Driver &#8599;
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default DriverCard;
