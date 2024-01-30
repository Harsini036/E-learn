import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Header from "../components/MainComponents/Header";
import Footer from "../components/MainComponents/Footer";
import toast from "react-hot-toast";
const notify_signUp = () => toast.success("Successfully Signed Up!");
const notify_fail = () => toast.error("Sign Up failed. Please try again!");

function SingUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retype, setRetype] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (validateInput()) {
      setEmail("");
      setPassword("");
      setUserName("");
      setRetype("");
    }
  }

  function validateInput() {
    const uname = document.querySelector("#uname");
    const email1 = document.querySelector("#email1");
    const pswd = document.querySelector("#pswd");
    const pswd1 = document.querySelector("#pswd1");
    let success = true;
    let regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (userName === "") {
      success = false;
      setError(uname, "Username is required");
    } else {
      setSuccess(uname);
    }

    if (email === "") {
      success = false;
      setError(email1, "Email Id is required");
    } else {
      setSuccess(email1);
    }

    if (password === "") {
      success = false;
      setError(pswd, "Password is required");
    } else if (!regex.test(password)) {
      success = false;
      setError(
        pswd,
        "Password must be atleast 8 characters long, contain 1 Uppercase, 1 lowercase, 1 numeric and 1 special character!"
      );
    } else {
      setSuccess(pswd);
    }

    if (retype === "") {
      success = false;
      setError(pswd1, "Retyping password is required");
    } else if (password !== retype) {
      success = false;
      setError(pswd1, "Re-enter same password...");
    } else {
      setSuccess(pswd1);
    }

    if (success) {
      localStorage.setItem("uname", userName);
      localStorage.setItem("pswd", password);
      localStorage.setItem("uname1", userName);
      localStorage.setItem("pswd1", password);
      notify_signUp();
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
        <p className="text-center font-bold">Sign Up to E-Learn!</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>
              {" "}
              <b>UserName</b>
            </Form.Label>
            <Form.Control
              value={userName}
              id="uname"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Create Username"
              className="form-input"
            ></Form.Control>
            <div className="error"></div>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              {" "}
              <b>Email</b>
            </Form.Label>
            <Form.Control
              value={email}
              id="email1"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email-address"
              className="form-input"
            ></Form.Control>
            <div className="error"></div>
          </Form.Group>

          <Form.Group>
            <Form.Label>
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

          <Form.Group>
            <Form.Label>
              {" "}
              <b>Re-enter Password</b>
            </Form.Label>
            <Form.Control
              value={retype}
              id="pswd1"
              type="password"
              onChange={(e) => setRetype(e.target.value)}
              placeholder="Re-enter Password"
              className="form-input"
            ></Form.Control>
            <div className="error"></div>
          </Form.Group>
          <div className="center">
            <button className="btn1">Sign Up</button>
          </div>
        </Form>

        <p className="text-center mt-3">
          Alreay have an account ?{" "}
          <Link to="/signin">Click here to SignIn</Link>
        </p>
      </Container>
      <Footer />
    </>
  );
}

export default SingUp;
