import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BookingDetails from "./Customer/BookingDetails";

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Book Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BookingDetails
          carId={props.carId}
          name={props.name}
          rate={props.rate}
          city={props.city}
          state={props.state}
          country={props.country}
          imgenc={props.imgenc}
          status={props.status}
          imageSrc={props.imageSrc}
          coId={props.coId}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
