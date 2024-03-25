import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import MyModal from "./MyModal";

function CarCard({ id, name, rate, city, state, country, imgenc, status }) {
  const [modalShow, setModalShow] = useState(false);

  const imageSrc = `data:image/jpeg;base64,${imgenc}`;
  return (
    <div id={id}>
      <Card
        className="m-2"
        style={{
          width: "18rem",
          maxWidth: "95%",
          height: "fitContent",
        }}
      >
        <Card.Img
          variant="top"
          src={imageSrc}
          alt={name}
          style={{ maxHeight: "10rem", objectFit: "cover" }}
        />
        <Card.Body style={{ textAlign: "start" }}>
          <Card.Title style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {name}
          </Card.Title>
          <Card.Text>
            Hourly Rate: <b>{rate} ₹</b>
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

          <MyModal
            show={modalShow}
            carId={id}
            name={name}
            rate={rate}
            city={city}
            state={state}
            country={country}
            imgenc={imgenc}
            status={status}
            imageSrc={imageSrc}
            onHide={() => setModalShow(false)}
          />
          {localStorage.getItem("role") === "customer" &&
            (status == "available" || status === "Available") && (
              <Button
                variant="info"
                className="btn-sm mx-2"
                onClick={() => setModalShow(true)}
              >
                Book Car &#8599;
              </Button>
            )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CarCard;
