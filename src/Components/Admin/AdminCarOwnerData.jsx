import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminCustomerData() {
    const [carOwners, setCarOwners] = useState(null);

    const fetchCarOwners = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/carowner', {
                headers: {
                    'token': '1693086019663a6KlYqXbkDEYQS8YJsOb',
                    'userid': '22bae292-0b4b-4b4e-98db-c5820516f1ba'
                }
            });
            setCarOwners(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchCarOwners();
    }, []);

    return (
        <>
            <p className="mt-4">Car owners</p>
            <Table striped bordered hover className="container mt2">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        {/* <th>Password</th>
                        <th>Transactions</th>
                        <th>Update</th> */}
                    </tr>
                </thead>
                <tbody>

                    {/* customer record  */}

                    {
                        carOwners && carOwners.map((owner, id) => {
                            return(

                            <tr>
                                <td>{id+1}</td>
                                <td>
                                    <input type="text" value={owner.name} id="" />
                                </td>
                                <td>
                                    {" "}
                                    <input
                                        type="email"
                                        value={owner.email}
                                        id=""
                                    />
                                </td>
                                <td>
                                    {" "}
                                    <input type="tel" value={owner.phone} id="" />
                                </td>
                                {/* <td>
                                    <input type="text" value="meowmeow" id="" />
                                </td>
                                <td>
                                    <a href="/customer/transaction">view</a>
                                </td>
                                <td>
                                    <Button>Update</Button>
                                </td> */}
                            </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </>
    );
}

export default AdminCustomerData;
