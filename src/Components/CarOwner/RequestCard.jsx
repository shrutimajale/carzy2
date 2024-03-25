import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

function RequestCard(props) {
  const [carData, setCarData] = useState({});
  const [customer, setCustomer] = useState({});
  const [approveBtnVisibility, setApproveBtnVisibility] = useState(true);
  const [status, setStatus] = useState("Approve");

  // const fetchCustomer = async () => {
  //   delete customer.password;
  //   const userid = localStorage.getItem("userid");
  //   const token = localStorage.getItem("token");
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8080/api/customer/${customerId}`,
  //       {
  //         headers: {
  //           token,
  //           userid,
  //         },
  //       }
  //     );
  //     setCustomer(response.data);
  //     console.log("i am customer " + customer);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // const getCar = async () => {
  //   let token = localStorage.getItem("token");
  //   let userid = localStorage.getItem("userid");

  //   await fetch(`http://localhost:8080/api/car/get/${carId}`, {
  //     method: "GET",

  //     headers: {
  //       "Content-Type": "application/json",
  //       token: token,
  //       userid: userid,
  //     },
  //   })
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((data) => {
  //       console.log("i am car" + data);
  //       setCarData(data.car);
  //     });
  // };

  const approveRequest = async () => {
    const url = "http://localhost:8080/api/car/acceptcar";
    const requestBody = {
      requestid: props.req_id,
    };

    try {
      const response = await axios.post(url, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setApproveBtnVisibility(true);
      setStatus("Approved");
      console.log(response);
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  // useEffect(() => {
  //   fetchCustomer();
  // }, [customerId]);

  // useEffect(() => {
  //   getCar();
  // }, [carId]);

  const handleApproveBtn = () => {
    const sure = window.confirm("Are You Sure You want to Approve ?");
    if (sure) {
      approveRequest();
      window.location.reload();
    }
  };
  return (
    <Card className="container my-4" style={{ textAlign: "start" }}>
      <Card.Body>
        {props.status === "Approved" ? (
          <div>
            <p>
              Accepted Deal with {customer?.name} for the car {carData?.name}
            </p>
            From <b>{props.starttime}</b> To <b>{props.endtime}</b>
          </div>
        ) : (
          <div>
            <i style={{ color: "blue" }}>{props.customername}</i>&nbsp;has
            requested for the car:{" "}
            <i>
              <b>{props.carname}</b>&nbsp;{" "}
            </i>
            From <b>{props.starttime}</b> To <b>{props.endtime}</b>
            <br />
            <div className="flex">
              <Button
                onClick={handleApproveBtn}
                variant="success"
                className="mr-3 mt-3"
                disabled={!approveBtnVisibility}
              >
                ✔ {status}
              </Button>{" "}
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default RequestCard;
