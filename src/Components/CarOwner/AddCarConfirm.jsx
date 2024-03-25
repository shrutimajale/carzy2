import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function AddCarConfirm() {
  return (
    <Card
      className="container"
      style={{ marginBottom: "2rem", maxWidth: "95%" }}
    >
      <Card.Body>
        <h5 className="text-center">Confirm New Car Details</h5>
        <div className="container text-start">
          <b>Car Name:</b>
          <span> Innova S.Class</span>
          <br />
          <b>Car Description:</b>
          <span>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            tenetur quos iste ipsam quis sunt iusto temporibus optio, corporis
            dolores.
          </span>
          <br />
          <b>Hourly Rate:</b>
          <span> 520 Rupees</span>
          <br />
          <b>Country:</b>
          <span> India</span>
          <br />
          <b>State:</b>
          <span> Maharashtra</span>
          <br />
          <b>City:</b>
          <span> Pune</span>
          <br />
          <b>Area:</b>
          <span> Pimpri Chinchwad</span>
        </div>
        <Button
          variant="success"
          className="my-4"
          style={{ maxWidth: "20rem", textAlign: "center" }}
        >
          + Confirm and Add Car
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default AddCarConfirm;
