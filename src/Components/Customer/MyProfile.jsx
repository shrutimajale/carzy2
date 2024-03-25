import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function MyProfile() {
  const [customer, setCustomer] = useState({});
  const [validationMsg, setValidationMsg] = useState("");

  const navigate = useNavigate();
  if (
    localStorage.getItem("role") != "customer" ||
    localStorage.getItem("token") == ""
  ) {
    navigate("/auth");
  }

  const notValidated = () => {
    // all the fields need to be filled
    if (!customer.name || !customer.phone || !customer.email) {
      setValidationMsg("All the Fields are Mandatory");
      setTimeout(() => {
        setValidationMsg("");
      }, 4000);
      return true;
    }

    // if email is not valid
    if (
      customer.email.search(
        /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-]+$/
      ) === -1
    ) {
      setValidationMsg("Please provide a valid Email");
      setTimeout(() => {
        setValidationMsg("");
      }, 4000);
      return true;
    }

    // phone number needs to be of max length 12 and min length 10
    if (customer.phone.length > 12 || customer.phone.length < 10) {
      //password and password confirm need to be same
      setValidationMsg("Please provide a valid phone number");
      setTimeout(() => {
        setValidationMsg("");
      }, 4000);
      return true;
    }

    return false;
  };

  const fetchCustomer = async () => {
    delete customer.password;
    const userid = localStorage.getItem("userid");
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:8080/api/customer/${userid}`,
        {
          headers: {
            token,
            userid,
          },
        }
      );
      setCustomer(response.data);
      console.log(customer);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateCustomer = async () => {
    if (notValidated()) return;
    delete customer.password;
    const userid = localStorage.getItem("userid");
    const token = localStorage.getItem("token");
    try {
      const response = await axios.patch(
        `http://localhost:8080/api/customer/${userid}`,
        customer,
        {
          headers: {
            token,
            userid,
          },
        }
      );
      console.log("request completed");
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (event) => {
    setCustomer({
      ...customer,
      [event.target.name]: event.target.value,
    });
    return;
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  return (
    <>
      {customer && (
        <Card className="container" style={{ width: "30rem" }}>
          <h5 className="my-3">Profile</h5>
          <Form className="text-start p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name: </Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={customer.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="email"
                type="email"
                value={customer.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                name="phone"
                type="number"
                onChange={handleChange}
                value={customer.phone}
              />
            </Form.Group>
            <center>
              <Button
                variant="success"
                onClick={updateCustomer}
                type="button"
                className="my-2"
              >
                Update Profile
              </Button>
            </center>
            {validationMsg && (
              <p className="text-center" style={{ color: "red" }}>
                {validationMsg}
              </p>
            )}
          </Form>
        </Card>
      )}
    </>
  );
}

export default MyProfile;
