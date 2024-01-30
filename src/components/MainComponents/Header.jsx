import "../styles/header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Header({ searchQuery, setSearchQuery, showSearch }) {
  const savedUsername = localStorage.getItem("uname1");
  const savedPassword = localStorage.getItem("pswd1");

  function handleSignOut() {
    localStorage.setItem("uname1", "");
    localStorage.setItem("pswd1", "");
  }
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container fluid>
        <Link to="/" className="logo">
          E-Learn
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link href="/" className="logo">
              Ezy Learn
            </Nav.Link> 
          </Nav> */}
          <Form className={`d-flex ${showSearch ? "" : "hideSearch"}`}>
            <Form.Control
              type="search"
              placeholder="Search for courses"
              className="me-3"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="home-nav">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link className="home-nav">
              <Link to="/courses">Courses</Link>
            </Nav.Link>
            {/*   <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item className="link-title">
                <Link to="/courses">All Courses </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="link-title">
                <Link to="/tech-courses">Technical Courses</Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="link-title">
                <Link to="/non-tech-courses">Non-Technical Courses</Link>
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link>
              <Link to="/cart">
                <ShoppingCartIcon className="cart" />
              </Link>
            </Nav.Link> */}
            {savedUsername !== "" && savedPassword !== "" ? (
              <>
                <Link to="/profile">
                  <img
                    src="/images/default.png"
                    className="profile"
                    alt="Profile Images"
                  />
                </Link>
                <Nav.Link href="/">
                  <button className="login" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login">
                  <button className="login">Log In</button>
                </Nav.Link>

                <Nav.Link href="/signup">
                  <button className="signup">Sign Up</button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
