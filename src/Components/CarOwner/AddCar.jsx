import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import React from "react";
function AddCar() {
  const [image, setImage] = useState("");

  const [carData, setCarData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleImgChange = (event) => {
    // console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  };

  const handleChange = (event) => {
    setCarData({ ...carData, [event.target.name]: event.target.value });
  };

  const addCar = async (event) => {
    setLoading(true);

    const formData = new FormData();
    const userid = localStorage.getItem("userid");
    const token = localStorage.getItem("token");
    formData.append("image", image);
    formData.append("name", carData.name);
    formData.append("rate", carData.rate);
    formData.append("coId", userid);
    formData.append("city", carData.city);
    formData.append("area", carData.area);
    formData.append("country", carData.country);
    formData.append("state", carData.state);
    formData.append("address", "userid");
    formData.append("description", carData.description);

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    // post car
    try {
      const response = await axios.post(
        "http://localhost:8080/api/car",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data; boundary=<calculated when request is sent>",
            token: token,
            userid: userid,
          },
        }
      );

      console.log(response.data); // Process the response as needed
      setLoading(false);
      alert("New Car Added Successfully!");
      setCarData({
        name: "",
        rate: 0,
        city: "",
        country: "",
        state: "",
        area: "",
        address: "",
        image: "",
        description: "",
      });

      return response.data;
    } catch (error) {
      console.error("Error uploading car:", error);
      setLoading(false);
      throw error;
    }
  };

  return (
    <div
      className="container p-3 mb-4"
      style={{ width: "35rem", maxWidth: "96%" }}
    >
      <h4 className="text-center">Add New Car</h4>
      <div
        className="container"
        style={{ width: "30rem", display: "flex", flexDirection: "column" }}
      >
        <div className="container">Enter Details</div>
        <Form className="text-start">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Car Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={carData.name}
              name="name"
              type="text"
              placeholder="Eg.Inova S. Class"
              style={{ maxWidth: "90%" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Car Description</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={carData.description}
              name="description"
              as="textarea"
              style={{ maxWidth: "90%" }}
              placeholder="describe your car..."
              rows={3}
            />
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
                onChange={handleChange}
                value={carData.rate}
                name="rate"
                type="number"
                style={{ width: "7rem" }}
                placeholder="eg.500"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Please Choose Car Image</Form.Label>
              <Form.Control
                name="image"
                onChange={handleImgChange}
                type="file"
                accept=".jpg,.png,.jpeg"
                style={{ width: "20rem", maxWidth: "70%" }}
                placeholder="eg.500"
              />
            </Form.Group>
          </div>
          {/* Location */}
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Country Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={carData.country}
                name="country"
                type="text"
                placeholder="Eg.India"
                style={{ width: "11rem" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter State Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={carData.state}
                name="state"
                type="text"
                placeholder="Eg.Maharashtra"
                style={{ width: "11rem" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter City Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={carData.city}
                name="city"
                type="text"
                placeholder="Eg.Pune"
                style={{ width: "11rem" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Area Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={carData.area}
                name="area"
                type="text"
                placeholder="Eg.Pimpri Chinchwad"
                style={{ width: "13rem" }}
              />
            </Form.Group>
            <Button
              variant="success"
              className="my-4"
              onClick={addCar}
              style={{ maxWidth: "10rem", textAlign: "center" }}
            >
              + Add Car
            </Button>{" "}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddCar;
