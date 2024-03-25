import React, { useEffect } from "react";
import RequestCard from "./RequestCard";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";

function Requests() {
  const [requestDetails, setRequestDetails] = useState([]);

  const fetchRequestDetails = async () => {
    const userid = localStorage.getItem("userid");
    const token = localStorage.getItem("token");

    const setData = async (data) => {
      setRequestDetails(data);
      console.log(requestDetails);
    };
    try {
      const response = await axios.get(
        `http://localhost:8080/api/request/carowner/8fc4f8d0-0f4c-408c-a360-c9115fd92a19`,
        {
          headers: {
            token: token,
            userid: userid,
          },
        }
      );
      await setData(response.data);
      console.log("jai", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (requestDetails !== null) {
      // check if carOwners is not null before logging
      console.log(requestDetails);
    }
  }, [requestDetails]);

  useEffect(() => {
    fetchRequestDetails();
  }, []);
  return (
    <div>
      {requestDetails?.map((request) => {
        return (
          <RequestCard
            req_id={request.req_id}
            carname={request.carname}
            customername={request.customername}
            date={request.date}
            endtime={request.endtime}
            starttime={request.starttime}
            status={request.status}
          />
        );
      })}
    </div>
  );
}

export default Requests;
{
  /* id,
  carId,
  carOwnerId,
  customerId,
  startTime,
  endTime,
  date,
  requestStatus, */
}
