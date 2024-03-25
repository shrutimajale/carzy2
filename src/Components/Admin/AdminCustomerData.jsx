import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminCustomerData() {
    const [customer, setCustomer] = useState(null);

    const fetchCustomer = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/customer', {
                headers: {
                    'token': '1693086019663a6KlYqXbkDEYQS8YJsOb',
                    'userid': '22bae292-0b4b-4b4e-98db-c5820516f1ba'
                }
            });
            setCustomer(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchCustomer();
    }, []);
    return (
        <>
            <p className="mt-4">Customers</p>
            <Table striped bordered hover className="container mt2">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        {/* <th>Transactions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {/* customer record  */}
                    {
                        customer && customer.map((customer, id) => {
                            return (
                                <tr>
                                    <td>{id+1}</td>
                                    <td>
                                        <input type="text" value={customer.name} id="" />
                                    </td>
                                    <td>
                                        {" "}
                                        <input
                                            type="email"
                                            value={customer.email}
                                            id=""
                                        />
                                    </td>
                                    <td>
                                        {" "}
                                        <input type="tel" value={customer.phone} id="" />
                                    </td>
                                    {/* <td>
                                        <a href="/customer/transaction">view</a>
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
