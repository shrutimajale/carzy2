import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function DriverProfile() {
  const [validationMsg, setValidationMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    address: "",
    status: "",
    rate: 0,
    experience: 0,
    drivingLicence: "",
    age: 0,
    city: "",
    state: "",
    country: "",
  });

  const notValidated = () => {
    if (formData.rate == "0" || !formData.rate) {
      // all the fields need to be filled
      setValidationMsg("Rate is Mandatory");
      setTimeout(() => {
        setValidationMsg("");
      }, 4000);
      return true;
    }
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.description ||
      !formData.address ||
      !formData.experience ||
      !formData.age ||
      !formData.city ||
      !formData.state ||
      !formData.country
    ) {
      // all the fields need to be filled
      setValidationMsg("All Fields are Mandatory");
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
      setValidationMsg("Please provide a valid phone number");
      setTimeout(() => {
        setValidationMsg("");
      }, 4000);
      return true;
    }

    return false;
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const naviagte = useNavigate();
  if (
    localStorage.getItem("role") != "driver" ||
    localStorage.getItem("token") == ""
  ) {
    naviagte("/auth");
  }

  const fetchDriver = async () => {
    let userid = localStorage.getItem("userid");
    let token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:8080/api/driver/${userid}`,
        {
          headers: {
            token: token,
            userid: userid,
          },
        }
      );
      let data = response.data;
      for (const key in data) {
        if (data.hasOwnProperty(key) && data[key] == null) {
          data[key] = "";
        }
      }
      setFormData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDriver();
  }, []);

  const updateDriver = async () => {
    console.log(formData);
    if (notValidated()) return;
    let userid = localStorage.getItem("userid");
    let token = localStorage.getItem("token");
    let requestData = {};
    for (const key in formData) {
      if (formData[key] != "" && key != "password") {
        requestData[key] = formData[key];
      }
    }
    console.log(requestData);
    try {
      const response = await axios.patch(
        `http://localhost:8080/api/driver/${userid}`,
        requestData,
        {
          headers: {
            token: token,
            userid: userid,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Card className="container" style={{ width: "40rem", maxWidth: "97%" }}>
        <h5 className="my-3">Profile</h5>

        <Form className="text-start p-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>About Me:</Form.Label>
            <Form.Control
              name="description"
              value={formData.description}
              onChange={handleChange}
              aria-label="With textarea"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address:</Form.Label>
            <Form.Control
              name="address"
              value={formData.address}
              onChange={handleChange}
              aria-label="With textarea"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>My Status:</Form.Label>
            <Form.Select
              aria-label="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Available" defaultChecked>
                Available
              </option>
              <option value="Not Available">Not Available</option>
            </Form.Select>
            <Form.Text style={{ color: "blue", marginBottom: "1rem" }}>
              <i>Available status will let you, be visible for work</i>
            </Form.Text>
            <br />
            <br />
          </Form.Group>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Hourly Rate</Form.Label>
              <Form.Control
                type="number"
                style={{ width: "7rem" }}
                name="rate"
                value={formData.rate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Years of Experience(in Driving)</Form.Label>
              <Form.Control
                type="number"
                style={{ width: "7rem" }}
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          {/* Age and Driving License Number */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                style={{ width: "7rem" }}
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Driving License Number</Form.Label>
              <Form.Control
                type="text"
                style={{ width: "18rem" }}
                name="drivingLicence"
                value={formData.drivingLicence}
                onChange={handleChange}
              />
            </Form.Group>
          </div>

          <p className="text-center mt-5">Location Details</p>
          <hr style={{ maxWidth: "95%" }} />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              maxWidth: "90%",
            }}
          >
            {/* Location Details */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country Name</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                style={{ width: "11rem" }}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>State Name</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                style={{ width: "11rem" }}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City Name</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                style={{ width: "11rem" }}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          {validationMsg && (
            <p className="text-center" style={{ color: "red" }}>
              {validationMsg}
            </p>
          )}
          <center>
            <Button variant="success" onClick={updateDriver} className="my-2">
              Update Profile
            </Button>
          </center>
        </Form>
      </Card>
    </>
  );
}

export default DriverProfile;
