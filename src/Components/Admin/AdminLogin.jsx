import { Alert, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react"; 
import { useNavigate } from "react-router";

function AdminLogin() {
    const navigate = useNavigate();
    const [badAlert, setBadAlert] = useState(false);
    const [validationMsg, setValidationMsg] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "admin",
    });
    
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };

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
        await fetch(`http://localhost:8080/login`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(formData),
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
                    localStorage.setItem("role", "admin");
                    navigate("/admin/customers");
                }
                console.log(data);
            });
    };
    return (
        <Card className="container" style={{ width: "30rem" }}>
            <h5 className="my-3">Login as Admin</h5>
            <Form className="text-start p-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Form.Text>
                        We'll verify if the email is registered as admin
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Form.Group>
                <center>
                    <Button variant="dark" className="my-2" onClick={login}>
                        Log In As Admin
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
        </Card>
    );
}

export default AdminLogin;
