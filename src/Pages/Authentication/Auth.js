import "../../index.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
// Component Imports
import Login from "../../Components/Authentication/Login";
import Register from "../../Components/Authentication/Register";
import { useState } from "react";

function Auth() {
  const [role, setRole] = useState("customer");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div className="mb-3">
      <Image
        src="Images/carBg.jpg"
        fluid
        style={{
          opacity: "0.2",
          zIndex: "-1",
          width: "100%",
          height: "150vh",
          objectFit: "cover",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
      <div
        className="d-flex flex-column align-items-center"
        style={{ margin: "auto" }}
      >
        <div className="text-center m-2">
          <i>Continue as..</i>
        </div>
        <div className="mx-1 align-self-center d-flex flex-wrap my-2">
          <Stack direction="horizontal" gap={3} className="m-1">
            <Form.Check
              id="customerRadio"
              type="radio"
              aria-label="radio 1"
              name="role"
              value="customer"
              onChange={handleChange}
              defaultChecked
            />
            <Form.Check.Label
              className={role == "customer" ? "selectedLoginLabel" : ""}
              htmlFor="customerRadio"
            >
              Customer
            </Form.Check.Label>
          </Stack>
          <Stack direction="horizontal" gap={3} className="m-1">
            <Form.Check
              id="carownerRadio"
              type="radio"
              aria-label="radio 1"
              name="role"
              value="carowner"
              onChange={handleChange}
            />
            <Form.Check.Label
              className={role == "carowner" ? "selectedLoginLabel" : ""}
              htmlFor="carownerRadio"
            >
              Car Owner
            </Form.Check.Label>
          </Stack>
          <Stack direction="horizontal" gap={3} className="m-1">
            <Form.Check
              id="driverRadio"
              type="radio"
              aria-label="radio 1"
              name="role"
              value="driver"
              onChange={handleChange}
            />
            <Form.Check.Label
              className={role == "driver" ? "selectedLoginLabel" : ""}
              htmlFor="driverRadio"
            >
              Driver
            </Form.Check.Label>
          </Stack>
        </div>
      </div>
      <Card
        style={{
          width: "30rem",
          maxWidth: "95%",
          height: "auto",
          marginTop: "3rem",
        }}
        className="container"
      >
        <Tabs
          defaultActiveKey="login"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="newAcc" title=" Create Account">
            <Register role={role} />
          </Tab>
          <Tab eventKey="login" title="Login">
            <Login role={role} />
          </Tab>
        </Tabs>
      </Card>
    </div>
  );
}

export default Auth;
