import React from "react";
import DriverRequestCard from "./DriverRequestCard";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Requests() {
  const [driverRequests, setDriverRequests] = useState(null);

  const fetchDriverRequests = async () => {
    const userid = localStorage.getItem("userid");
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        `http://localhost:8080/api/request/driver/${userid}`,
        {
          headers: {
            token: token,
            userid: userid,
          },
        }
      );
      response.data.sort((a, b)=>{
        console.log('astatus', a.status)
        console.log('bstatus', b.status)
        return b.status.localeCompare(a.status);
      })
      setDriverRequests(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (driverRequests !== null) {
      // check if carOwners is not null before logging
      console.log(driverRequests);
    }
  }, [driverRequests]);

  useEffect(() => {
    fetchDriverRequests();
  }, []);
  return (
    <div>
      {driverRequests &&
        driverRequests.map((request) => {
     
          return (
            <DriverRequestCard
              id={request.requestId}
              customerName={request.customerName}
              carName={request.carName}
              place={request.place}
              date={request.date}
              startTime={request.startTime}
              endTime={request.endTime}
              status={request.status}
            />
          );
        })}
    </div>
  );
}

export default Requests;
