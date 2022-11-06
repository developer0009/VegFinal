import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Link from "react-responsive-carousel"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div style={{ border: "2px solid red" }}>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        variant="dark"
        bg="dark"
        className="header"
      >
        <Navbar.Brand>
          {" "}
          <Link to="/" className="Link link2">
            <h4>7 Cows Organics</h4>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav style={{ fontSize: "20px" }}>
            {" "}
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link eventKey={2} href="/contacts">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
