import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminDriverData() {

    const [driver, setDriver] = useState(null); // set initial value to null

    const fetchDriver = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/driver', {
                headers: {
                    'token': '1693086019663a6KlYqXbkDEYQS8YJsOb',
                    'userid': '22bae292-0b4b-4b4e-98db-c5820516f1ba'
                }
            });
            setDriver(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchDriver();
    }, []);
    return (
        <>

            <p className="mt-5">Drivers</p>
            <div style={{ overflow: "auto" }}>
                <Table
                    striped
                    bordered
                    hover
                    size="sm"
                    className="mx-2 my-3"
                    style={{}}
                >
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            {/* <th>Password</th>
                            <th>Transactions</th> */}
                            <th>Status</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Address</th>
                            <th>Description</th>
                            <th>Age</th>
                            <th>Exp.</th>
                            <th>Rate</th>
                            <th>Driving No.</th>
                            {/* <th>Update</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Driver record  */}

                        {
                            driver && driver.map((driver, id)=>{
                                return(
                                    <tr>
                            {/* user id */}
                            <td>{id+1}</td>
                            {/* Name */}
                            <td>
                                <input type="text" value={driver.name} id="" />
                            </td>
                            <td>
                                {" "}
                                <input
                                    type="email"
                                    value={driver.email}
                                    id=""
                                />
                            </td>
                            <td>
                                {" "}
                                <input type="tel" value={driver.phone} id="" />
                            </td>
                            {/* <td>
                                <input type="text" value="meowmeow" id="" />
                            </td>
                            <td>
                                <a href="/customer/transaction">view</a>
                            </td> */}
                            {/* status */}
                            <td>
                                {" "}
                                <Form.Select aria-label="status">
                                    <option value="1" defaultChecked>
                                        Available
                                    </option>
                                    <option value="2">Not Available</option>
                                </Form.Select>
                            </td>
                            {/* city */}
                            <td>
                                <input
                                    type="text"
                                    value={driver.city}
                                    style={{ width: "6rem" }}
                                    id=""
                                />
                            </td>
                            {/* State */}
                            <td>
                                <input
                                    type="text"
                                    value={driver.state}
                                    style={{ width: "6rem" }}
                                    id=""
                                />
                            </td>
                            {/* Country */}
                            <td>
                                <input
                                    type="text"
                                    value={driver.country}
                                    style={{ width: "6rem" }}
                                    id=""
                                />
                            </td>

                            {/* Address */}
                            <textarea
                                name=""
                                value={driver.address}
                                id=""
                                cols="30"
                            ></textarea>
                            <td>
                                {/* Description */}
                                {/* Address */}
                                <textarea
                                    name=""
                                    value={driver.description}
                                    id=""
                                    cols="30"
                                ></textarea>
                            </td>

                            {/* Age */}
                            <td>
                                <input
                                    type="number"
                                    value={driver.age}
                                    style={{ width: "4rem" }}
                                />
                            </td>

                            {/* Exp */}
                            <td>
                                <input
                                    type="number"
                                    value={driver.experience}
                                    style={{ width: "4rem" }}
                                />
                            </td>

                            {/* Rate Per Hour */}
                            <td>
                                <input
                                    type="number"
                                    value={driver.rate}
                                    style={{ width: "4rem" }}
                                />
                            </td>

                            {/* drivingLicence */}
                            <td>
                                <input
                                    type="number"
                                    value={driver.drivingLicence}
                                    style={{ width: "4rem" }}
                                />
                            </td>
                            {/* Update Button */}
                            {/* <td>
                                {" "}
                                <Button>Update</Button>
                            </td> */}
                        </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default AdminDriverData;
