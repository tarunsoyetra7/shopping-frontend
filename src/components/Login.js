import React, { useState, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import backend_url from "./BackendProperty";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    useEffect(() => {
        document.title="Login"
    }, []);


    const [login , setLogin] = useState({
        userMobile : "",
        userName : "",
        userAddress : "",
        userType : ""
    });

    const handelSubmit = (e) => {
        console.log(login);
        checkUserLogin(login);
        e.preventDefault();
    }

    const checkUserLogin = (data) => {
        axios.post(`${backend_url}User/login` , data).then(
            (response) => {
                toast.success(
                    response.data,{
                        position: toast.POSITION.TOP_CENTER
                    }
                );
            },
            (error) => {
                toast.error(
                    error.data,{
                        position: toast.POSITION.TOP_CENTER
                    }
                );
            }
        )
    }

    return(
        <div style={{height:"477px",marginTop:"120px"}}>
            <ToastContainer />
            <h3 className="text-center" style={{marginTop:"20px"}}>Login Page</h3>
            <Container className="square border border-1 border-info rounded py-4 px-5" style={{width:"30%",margin:"20px auto 20px auto",backgroundColor:"#f5f5f5"}}>
            <Form onSubmit={handelSubmit}>
                <FormGroup>
                    <Label className="text-left" for="userName">Username</Label>
                    <Input type="text" id="userEmail" name="userEmail" placeholder="Enter user name here"
                    onChange={(e) => {
                        setLogin({ ...login , userEmail:e.target.value})
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" id="userPass" name="userPass" placeholder="Enter password here"
                    onChange={(e) => {
                        setLogin({ ...login , userPass:e.target.value})
                    }} />
                </FormGroup>
                <div className="text-center">
                <Button outline color="primary" type="submit">Submit</Button>{' '}
                <Button outline color="success" type="reset">Clear</Button>
                </div>
            </Form>
            </Container>
        </div>
    )
}

export default Login;