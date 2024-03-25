import React, { useState, useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import "../../index.css";
import axios from "axios";

const BookingDetails = ({ ...props }) => {
  const [carData, setCarData] = useState({});
  const [ownerData, setOwnerData] = useState({});

  const [formData, setFormData] = useState({
    startDate: JSON.stringify(new Date().toJSON()).substring(1, 17),
    endDate: JSON.stringify(new Date().toJSON()).substring(1, 17),
    hours: 0,
  });

  const handleStartDate = (event) => {
    console.log(event.target.value);
    setFormData({ ...formData, startDate: event.target.value });
  };
  const handleEndDate = (event) => {
    setFormData({ ...formData, endDate: event.target.value });
  };

  const validateDates = async () => {
    let sDate = new Date(formData.startDate).getTime();
    let eDate = new Date(formData.endDate).getTime();
    if (sDate < new Date().getTime()) {
      alert(
        "Please select a date and time which at least 2 mins late from current time"
      );
    } else if (sDate >= eDate) {
      alert("End time should be more than start time");
    } else {
      let hours = (eDate - sDate) / 1000 / 60 / 60;
      if (hours < 1) {
        alert("Book for at least 1 hour");
        return;
      }
      let requestData = {};
      requestData["customerid"] = localStorage.getItem("userid");
      requestData["carid"] = props.carId;
      requestData["starttime"] = formData.startDate;
      requestData["endtime"] = formData.endDate;
      console.log("req data", requestData);

      alert(
        `Car booking request has been generated. Please wait for the car owner to accept your request: Car requested for total ${hours} hours`
      );

      const userid = localStorage.getItem("userid");
      const token = localStorage.getItem("token");
      // post car
      try {
        const response = await axios.post(
          "http://localhost:8080/api/car/requestcar",
          requestData,
          {
            headers: {
              token: token,
              userid: userid,
            },
          }
        );

        console.log(response.data); // Process the response as needed
        alert(
          `Your Booking Request Has been sent to the Car Owner Added Successfully! Wait for them to approve. Booking request for total ${hours}.`
        );

        return response.data;
      } catch (error) {
        console.error("Error uploading car:", error);
        throw error;
      }
    }
  };

  const getOwnerData = async () => {
    let token = localStorage.getItem("token");
    let userid = localStorage.getItem("userid");
    await fetch(`http://localhost:8080/api/carowner/${carData.coId}`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        token: token,
        userid: userid,
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setOwnerData(data);
        console.log(data);
      });
  };

  useEffect(() => {
    if (props.coId != undefined) getOwnerData();
  }, [carData]);

  return (
    <>
      <div
        className="container d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center"
        style={{ marginTop: "5rem" }}
      >
        <div>
          <Image
            className="mx-4"
            style={{ objectFit: "contain", width: "20rem" }}
            src={props.imageSrc}
            rounded
          />
        </div>
        <div className="mx-4">
          <div className="my-2">
            <span>Car name: </span>
            <span>{props.name}</span>
          </div>
          <div className="my-2">
            <span>City: </span>
            <span>{props.city}</span>
          </div>
          <div className="my-2">
            <span>State: </span>
            <span>{props.state}</span>
          </div>
          <div className="my-2">
            <span>Country: </span>
            <span>{props.country}</span>
          </div>
          <div className="my-2">
            <span>Hourly Rate: </span>
            <span>{props.rate}</span>
          </div>
        </div>
      </div>
      <center>
        <hr width="70%" />
      </center>
      <div className="container d-flex justify-content-center flex-wrap">
        <div className="mx-2 mt-5">
          <p>Select Start Time and Date:</p>
          <input
            value={formData.startDate}
            onChange={handleStartDate}
            type="datetime-local"
          />
        </div>
        <div className="mx-2 mt-5">
          <p>Select End Time and Date:</p>
          <input
            value={formData.endDate}
            onChange={handleEndDate}
            type="datetime-local"
          />
        </div>
      </div>
      <Button variant="success" className="mt-5" onClick={validateDates}>
        Book Car
      </Button>
    </>
  );
};

export default BookingDetails;
