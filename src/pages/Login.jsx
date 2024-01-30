import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Header from "../components/MainComponents/Header";
import Footer from "../components/MainComponents/Footer";
import toast from "react-hot-toast";
const notify_login = () => toast.success("Successfully Logged in!");
const notify_fail = () => toast.error("Login with correct credentials!");
function Login() {
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (validateInput()) {
      setPassword("");
      setUserName("");
    }
  }

  function validateInput() {
    const uname = document.querySelector("#uname");
    const pswd = document.querySelector("#pswd");

    let success = true;

    if (userName === "") {
      success = false;
      setError(uname, "Username is required to Login");
    } else {
      setSuccess(uname);
    }

    if (password === "") {
      success = false;
      setError(pswd, "Password is required to Login");
    } else if (password.length < 8) {
      success = false;
      setError(pswd, "Password must be atleast 8 characters long");
    } else {
      setSuccess(pswd);
    }
    const savedUsername = localStorage.getItem("uname");
    const savedPassword = localStorage.getItem("pswd");

    if (success && savedUsername === userName && savedPassword === password) {
      notify_login();
      localStorage.setItem("uname1", userName);
      localStorage.setItem("pswd1", password);
      navigate("/");
    } else {
      notify_fail();
    }
  }

  function setError(element, message) {
    const inputGrp = element.parentElement;
    // searches for .error only in that div
    const errorElement = inputGrp.querySelector(".error");
    errorElement.innerText = message;
    errorElement.style.color = "red";
  }

  function setSuccess(element) {
    const inputGrp = element.parentElement;
    // searches for .error only in that div
    const errorElement = inputGrp.querySelector(".error");
    errorElement.innerText = "";
    errorElement.style.color = "green";
  }

  return (
    <>
      <Header />
      <Container className="form-login">
        <p className="text-center font-bold">Log in to your E-Learn Account</p>
        <Form onSubmit={handleSubmit}>
          {/*  <Form.Group>
            <button className="login-social">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              </span>
              <span>Login through Google</span>
            </button>
          </Form.Group> */}
          <Form.Group>
            <Form.Label className="mb-3">
              {" "}
              <b>UserName</b>
            </Form.Label>
            <Form.Control
              value={userName}
              id="uname"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter Username"
              className="form-input"
            ></Form.Control>
            <div className="error"></div>
          </Form.Group>

          <Form.Group>
            <Form.Label className="mb-3 mt-3">
              {" "}
              <b>Password</b>
            </Form.Label>
            <Form.Control
              value={password}
              id="pswd"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="form-input"
            ></Form.Control>
            <div className="error"></div>
          </Form.Group>

          <div className="center">
            <button className="btn1">Sign In</button>
          </div>
        </Form>

        <p className="text-center mt-3">
          New User ?{" "}
          <Link to="/signup" className="small">
            Click here to SignUp
          </Link>
        </p>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
