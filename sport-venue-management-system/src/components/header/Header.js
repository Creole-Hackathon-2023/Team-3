import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/" className="nav-text">
          SVMS
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Test</Nav.Link>
        </Nav>
        <Nav>
          {localStorage.getItem("email") ? (
            <button
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/signin" className="nav-link nav-text">
              Login
            </Link>
          )}
          {/* <Link to="/signin" className="nav-link nav-text">
            Login
          </Link> */}
          <Link to="/signup" className="nav-link nav-text">
            SignUp
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
