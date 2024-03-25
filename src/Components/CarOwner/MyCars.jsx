import Card from "react-bootstrap/Card";
import CarCard from "../CarCard";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AddCar from "./AddCar";

function MyCars() {
  const [carData, setCarData] = useState([]);
  async function myCarsData() {
    const url = "http://localhost:8080/api/car";
    const headers = {
      userid: localStorage.getItem("userid"),
      token: localStorage.getItem("token"),
    };

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCarData(data);
        return data;
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
  useEffect(() => {
    myCarsData();
  }, []);

  return (
    <div className="d-flex mx-2 flex-wrap flex-lg-nowrap">
      <div
        className="container"
        style={{ maxWidth: "64rem", height: "50rem", overflow: "auto" }}
      >
        <h4 className="m-3">My Cars</h4>
        <Card.Body>
          <div className="d-flex flex-wrap">
            {carData.map((car, index) => (
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
            ))}
          </div>
        </Card.Body>
      </div>
      <AddCar />
    </div>
  );
}

export default MyCars;
