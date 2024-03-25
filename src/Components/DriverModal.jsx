import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";

function MyModal(props) {
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
            return false;
        } else if (sDate >= eDate) {
            alert("End time should be more than start time");
            return false;
        } else {
            let hours = (eDate - sDate) / 1000 / 60 / 60;
            if (hours < 1) {
                alert("Book for at least 1 hour");
                return false;
            }
            let requestData = {};
            requestData["customerid"] = localStorage.getItem("userid");
            requestData["carid"] = props.carId;
            requestData["starttime"] = formData.startDate;
            requestData["endtime"] = formData.endDate;
            console.log("req data", requestData);
            return true;
        }
    };

    const BookDriver = async () => {
        if (! await validateDates()){
          return;
        }
        const isConfirm = window.confirm(
            "Are you sure you want to Book the Driver"
        );
        if (!isConfirm) return;
        const userid = localStorage.getItem("userid");
        const token = localStorage.getItem("token");
        // book driver
        try {
            const response = await axios.post(
                `http://localhost:8080/api/driver/requestdriver`,
                {
                    carId: "",
                    custId: userid,
                    driverId: props.id,
                    starttime: formData.startDate,
                    endtime: formData.endDate
                },
                {
                    headers: {
                        token: token,
                        userid: userid,
                    },
                }
            );

            console.log(response.data); // Process the response as needed
            alert(
                "Request Sent to Driver Named : " +
                    props.name +
                    ". Please wait while your request get approved by driver"
            );
            return response.data;
        } catch (error) {
            console.error("Error Booking Driver:", error);
            throw error;
        }
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Book Driver
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col">
                        <ul>
                            <li className="mb-2">Name: {props.name}</li>
                            <li className="mb-2">Phone: {props.phone}</li>
                            <li className="mb-2">State: {props.state}</li>
                            <li className="mb-2">Age: {props.age}</li>
                            <li className="mb-2">
                                Driving Licence: {props.drivinglicence}
                            </li>
                            <li className="mb-2">
                                Rate: {props.rate} Rs.Per Hour
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li className="mb-2">Email: {props.email}</li>
                            <li className="mb-2">City: {props.city}</li>
                            <li className="mb-2">Country: {props.country}</li>
                            <li className="mb-2">
                                Description: {props.description}
                            </li>
                            <li className="mb-2">
                                Experience: {props.experience}
                            </li>
                            <li className="mb-2">Status: {props.status}</li>
                        </ul>
                    </div>
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
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={BookDriver} variant="success">
                    Book Driver
                </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyModal;
