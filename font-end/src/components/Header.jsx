import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navStyle = { color: 'white' };

  return (
    <div style={{ background: 'black' }}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://samcenter.vn/images/thumbs/0005426_0003182_logo (2).png"
              alt=""
              width={100}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" style={{ textAlign: 'center' }}>
              <Nav.Link href="#samsunggalaxy" style={navStyle}>Samsung Galaxy</Nav.Link>
              <Nav.Link href="#galaxymatch" style={navStyle}>Galaxy Watch</Nav.Link>             
              <Nav.Link href="#galaxytab" style={navStyle}>Galaxy Tab</Nav.Link>
              <Nav.Link href="#galaxybuds" style={navStyle}>Galaxy Buds</Nav.Link>
              <Nav.Link href="#phukien" style={navStyle}>Phụ kiện</Nav.Link>
              <Nav.Link href="#dichvu" style={navStyle}>Dịch vụ</Nav.Link>
              <Nav.Link href="#hot" style={navStyle}>Hot</Nav.Link>
              <Nav.Link href="#tintuc" style={navStyle}>Tin tức</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
            <Nav className="ml-auto">
              <Nav.Link href="#cart" style={navStyle}>
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              </Nav.Link>
              <Nav.Link href="#login" style={navStyle}>
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
