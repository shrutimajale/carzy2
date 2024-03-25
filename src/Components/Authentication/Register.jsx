import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Register({ role }) {
  const [goodAlert, setGoodAlert] = useState(false);
  const [validationMsg, setValidationMsg] = useState("");
  const [badAlert, setBadAlert] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const notValidated = () => {
    // all the fields need to be filled
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.password ||
      !formData.passwordConf ||
      !formData.passwordConf
    ) {
      setValidationMsg("All the Fields are Mandatory");
      setTimeout(() => {
        setValidationMsg("");
      }, 4000);
      return true;
    }

    // if email is not valid
    if (
      formData.email.search(
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
    if (formData.phone.length > 12 || formData.phone.length < 10) {
      //password and password confirm need to be same
      setValidationMsg("Please confirm your password");
      setTimeout(() => {
        setValidationMsg("");
      }, 4000);
      return true;
    }

    if (formData.password != formData.passwordConf) {
      //password and password confirm need to be same
      setValidationMsg("Please confirm your password");
      setTimeout(() => {
        setValidationMsg("");
      }, 4000);
      return true;
    }

    return false;
  };

  const createAccount = async () => {
    if (notValidated()) return;
    console.log(formData);
    console.log(role);
    await fetch(`http://localhost:8080/api/${role}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    })
      .then((data) => {
        return data;
      })
      .then((data) => {
        console.log(data);
        if (data.status == 200) {
          setGoodAlert(true);
          setTimeout(() => {
            setGoodAlert(false);
          }, 4000);
        } else {
          setBadAlert(true);
          setTimeout(() => {
            setBadAlert(false);
          }, 4000);
        }

        console.log(alert);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form className="text-start p-3">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter Your Name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          required
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="number"
          placeholder="Enter Mobile Number"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Create New Password"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Retype New Password</Form.Label>
        <Form.Control
          required
          name="passwordConf"
          value={formData.passwordConf}
          onChange={handleChange}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Group>
      <center>
        <Button onClick={createAccount} variant="dark" className="my-2">
          Create My Account
        </Button>
      </center>
      {goodAlert && (
        <Alert
          variant="success"
          onClose={() => {
            setGoodAlert(false);
          }}
          dismissible
        >
          <Alert.Heading>Account Created Successfully !</Alert.Heading>
          <p>Now, You can proceed login to continue.</p>
        </Alert>
      )}
      {validationMsg && (
        <p className="text-center" style={{ color: "red" }}>
          {validationMsg}
        </p>
      )}
      <br />
      {badAlert && (
        <Alert
          variant="danger"
          onClose={() => {
            setBadAlert(false);
          }}
          dismissible
        >
          <Alert.Heading>
            Account already exists with given email !
          </Alert.Heading>
          <p>Cannot create the account.</p>
        </Alert>
      )}
    </Form>
  );
}

export default Register;
