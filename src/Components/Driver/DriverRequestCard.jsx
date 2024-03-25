import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function DriverRequestCard({
    customerName,
    carName,
    place,
    date,
    startTime,
    endTime,
    status,
    id
}) {
    const acceptRequest = async () => {
        let token = localStorage.getItem("token");
        let userid = localStorage.getItem("userid");
        try {
            const response = await axios.post(
                "http://localhost:8080/api/driver/acceptdriver",
                { 'req_id': id },
                {headers: {
                  token: token,
                  userid: userid,
                }},
                );
                window.location.reload();
        } catch (err) {
            alert("Your status is not available! Update your status to start accepting requests.")
            console.log(err);
        }
    };
    console.log("jai",id)

    return (
        <Card className="container my-4" style={{ textAlign: "start" }}>
            <Card.Body>
                <span>{customerName} </span>
                has requested for a Drive to{" "}
                <i>
                    {" "}
                    <b>{place}</b>{" "}
                </i>
                <br />
                <b>Start Time:</b>
                {startTime}
                <br />
                <b>End Time:</b>
                {endTime}
                <br />
                <b>Hours:</b>4
                <br />
                {status != "Booked" && (
                    <div className="flex">
                        <Button
                            variant="success"
                            className="mr-3 mt-3"
                            onClick={acceptRequest}
                        >
                            ✔ Approve
                        </Button>{" "}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}

export default DriverRequestCard;
