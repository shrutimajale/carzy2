import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

function AdminDriverTransactions() {
  return (
    <Table striped bordered hover className="container my-5">
      <thead>
        <tr>
          <th>Request Id</th>
          <th>Driver Id</th>
          <th>Car Owner Id</th>
          <th>Request Status</th>
        </tr>
      </thead>
      <tbody>
        {/* customer record  */}
        <tr>
          <td>325</td>
          <td>35Ssd</td>
          <td>353414</td>
          <td>Available</td>
        </tr>
        <tr>
          <td>325</td>
          <td>35Ssd</td>
          <td>353414</td>
          <td>Available</td>
        </tr>
        <tr>
          <td>325</td>
          <td>35Ssd</td>
          <td>353414</td>
          <td>Available</td>
        </tr>
        <tr>
          <td>325</td>
          <td>35Ssd</td>
          <td>353414</td>
          <td>Available</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AdminDriverTransactions;
