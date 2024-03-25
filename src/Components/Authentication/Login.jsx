import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

function Login({ role }) {
  const [badAlert, setBadAlert] = useState(false);
  const [validationMsg, setValidationMsg] = useState("");

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: role,
  });

  const notValidated = () => {
    // all the fields need to be filled
    if (!formData.email || !formData.password) {
      setValidationMsg("Both the Fields are Mandatory");
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

    return false;
  };

  const login = async () => {
    if (notValidated()) return;
    setFormData({ ...formData, role: role });
    var requestData = formData;
    requestData.role = role;
    // console.log(requestData);
    // console.log(role);
    await fetch(`http://localhost:8080/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(requestData),
    })
      .then((data) => {
        if (!data.ok) {
          setBadAlert(true);
          setTimeout(() => {
            setBadAlert(false);
          }, 4000);
        }
        return data.json();
      })
      .then((data) => {
        // Redirect
        if (data.userid != undefined) {
          localStorage.setItem("userid", data.userid);
          localStorage.setItem("token", data.token);
          localStorage.setItem("role", role);
          if (role === "driver") {
            navigate("/driver/my-profile");
          } else if (role === "customer") {
            navigate("/customer/my-profile");
          } else if (role === "carowner") {
            navigate("/car-owner/my-profile");
          }
        }
        console.log(data);
      });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  // console.log(formData);
  return (
    <Form className="text-start p-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text>We'll verify if the email is registered with us</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Enter Password"
        />
      </Form.Group>
      <center>
        <Button variant="dark" onClick={login} className="my-2">
          Log Me In
        </Button>
      </center>
      {validationMsg && (
        <p className="text-center" style={{ color: "red" }}>
          {validationMsg}
        </p>
      )}
      {badAlert && (
        <Alert
          variant="danger"
          onClose={() => {
            setBadAlert(false);
          }}
          dismissible
        >
          <Alert.Heading>Login Failed!</Alert.Heading>
          <p>Incorrect credentials.</p>
        </Alert>
      )}
    </Form>
  );
}

export default Login;
